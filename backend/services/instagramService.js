import axios from 'axios';

class InstagramService {
  constructor() {
    this.accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    this.userId = process.env.INSTAGRAM_USER_ID;
    this.baseUrl = 'https://graph.instagram.com/v12.0';
    this.cache = new Map();
    this.cacheTimeout = 60 * 60 * 1000; // 1 hour (Instagram has stricter rate limits)
  }

  // Get user profile information
  async getUserProfile() {
    try {
      const response = await axios.get(`${this.baseUrl}/${this.userId}`, {
        params: {
          fields: 'id,username,account_type,media_count',
          access_token: this.accessToken
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching Instagram profile:', error);
      throw new Error('Failed to fetch Instagram profile');
    }
  }

  // Get latest media posts
  async getLatestPosts(limit = 6) {
    try {
      // Check cache first
      const cacheKey = `posts_${limit}`;
      const cached = this.cache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
        return cached.data;
      }

      const response = await axios.get(`${this.baseUrl}/${this.userId}/media`, {
        params: {
          fields: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count',
          access_token: this.accessToken,
          limit: limit
        }
      });

      const posts = response.data.data.map(post => ({
        id: post.id,
        caption: post.caption ? this.truncateCaption(post.caption) : '',
        fullCaption: post.caption || '',
        mediaType: post.media_type,
        mediaUrl: post.media_url,
        thumbnailUrl: post.thumbnail_url || post.media_url,
        permalink: post.permalink,
        timestamp: post.timestamp,
        likeCount: post.like_count || 0,
        commentCount: post.comments_count || 0,
        isVideo: post.media_type === 'VIDEO',
        isCarousel: post.media_type === 'CAROUSEL_ALBUM'
      }));

      // Cache the result
      this.cache.set(cacheKey, {
        data: posts,
        timestamp: Date.now()
      });

      return posts;
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      // Return cached data if available
      const cached = this.cache.get(`posts_${limit}`);
      if (cached) {
        return cached.data;
      }
      throw new Error('Failed to fetch Instagram posts');
    }
  }

  // Get media by ID with detailed information
  async getMediaById(mediaId) {
    try {
      const response = await axios.get(`${this.baseUrl}/${mediaId}`, {
        params: {
          fields: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,children{media_url,media_type}',
          access_token: this.accessToken
        }
      });

      const media = response.data;
      return {
        id: media.id,
        caption: media.caption ? this.truncateCaption(media.caption) : '',
        fullCaption: media.caption || '',
        mediaType: media.media_type,
        mediaUrl: media.media_url,
        thumbnailUrl: media.thumbnail_url || media.media_url,
        permalink: media.permalink,
        timestamp: media.timestamp,
        likeCount: media.like_count || 0,
        commentCount: media.comments_count || 0,
        isVideo: media.media_type === 'VIDEO',
        isCarousel: media.media_type === 'CAROUSEL_ALBUM',
        children: media.children?.data || []
      };
    } catch (error) {
      console.error('Error fetching media by ID:', error);
      throw new Error('Failed to fetch media details');
    }
  }

  // Get stories (if available)
  async getStories() {
    try {
      const response = await axios.get(`${this.baseUrl}/${this.userId}/stories`, {
        params: {
          fields: 'id,media_type,media_url,permalink,timestamp',
          access_token: this.accessToken
        }
      });

      return response.data.data.map(story => ({
        id: story.id,
        mediaType: story.media_type,
        mediaUrl: story.media_url,
        permalink: story.permalink,
        timestamp: story.timestamp,
        isVideo: story.media_type === 'VIDEO'
      }));
    } catch (error) {
      console.error('Error fetching Instagram stories:', error);
      return []; // Stories might not be available
    }
  }

  // Search posts by hashtag or keyword in caption
  async searchPosts(query, limit = 10) {
    try {
      const allPosts = await this.getLatestPosts(50); // Get more posts to search through
      
      const filteredPosts = allPosts.filter(post => 
        post.fullCaption.toLowerCase().includes(query.toLowerCase()) ||
        post.fullCaption.toLowerCase().includes(`#${query.toLowerCase()}`)
      );

      return filteredPosts.slice(0, limit);
    } catch (error) {
      console.error('Error searching Instagram posts:', error);
      throw new Error('Failed to search Instagram posts');
    }
  }

  // Get posts by media type
  async getPostsByType(mediaType, limit = 6) {
    try {
      const allPosts = await this.getLatestPosts(50);
      
      const filteredPosts = allPosts.filter(post => 
        post.mediaType === mediaType.toUpperCase()
      );

      return filteredPosts.slice(0, limit);
    } catch (error) {
      console.error('Error fetching posts by type:', error);
      throw new Error('Failed to fetch posts by type');
    }
  }

  // Get engagement statistics
  async getEngagementStats() {
    try {
      const posts = await this.getLatestPosts(30);
      
      const totalLikes = posts.reduce((sum, post) => sum + post.likeCount, 0);
      const totalComments = posts.reduce((sum, post) => sum + post.commentCount, 0);
      const avgLikes = Math.round(totalLikes / posts.length);
      const avgComments = Math.round(totalComments / posts.length);
      
      return {
        totalPosts: posts.length,
        totalLikes,
        totalComments,
        averageLikes: avgLikes,
        averageComments: avgComments,
        engagementRate: posts.length > 0 ? ((totalLikes + totalComments) / posts.length).toFixed(2) : 0
      };
    } catch (error) {
      console.error('Error calculating engagement stats:', error);
      throw new Error('Failed to calculate engagement statistics');
    }
  }

  // Truncate caption for display
  truncateCaption(caption, maxLength = 100) {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength).trim() + '...';
  }

  // Clear cache
  clearCache() {
    this.cache.clear();
  }

  // Get cache status
  getCacheStatus() {
    const now = Date.now();
    const status = {};
    
    for (const [key, value] of this.cache.entries()) {
      const age = now - value.timestamp;
      const isExpired = age > this.cacheTimeout;
      status[key] = {
        age: Math.floor(age / 1000), // seconds
        isExpired,
        dataCount: value.data.length
      };
    }
    
    return status;
  }

  // Test Instagram API connection
  async testConnection() {
    try {
      const profile = await this.getUserProfile();
      return {
        success: true,
        message: 'Instagram API connection successful',
        profile: {
          id: profile.id,
          username: profile.username,
          accountType: profile.account_type,
          mediaCount: profile.media_count
        }
      };
    } catch (error) {
      return {
        success: false,
        message: 'Instagram API connection failed',
        error: error.message
      };
    }
  }
}

export default new InstagramService();
