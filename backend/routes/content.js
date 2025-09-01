import express from 'express';
import Content from '../models/Content.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all content (public)
// @route   GET /api/content
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 12, category, type, search, sort = 'newest' } = req.query;
    
    const query = { status: 'published' };
    if (category) query.category = category;
    if (type) query.type = type;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    let sortOption = {};
    switch (sort) {
      case 'newest':
        sortOption = { 'publishing.publishDate': -1 };
        break;
      case 'oldest':
        sortOption = { 'publishing.publishDate': 1 };
        break;
      case 'popular':
        sortOption = { 'analytics.viewCount': -1 };
        break;
      case 'title':
        sortOption = { title: 1 };
        break;
      default:
        sortOption = { 'publishing.publishDate': -1 };
    }

    const content = await Content.find(query)
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('host', 'username profile.firstName profile.lastName')
      .exec();

    const count = await Content.countDocuments(query);

    res.json({
      success: true,
      data: content,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(count / limit),
        totalItems: count,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Get content error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content'
    });
  }
});

// @desc    Get content by ID (public)
// @route   GET /api/content/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id)
      .populate('host', 'username profile.firstName profile.lastName')
      .populate('relatedContent', 'title thumbnail type category');

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    if (content.status !== 'published') {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Increment view count
    content.analytics.views += 1;
    await content.save();

    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get content by ID error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content'
    });
  }
});

// @desc    Create new content
// @route   POST /api/content
// @access  Private/Admin/Editor
router.post('/', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const contentData = {
      ...req.body,
      host: req.user.userId,
      createdBy: req.user.userId
    };

    const content = new Content(contentData);
    await content.save();

    res.status(201).json({
      success: true,
      message: 'Content created successfully',
      data: content
    });
  } catch (error) {
    console.error('Create content error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create content'
    });
  }
});

// @desc    Update content
// @route   PUT /api/content/:id
// @access  Private/Admin/Editor
router.put('/:id', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Check if user can edit this content
    if (content.host.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to edit this content'
      });
    }

    const updatedContent = await Content.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedBy: req.user.userId, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Content updated successfully',
      data: updatedContent
    });
  } catch (error) {
    console.error('Update content error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update content'
    });
  }
});

// @desc    Delete content
// @route   DELETE /api/content/:id
// @access  Private/Admin/Editor
router.delete('/:id', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Check if user can delete this content
    if (content.host.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this content'
      });
    }

    await Content.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    console.error('Delete content error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete content'
    });
  }
});

// @desc    Get content by category
// @route   GET /api/content/category/:category
// @access  Public
router.get('/category/:category', async (req, res) => {
  try {
    const { page = 1, limit = 12, sort = 'newest' } = req.query;
    const { category } = req.params;

    let sortOption = {};
    switch (sort) {
      case 'newest':
        sortOption = { publishedAt: -1 };
        break;
      case 'oldest':
        sortOption = { publishedAt: 1 };
        break;
      case 'popular':
        sortOption = { 'analytics.viewCount': -1 };
        break;
      default:
        sortOption = { publishedAt: -1 };
    }

    const content = await Content.find({ 
      category, 
      status: 'published' 
    })
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('host', 'username profile.firstName profile.lastName')
      .exec();

    const count = await Content.countDocuments({ category, status: 'published' });

    res.json({
      success: true,
      data: content,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(count / limit),
        totalItems: count,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Get content by category error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content by category'
    });
  }
});

// @desc    Get content by type
// @route   GET /api/content/type/:type
// @access  Public
router.get('/type/:type', async (req, res) => {
  try {
    const { page = 1, limit = 12, sort = 'newest' } = req.query;
    const { type } = req.params;

    let sortOption = {};
    switch (sort) {
      case 'newest':
        sortOption = { publishedAt: -1 };
        break;
      case 'oldest':
        sortOption = { publishedAt: 1 };
        break;
      case 'popular':
        sortOption = { 'analytics.viewCount': -1 };
        break;
      default:
        sortOption = { publishedAt: -1 };
    }

    const content = await Content.find({ 
      type, 
      status: 'published' 
    })
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('host', 'username profile.firstName profile.lastName')
      .exec();

    const count = await Content.countDocuments({ type, status: 'published' });

    res.json({
      success: true,
      data: content,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(count / limit),
        totalItems: count,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Get content by type error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content by type'
    });
  }
});

// @desc    Search content
// @route   GET /api/content/search
// @access  Public
router.get('/search', async (req, res) => {
  try {
    const { q, page = 1, limit = 12, category, type } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const query = { 
      status: 'published',
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { tags: { $in: [new RegExp(q, 'i')] } }
      ]
    };

    if (category) query.category = category;
    if (type) query.type = type;

    const content = await Content.find(query)
      .sort({ 'publishing.publishDate': -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('host', 'username profile.firstName profile.lastName')
      .exec();

    const count = await Content.countDocuments(query);

    res.json({
      success: true,
      data: content,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(count / limit),
        totalItems: count,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Search content error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to search content'
    });
  }
});

// @desc    Get content statistics
// @route   GET /api/content/stats/overview
// @access  Private/Admin
router.get('/stats/overview', protect, authorize('admin'), async (req, res) => {
  try {
    const total = await Content.countDocuments();
    const published = await Content.countDocuments({ status: 'published' });
    const draft = await Content.countDocuments({ status: { $ne: 'published' } });
    
    const byCategory = await Content.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    const byType = await Content.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$type', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    const totalViews = await Content.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: null, totalViews: { $sum: '$analytics.views' } } }
    ]);

    res.json({
      success: true,
      data: {
        total,
        published,
        draft,
        byCategory,
        byType,
        totalViews: totalViews[0]?.totalViews || 0
      }
    });
  } catch (error) {
    console.error('Get content stats error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content statistics'
    });
  }
});

export default router;
