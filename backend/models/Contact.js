import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'closed'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  category: {
    type: String,
    enum: ['general', 'business', 'technical', 'feedback', 'partnership', 'other'],
    default: 'general'
  },
  source: {
    type: String,
    enum: ['website', 'email', 'phone', 'social-media', 'referral'],
    default: 'website'
  },
  tags: [String],
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  notes: [{
    note: String,
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  followUp: {
    scheduled: Date,
    completed: Date,
    notes: String
  },
  response: {
    message: String,
    respondedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    respondedAt: Date,
    method: {
      type: String,
      enum: ['email', 'phone', 'in-person'],
      default: 'email'
    }
  },
  metadata: {
    ipAddress: String,
    userAgent: String,
    referrer: String,
    utmSource: String,
    utmMedium: String,
    utmCampaign: String
  }
}, {
  timestamps: true
});

// Indexes for better query performance
contactSchema.index({ status: 1, priority: 1, createdAt: -1 });
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ assignedTo: 1, status: 1 });
contactSchema.index({ category: 1, status: 1 });

// Virtual for time since creation
contactSchema.virtual('timeSinceCreation').get(function() {
  const now = new Date();
  const created = this.createdAt;
  const diffInHours = Math.floor((now - created) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
});

// Method to mark as read
contactSchema.methods.markAsRead = function() {
  this.status = 'read';
  return this.save();
};

// Method to add note
contactSchema.methods.addNote = function(note, userId) {
  this.notes.push({
    note,
    addedBy: userId
  });
  return this.save();
};

// Method to assign to user
contactSchema.methods.assignTo = function(userId) {
  this.assignedTo = userId;
  return this.save();
};

// Method to respond to contact
contactSchema.methods.respond = function(message, userId, method = 'email') {
  this.status = 'replied';
  this.response = {
    message,
    respondedBy: userId,
    respondedAt: new Date(),
    method
  };
  return this.save();
};

// Method to schedule follow-up
contactSchema.methods.scheduleFollowUp = function(date, notes = '') {
  this.followUp.scheduled = date;
  this.followUp.notes = notes;
  return this.save();
};

// Method to complete follow-up
contactSchema.methods.completeFollowUp = function() {
  this.followUp.completed = new Date();
  return this.save();
};

// Pre-save middleware to set priority based on subject/keywords
contactSchema.pre('save', function(next) {
  if (this.isModified('subject') || this.isModified('message')) {
    const urgentKeywords = ['urgent', 'emergency', 'critical', 'asap', 'immediate'];
    const highKeywords = ['important', 'priority', 'serious', 'concern'];
    
    const text = `${this.subject} ${this.message}`.toLowerCase();
    
    if (urgentKeywords.some(keyword => text.includes(keyword))) {
      this.priority = 'urgent';
      this.status = 'new';
    } else if (highKeywords.some(keyword => text.includes(keyword))) {
      this.priority = 'high';
    }
  }
  next();
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
