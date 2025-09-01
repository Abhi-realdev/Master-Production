import axios from 'axios';

class YouTubeService {
  constructor() {
    this.apiKey = process.env.YOUTUBE_API_KEY;
    this.channelId = 'UCvibes-unplugged'; // Extract from URL
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
    this.cache = new Map();
    this.cacheTimeout = 30 * 60 * 1000; // 30 minutes (YouTube has generous rate limits)
  }

  // Get channel information
  async getChannelInfo() {
    try {
      const cacheKey = 'channel_info';
      if (this.isCacheValid(cacheKey)) {
        return this.cache.get(cacheKey).data;
      }

      const response = await axios.get(`${this.baseUrl}/channels`, {
        params: {
          part: 'snippet,statistics,brandingSettings',
          forUsername: 'vibes.unplugged',
          key: this.apiKey
        }
      });

      if (response.data.items && response.data.items.length > 0) {
        const channel = response.data.items[0];
        const channelInfo = {
          id: channel.id,
          title: channel.snippet.title,
          description: channel.snippet.description,
          thumbnail: channel.snippet.thumbnails.high.url,
          subscriberCount: channel.statistics.subscriberCount,
          videoCount: channel.statistics.videoCount,
          viewCount: channel.statistics.viewCount,
          customUrl: channel.snippet.customUrl,
          publishedAt: channel.snippet.publishedAt
        };

        this.setCache(cacheKey, channelInfo);
        return channelInfo;
      }

      throw new Error('Channel not found');
    } catch (error) {
      console.error('Error fetching channel info:', error.message);
      throw error;
    }
  }

  // Get latest videos from channel
  async getLatestVideos(limit = 10) {
    try {
      const cacheKey = `latest_videos_${limit}`;
      if (this.isCacheValid(cacheKey)) {
        return this.cache.get(cacheKey).data;
      }

      const response = await axios.get(`${this.baseUrl}/search`, {
        params: {
          part: 'snippet',
          channelId: await this.getChannelId(),
          order: 'date',
          type: 'video',
          maxResults: limit,
          key: this.apiKey
        }
      });

      const videos = response.data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));

      this.setCache(cacheKey, videos);
      return videos;
    } catch (error) {
      console.error('Error fetching latest videos:', error.message);
      throw error;
    }
  }

  // Get video details by ID
  async getVideoById(videoId) {
    try {
      const cacheKey = `video_${videoId}`;
      if (this.isCacheValid(cacheKey)) {
        return this.cache.get(cacheKey).data;
      }

      const response = await axios.get(`${this.baseUrl}/videos`, {
        params: {
          part: 'snippet,statistics,contentDetails',
          id: videoId,
          key: this.apiKey
        }
      });

      if (response.data.items && response.data.items.length > 0) {
        const video = response.data.items[0];
        const videoDetails = {
          id: video.id,
          title: video.snippet.title,
          description: video.snippet.description,
          thumbnail: video.snippet.thumbnails.high.url,
          publishedAt: video.snippet.publishedAt,
          channelTitle: video.snippet.channelTitle,
          channelId: video.snippet.channelId,
          duration: video.contentDetails.duration,
          viewCount: video.statistics.viewCount,
          likeCount: video.statistics.likeCount,
          commentCount: video.statistics.commentCount,
          tags: video.snippet.tags || [],
          categoryId: video.snippet.categoryId,
          defaultLanguage: video.snippet.defaultLanguage,
          url: `https://www.youtube.com/watch?v=${video.id}`
        };

        this.setCache(cacheKey, videoDetails);
        return videoDetails;
      }

      throw new Error('Video not found');
    } catch (error) {
      console.error('Error fetching video details:', error.message);
      throw error;
    }
  }

  // Search videos in channel
  async searchVideos(query, limit = 10) {
    try {
      const cacheKey = `search_${query}_${limit}`;
      if (this.isCacheValid(cacheKey)) {
        return this.cache.get(cacheKey).data;
      }

      const response = await axios.get(`${this.baseUrl}/search`, {
        params: {
          part: 'snippet',
          channelId: await this.getChannelId(),
          q: query,
          type: 'video',
          maxResults: limit,
          key: this.apiKey
        }
      });

      const videos = response.data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));

      this.setCache(cacheKey, videos);
      return videos;
    } catch (error) {
      console.error('Error searching videos:', error.message);
      throw error;
    }
  }

  // Get videos by category
  async getVideosByCategory(categoryId, limit = 10) {
    try {
      const cacheKey = `category_${categoryId}_${limit}`;
      if (this.isCacheValid(cacheKey)) {
        return this.cache.get(cacheKey).data;
      }

      const response = await axios.get(`${this.baseUrl}/search`, {
        params: {
          part: 'snippet',
          channelId: await this.getChannelId(),
          videoCategoryId: categoryId,
          type: 'video',
          maxResults: limit,
          key: this.apiKey
        }
      });

      const videos = response.data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));

      this.setCache(cacheKey, videos);
      return videos;
    } catch (error) {
      console.error('Error fetching videos by category:', error.message);
      throw error;
    }
  }

  // Get channel statistics
  async getChannelStats() {
    try {
      const cacheKey = 'channel_stats';
      if (this.isCacheValid(cacheKey)) {
        return this.cache.get(cacheKey).data;
      }

      const channelInfo = await this.getChannelInfo();
      const stats = {
        subscriberCount: channelInfo.subscriberCount,
        videoCount: channelInfo.videoCount,
        viewCount: channelInfo.viewCount,
        lastUpdated: new Date().toISOString()
      };

      this.setCache(cacheKey, stats);
      return stats;
    } catch (error) {
      console.error('Error fetching channel stats:', error.message);
      throw error;
    }
  }

  // Get channel ID from username
  async getChannelId() {
    try {
      const cacheKey = 'channel_id';
      if (this.isCacheValid(cacheKey)) {
        return this.cache.get(cacheKey).data;
      }

      const response = await axios.get(`${this.baseUrl}/channels`, {
        params: {
          part: 'id',
          forUsername: 'vibes.unplugged',
          key: this.apiKey
        }
      });

      if (response.data.items && response.data.items.length > 0) {
        const channelId = response.data.items[0].id;
        this.setCache(cacheKey, channelId);
        return channelId;
      }

      throw new Error('Channel ID not found');
    } catch (error) {
      console.error('Error fetching channel ID:', error.message);
      throw error;
    }
  }

  // Cache management
  setCache(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  isCacheValid(key) {
    const cached = this.cache.get(key);
    if (!cached) return false;
    
    return (Date.now() - cached.timestamp) < this.cacheTimeout;
  }

  clearCache() {
    this.cache.clear();
  }

  getCacheStatus() {
    const status = {};
    for (const [key, value] of this.cache.entries()) {
      status[key] = {
        age: Date.now() - value.timestamp,
        valid: this.isCacheValid(key)
      };
    }
    return status;
  }

  // Test API connection
  async testConnection() {
    try {
      await this.getChannelInfo();
      return {
        status: 'success',
        message: 'YouTube API connection successful',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}

export default new YouTubeService();
