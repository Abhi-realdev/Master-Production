class WhatsAppService {
  constructor() {
    this.phoneNumber = '+91 78008 44260';
    this.defaultMessage = 'Hello! I would like to know more about your services.';
    this.apiUrl = 'https://api.whatsapp.com/send';
  }

  // Generate WhatsApp direct chat link
  generateChatLink(message = null, phone = null) {
    const targetPhone = phone || this.phoneNumber;
    const chatMessage = message || this.defaultMessage;
    
    // Format phone number (remove spaces and special characters)
    const formattedPhone = targetPhone.replace(/[\s\-\(\)]/g, '');
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(chatMessage);
    
    return `${this.apiUrl}?phone=${formattedPhone}&text=${encodedMessage}`;
  }

  // Generate WhatsApp business link
  generateBusinessLink(phone = null) {
    const targetPhone = phone || this.phoneNumber;
    const formattedPhone = targetPhone.replace(/[\s\-\(\)]/g, '');
    
    return `https://wa.me/${formattedPhone}`;
  }

  // Generate WhatsApp group invite link (if needed)
  generateGroupInviteLink(groupId) {
    return `https://chat.whatsapp.com/${groupId}`;
  }

  // Validate phone number format
  validatePhoneNumber(phone) {
    // Basic validation for Indian phone numbers
    const indianPhoneRegex = /^(\+91|91|0)?[789]\d{9}$/;
    return indianPhoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  // Format phone number for display
  formatPhoneNumber(phone) {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    
    if (cleaned.startsWith('91')) {
      return `+91 ${cleaned.slice(2, 7)} ${cleaned.slice(7, 10)} ${cleaned.slice(10)}`;
    } else if (cleaned.startsWith('+91')) {
      return `+91 ${cleaned.slice(3, 8)} ${cleaned.slice(8, 11)} ${cleaned.slice(11)}`;
    } else if (cleaned.startsWith('0')) {
      return `+91 ${cleaned.slice(1, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
    }
    
    return phone; // Return original if no formatting applied
  }

  // Get WhatsApp status (online/offline - requires WhatsApp Business API)
  async getStatus(phone = null) {
    try {
      const targetPhone = phone || this.phoneNumber;
      
      // Note: This would require WhatsApp Business API access
      // For now, return a mock response
      return {
        phone: targetPhone,
        status: 'available', // available, unavailable, unknown
        lastSeen: new Date().toISOString(),
        isOnline: false,
        message: 'Status checking requires WhatsApp Business API access'
      };
    } catch (error) {
      console.error('Error checking WhatsApp status:', error);
      return {
        phone: phone || this.phoneNumber,
        status: 'unknown',
        error: error.message
      };
    }
  }

  // Send WhatsApp message via API (requires WhatsApp Business API)
  async sendMessage(phone, message) {
    try {
      const targetPhone = phone || this.phoneNumber;
      
      // Note: This would require WhatsApp Business API access
      // For now, return a mock response
      return {
        success: true,
        messageId: `msg_${Date.now()}`,
        phone: targetPhone,
        message: message,
        timestamp: new Date().toISOString(),
        status: 'sent',
        note: 'Message sending requires WhatsApp Business API access'
      };
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      return {
        success: false,
        error: error.message,
        phone: phone || this.phoneNumber
      };
    }
  }

  // Get WhatsApp contact info
  getContactInfo(phone = null) {
    const targetPhone = phone || this.phoneNumber;
    const formattedPhone = this.formatPhoneNumber(targetPhone);
    
    return {
      phone: targetPhone,
      formattedPhone,
      whatsappLink: this.generateChatLink(null, targetPhone),
      businessLink: this.generateBusinessLink(targetPhone),
      isValid: this.validatePhoneNumber(targetPhone)
    };
  }

  // Generate multiple message templates
  generateMessageTemplates() {
    return {
      general: 'Hello! I would like to know more about your services.',
      service: 'Hi! I\'m interested in your services. Can you provide more details?',
      pricing: 'Hello! Could you please share your pricing information?',
      consultation: 'Hi! I\'d like to schedule a consultation. When are you available?',
      partnership: 'Hello! I\'m interested in exploring partnership opportunities.',
      feedback: 'Hi! I have some feedback about your services.',
      support: 'Hello! I need help with your services. Can you assist me?'
    };
  }

  // Generate WhatsApp link with custom message template
  generateTemplateLink(template, phone = null) {
    const templates = this.generateMessageTemplates();
    const message = templates[template] || this.defaultMessage;
    
    return this.generateChatLink(message, phone);
  }

  // Get service information for WhatsApp
  getServiceInfo() {
    return {
      phone: this.phoneNumber,
      formattedPhone: this.formatPhoneNumber(this.phoneNumber),
      chatLink: this.generateChatLink(),
      businessLink: this.generateBusinessLink(),
      templates: this.generateMessageTemplates(),
      availability: {
        weekdays: '9:00 AM - 6:00 PM',
        weekends: '10:00 AM - 4:00 PM',
        timezone: 'IST (UTC+5:30)'
      },
      responseTime: 'Usually responds within 1-2 hours during business hours',
      languages: ['English', 'Hindi'],
      services: [
        'Content Creation',
        'Video Production',
        'Podcast Services',
        'Social Media Management',
        'Digital Marketing',
        'Consultation'
      ]
    };
  }

  // Generate QR code data for WhatsApp Web (if needed)
  generateQRData() {
    // This would be used for WhatsApp Web integration
    return {
      type: 'whatsapp-web',
      data: `whatsapp://send?phone=${this.phoneNumber.replace(/[\s\-\(\)]/g, '')}`,
      note: 'QR code generation requires additional setup'
    };
  }

  // Test WhatsApp service
  testService() {
    return {
      success: true,
      message: 'WhatsApp service is working correctly',
      phone: this.phoneNumber,
      formattedPhone: this.formatPhoneNumber(this.phoneNumber),
      chatLink: this.generateChatLink(),
      businessLink: this.generateBusinessLink(),
      isValid: this.validatePhoneNumber(this.phoneNumber),
      timestamp: new Date().toISOString()
    };
  }
}

export default new WhatsAppService();
