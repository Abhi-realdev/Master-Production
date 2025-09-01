import express from 'express';
import youtubeService from '../services/youtubeService.js';
import instagramService from '../services/instagramService.js';

const router = express.Router();

// @desc    Get latest social media content (YouTube + Instagram)
// @route   GET /api/social/latest
// @access  Public
router.get('/latest', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;
    
    // Fetch content from both platforms concurrently
    const [youtubeVideos, instagramPosts] = await Promise.allSettled([
      youtubeService.getLatestVideos(limit),
      instagramService.getLatestPosts(limit)
    ]);

    const response = {
      success: true,
      data: {
        youtube: {
          success: youtubeVideos.status === 'fulfilled',
          videos: youtubeVideos.status === 'fulfilled' ? youtubeVideos.value : [],
          error: youtubeVideos.status === 'rejected' ? youtubeVideos.reason.message : null
        },
        instagram: {
          success: instagramPosts.status === 'fulfilled',
          posts: instagramPosts.status === 'fulfilled' ? instagramPosts.value : [],
          error: instagramPosts.status === 'rejected' ? instagramPosts.reason.message : null
        }
      },
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching social media content:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch social media content'
    });
  }
});

// @desc    Get YouTube latest videos
// @route   GET /api/social/youtube
// @access  Public
router.get('/youtube', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;
    const videos = await youtubeService.getLatestVideos(limit);

    res.json({
      success: true,
      data: videos,
      count: videos.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch YouTube videos'
    });
  }
});

// @desc    Get Instagram latest posts
// @route   GET /api/social/instagram
// @access  Public
router.get('/instagram', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;
    const posts = await instagramService.getLatestPosts(limit);

    res.json({
      success: true,
      data: posts,
      count: posts.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Instagram posts'
    });
  }
});

// @desc    Get YouTube video details
// @route   GET /api/social/youtube/:videoId
// @access  Public
router.get('/youtube/:videoId', async (req, res) => {
  try {
    const video = await youtubeService.getVideoDetails(req.params.videoId);

    res.json({
      success: true,
      data: video
    });
  } catch (error) {
    console.error('Error fetching YouTube video details:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch video details'
    });
  }
});

// @desc    Get Instagram post details
// @route   GET /api/social/instagram/:postId
// @access  Public
router.get('/instagram/:postId', async (req, res) => {
  try {
    const post = await instagramService.getMediaById(req.params.postId);

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    console.error('Error fetching Instagram post details:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch post details'
    });
  }
});

// @desc    Search YouTube videos
// @route   GET /api/social/youtube/search
// @access  Public
router.get('/youtube/search', async (req, res) => {
  try {
    const { q, limit = 10 } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const videos = await youtubeService.searchVideos(q, parseInt(limit));

    res.json({
      success: true,
      data: videos,
      query: q,
      count: videos.length
    });
  } catch (error) {
    console.error('Error searching YouTube videos:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search YouTube videos'
    });
  }
});

// @desc    Search Instagram posts
// @route   GET /api/social/instagram/search
// @access  Public
router.get('/instagram/search', async (req, res) => {
  try {
    const { q, limit = 10 } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const posts = await instagramService.searchPosts(q, parseInt(limit));

    res.json({
      success: true,
      data: posts,
      query: q,
      count: posts.length
    });
  } catch (error) {
    console.error('Error searching Instagram posts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search Instagram posts'
    });
  }
});

// @desc    Get YouTube channel statistics
// @route   GET /api/social/youtube/stats
// @access  Public
router.get('/youtube/stats', async (req, res) => {
  try {
    const stats = await youtubeService.getChannelStats();

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching YouTube stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch YouTube statistics'
    });
  }
});

// @desc    Get Instagram engagement statistics
// @route   GET /api/social/instagram/stats
// @access  Public
router.get('/instagram/stats', async (req, res) => {
  try {
    const stats = await instagramService.getEngagementStats();

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching Instagram stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Instagram statistics'
    });
  }
});

// @desc    Get Instagram stories
// @route   GET /api/social/instagram/stories
// @access  Public
router.get('/instagram/stories', async (req, res) => {
  try {
    const stories = await instagramService.getStories();

    res.json({
      success: true,
      data: stories,
      count: stories.length
    });
  } catch (error) {
    console.error('Error fetching Instagram stories:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Instagram stories'
    });
  }
});

// @desc    Test social media API connections
// @route   GET /api/social/test
// @access  Public
router.get('/test', async (req, res) => {
  try {
    const [youtubeTest, instagramTest] = await Promise.allSettled([
      youtubeService.testConnection(),
      instagramService.testConnection()
    ]);

    res.json({
      success: true,
      data: {
        youtube: youtubeTest.status === 'fulfilled' ? youtubeTest.value : youtubeTest.reason,
        instagram: instagramTest.status === 'fulfilled' ? instagramTest.value : instagramTest.reason
      }
    });
  } catch (error) {
    console.error('Error testing social media APIs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to test social media APIs'
    });
  }
});

// @desc    Clear social media cache
// @route   POST /api/social/cache/clear
// @access  Public
router.post('/cache/clear', async (req, res) => {
  try {
    youtubeService.clearCache();
    instagramService.clearCache();

    res.json({
      success: true,
      message: 'Social media cache cleared successfully'
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to clear cache'
    });
  }
});

// @desc    Get cache status
// @route   GET /api/social/cache/status
// @access  Public
router.get('/cache/status', async (req, res) => {
  try {
    const youtubeCache = youtubeService.getCacheStatus();
    const instagramCache = instagramService.getCacheStatus();

    res.json({
      success: true,
      data: {
        youtube: youtubeCache,
        instagram: instagramCache
      }
    });
  } catch (error) {
    console.error('Error getting cache status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get cache status'
    });
  }
});

export default router;
