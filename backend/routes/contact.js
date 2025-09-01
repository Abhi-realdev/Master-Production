import express from 'express';
import Contact from '../models/Contact.js';
import emailService from '../services/emailService.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, subject, and message'
      });
    }

    // Create contact record
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      phone: phone || null
    });

    await contact.save();

    // Send email
    try {
      await emailService.sendContactEmail(contact);
    } catch (emailError) {
      console.error('Email sending failed:', emailError.message);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        submittedAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Contact form error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form'
    });
  }
});

// @desc    Submit service request
// @route   POST /api/contact/service
// @access  Public
router.post('/service', async (req, res) => {
  try {
    const { name, email, service, description, budget, timeline, phone } = req.body;

    // Basic validation
    if (!name || !email || !service || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, service, and description'
      });
    }

    // Create contact record for service request
    const contact = new Contact({
      name,
      email,
      subject: `Service Request: ${service}`,
      message: `Service: ${service}\n\nDescription: ${description}\n\nBudget: ${budget || 'Not specified'}\nTimeline: ${timeline || 'Not specified'}`,
      phone: phone || null,
      type: 'service_request',
      priority: 'high'
    });

    await contact.save();

    // Send email
    try {
      await emailService.sendServiceRequest({
        name,
        email,
        service,
        description,
        budget,
        timeline,
        phone
      });
    } catch (emailError) {
      console.error('Service email sending failed:', emailError.message);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Service request submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        service,
        submittedAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Service request error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to submit service request'
    });
  }
});

// @desc    Get all contact submissions (admin only)
// @route   GET /api/contact
// @access  Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
  try {
    const { page = 1, limit = 10, status, priority, type } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (type) query.type = type;

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
        itemsPerPage: limit
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

// @desc    Get contact by ID (admin only)
// @route   GET /api/contact/:id
// @access  Private/Admin
router.get('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Get contact error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact'
    });
  }
});

// @desc    Update contact status (admin only)
// @route   PUT /api/contact/:id/status
// @access  Private/Admin
router.put('/:id/status', protect, authorize('admin'), async (req, res) => {
  try {
    const { status, notes } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        notes: notes || null,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Update contact status error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact status'
    });
  }
});

// @desc    Delete contact (admin only)
// @route   DELETE /api/contact/:id
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Delete contact error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact'
    });
  }
});

// @desc    Get contact statistics (admin only)
// @route   GET /api/contact/stats/overview
// @access  Private/Admin
router.get('/stats/overview', protect, authorize('admin'), async (req, res) => {
  try {
    const total = await Contact.countDocuments();
    const newCount = await Contact.countDocuments({ status: 'new' });
    const inProgressCount = await Contact.countDocuments({ status: 'in_progress' });
    const resolvedCount = await Contact.countDocuments({ status: 'resolved' });
    const urgentCount = await Contact.countDocuments({ priority: 'urgent' });
    const highCount = await Contact.countDocuments({ priority: 'high' });
    const serviceRequests = await Contact.countDocuments({ type: 'service_request' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayCount = await Contact.countDocuments({ createdAt: { $gte: today } });

    const thisWeek = new Date();
    thisWeek.setDate(thisWeek.getDate() - 7);
    const weekCount = await Contact.countDocuments({ createdAt: { $gte: thisWeek } });

    res.json({
      success: true,
      data: {
        total,
        byStatus: {
          new: newCount,
          inProgress: inProgressCount,
          resolved: resolvedCount
        },
        byPriority: {
          urgent: urgentCount,
          high: highCount
        },
        byType: {
          general: total - serviceRequests,
          serviceRequests
        },
        byTime: {
          today: todayCount,
          thisWeek: weekCount
        }
      }
    });
  } catch (error) {
    console.error('Get contact stats error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact statistics'
    });
  }
});

export default router;
