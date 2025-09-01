import nodemailer from 'nodemailer';

class EmailService {
  constructor() {
    this.transporter = null;
    this.init();
  }

  init() {
    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      console.log('Email service initialized');
    } catch (error) {
      console.error('Email service init failed:', error.message);
    }
  }

  async sendContactEmail(contactData) {
    try {
      const { name, email, subject, message } = contactData;
      
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      const result = await this.transporter.sendMail(mailOptions);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('Email send error:', error.message);
      throw new Error('Failed to send email');
    }
  }

  async sendServiceRequest(serviceData) {
    try {
      const { name, email, service, description } = serviceData;
      
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Service Request: ${service}`,
        html: `
          <h3>New Service Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Description:</strong></p>
          <p>${description}</p>
        `
      };

      const result = await this.transporter.sendMail(mailOptions);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('Service email error:', error.message);
      throw new Error('Failed to send service request');
    }
  }

  async testConnection() {
    try {
      await this.transporter.verify();
      return { status: 'success', message: 'Email service working' };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }
}

export default new EmailService();
