import express from 'express';
import whatsappService from '../utils/whatsappService.js';

const router = express.Router();

// @desc    Get WhatsApp contact information
// @route   GET /api/whatsapp/contact
// @access  Public
router.get('/contact', (req, res) => {
  try {
    const contactInfo = whatsappService.getContactInfo();
    
    res.json({
      success: true,
      data: contactInfo,
      message: 'WhatsApp contact information retrieved successfully'
    });
  } catch (error) {
    console.error('Error getting WhatsApp contact info:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get WhatsApp contact information'
    });
  }
});

// @desc    Generate WhatsApp chat link
// @route   POST /api/whatsapp/chat-link
// @access  Public
router.post('/chat-link', (req, res) => {
  try {
    const { message, phone } = req.body;
    
    const chatLink = whatsappService.generateChatLink(message, phone);
    
    res.json({
      success: true,
      data: {
        chatLink,
        message: message || whatsappService.defaultMessage,
        phone: phone || whatsappService.phoneNumber,
        formattedPhone: whatsappService.formatPhoneNumber(phone || whatsappService.phoneNumber)
      },
      message: 'WhatsApp chat link generated successfully'
    });
  } catch (error) {
    console.error('Error generating WhatsApp chat link:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate WhatsApp chat link'
    });
  }
});

// @desc    Get WhatsApp business link
// @route   GET /api/whatsapp/business-link
// @access  Public
router.get('/business-link', (req, res) => {
  try {
    const { phone } = req.query;
    const businessLink = whatsappService.generateBusinessLink(phone);
    
    res.json({
      success: true,
      data: {
        businessLink,
        phone: phone || whatsappService.phoneNumber,
        formattedPhone: whatsappService.formatPhoneNumber(phone || whatsappService.phoneNumber)
      },
      message: 'WhatsApp business link generated successfully'
    });
  } catch (error) {
    console.error('Error generating WhatsApp business link:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate WhatsApp business link'
    });
  }
});

// @desc    Get WhatsApp message templates
// @route   GET /api/whatsapp/templates
// @access  Public
router.get('/templates', (req, res) => {
  try {
    const templates = whatsappService.generateMessageTemplates();
    
    res.json({
      success: true,
      data: templates,
      message: 'WhatsApp message templates retrieved successfully'
    });
  } catch (error) {
    console.error('Error getting WhatsApp templates:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get WhatsApp message templates'
    });
  }
});

// @desc    Generate WhatsApp link with template
// @route   POST /api/whatsapp/template-link
// @access  Public
router.post('/template-link', (req, res) => {
  try {
    const { template, phone } = req.body;
    
    if (!template) {
      return res.status(400).json({
        success: false,
        message: 'Template type is required'
      });
    }
    
    const templateLink = whatsappService.generateTemplateLink(template, phone);
    const templates = whatsappService.generateMessageTemplates();
    
    res.json({
      success: true,
      data: {
        templateLink,
        template,
        message: templates[template] || whatsappService.defaultMessage,
        phone: phone || whatsappService.phoneNumber,
        formattedPhone: whatsappService.formatPhoneNumber(phone || whatsappService.phoneNumber)
      },
      message: 'WhatsApp template link generated successfully'
    });
  } catch (error) {
    console.error('Error generating WhatsApp template link:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate WhatsApp template link'
    });
  }
});

// @desc    Get WhatsApp service information
// @route   GET /api/whatsapp/service-info
// @access  Public
router.get('/service-info', (req, res) => {
  try {
    const serviceInfo = whatsappService.getServiceInfo();
    
    res.json({
      success: true,
      data: serviceInfo,
      message: 'WhatsApp service information retrieved successfully'
    });
  } catch (error) {
    console.error('Error getting WhatsApp service info:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get WhatsApp service information'
    });
  }
});

// @desc    Validate phone number
// @route   POST /api/whatsapp/validate-phone
// @access  Public
router.post('/validate-phone', (req, res) => {
  try {
    const { phone } = req.body;
    
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required'
      });
    }
    
    const isValid = whatsappService.validatePhoneNumber(phone);
    const formattedPhone = whatsappService.formatPhoneNumber(phone);
    
    res.json({
      success: true,
      data: {
        phone,
        formattedPhone,
        isValid,
        whatsappLink: isValid ? whatsappService.generateChatLink(null, phone) : null,
        businessLink: isValid ? whatsappService.generateBusinessLink(phone) : null
      },
      message: `Phone number validation ${isValid ? 'successful' : 'failed'}`
    });
  } catch (error) {
    console.error('Error validating phone number:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to validate phone number'
    });
  }
});

// @desc    Get WhatsApp status (mock - requires Business API)
// @route   GET /api/whatsapp/status
// @access  Public
router.get('/status', async (req, res) => {
  try {
    const { phone } = req.query;
    const status = await whatsappService.getStatus(phone);
    
    res.json({
      success: true,
      data: status,
      message: 'WhatsApp status retrieved successfully',
      note: 'Status checking requires WhatsApp Business API access'
    });
  } catch (error) {
    console.error('Error getting WhatsApp status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get WhatsApp status'
    });
  }
});

// @desc    Send WhatsApp message (mock - requires Business API)
// @route   POST /api/whatsapp/send-message
// @access  Public
router.post('/send-message', async (req, res) => {
  try {
    const { phone, message } = req.body;
    
    if (!phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Phone number and message are required'
      });
    }
    
    const result = await whatsappService.sendMessage(phone, message);
    
    res.json({
      success: true,
      data: result,
      message: 'WhatsApp message sent successfully',
      note: 'Message sending requires WhatsApp Business API access'
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send WhatsApp message'
    });
  }
});

// @desc    Get WhatsApp QR code data
// @route   GET /api/whatsapp/qr-data
// @access  Public
router.get('/qr-data', (req, res) => {
  try {
    const qrData = whatsappService.generateQRData();
    
    res.json({
      success: true,
      data: qrData,
      message: 'WhatsApp QR code data generated successfully'
    });
  } catch (error) {
    console.error('Error generating WhatsApp QR data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate WhatsApp QR code data'
    });
  }
});

// @desc    Test WhatsApp service
// @route   GET /api/whatsapp/test
// @access  Public
router.get('/test', (req, res) => {
  try {
    const testResult = whatsappService.testService();
    
    res.json({
      success: true,
      data: testResult,
      message: 'WhatsApp service test completed successfully'
    });
  } catch (error) {
    console.error('Error testing WhatsApp service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to test WhatsApp service'
    });
  }
});

// @desc    Redirect to WhatsApp chat (for direct access)
// @route   GET /api/whatsapp/redirect
// @access  Public
router.get('/redirect', (req, res) => {
  try {
    const { message, phone } = req.query;
    const chatLink = whatsappService.generateChatLink(message, phone);
    
    // Redirect to WhatsApp
    res.redirect(chatLink);
  } catch (error) {
    console.error('Error redirecting to WhatsApp:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to redirect to WhatsApp'
    });
  }
});

// @desc    Get all WhatsApp links for a phone number
// @route   GET /api/whatsapp/all-links
// @access  Public
router.get('/all-links', (req, res) => {
  try {
    const { phone } = req.query;
    const targetPhone = phone || whatsappService.phoneNumber;
    
    const allLinks = {
      phone: targetPhone,
      formattedPhone: whatsappService.formatPhoneNumber(targetPhone),
      chatLink: whatsappService.generateChatLink(null, targetPhone),
      businessLink: whatsappService.generateBusinessLink(targetPhone),
      templates: Object.keys(whatsappService.generateMessageTemplates()).map(template => ({
        template,
        message: whatsappService.generateMessageTemplates()[template],
        link: whatsappService.generateTemplateLink(template, targetPhone)
      })),
      isValid: whatsappService.validatePhoneNumber(targetPhone)
    };
    
    res.json({
      success: true,
      data: allLinks,
      message: 'All WhatsApp links generated successfully'
    });
  } catch (error) {
    console.error('Error generating all WhatsApp links:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate all WhatsApp links'
    });
  }
});

export default router;
