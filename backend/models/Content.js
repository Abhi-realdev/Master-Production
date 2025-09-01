import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  type: {
    type: String,
    required: [true, 'Content type is required'],
    enum: ['podcast', 'video', 'live-event', 'documentary', 'interview-series', 'article'],
    default: 'podcast'
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['politics', 'administration', 'leadership', 'policy', 'governance', 'society', 'general']
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived', 'scheduled'],
    default: 'draft'
  },
  media: {
    thumbnail: {
      url: String,
      publicId: String,
      alt: String
    },
    audio: {
      url: String,
      publicId: String,
      duration: Number, // in seconds
      format: String
    },
    video: {
      url: String,
      publicId: String,
      duration: Number, // in seconds
      format: String,
      quality: String
    },
    transcript: String
  },
  metadata: {
    tags: [String],
    language: {
      type: String,
      default: 'en'
    },
    targetAudience: [String],
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'intermediate'
    }
  },
  publishing: {
    publishDate: Date,
    isPublic: {
      type: Boolean,
      default: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    priority: {
      type: Number,
      default: 0
    }
  },
  analytics: {
    views: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    },
    downloads: {
      type: Number,
      default: 0
    }
  },
  guests: [{
    name: String,
    title: String,
    organization: String,
    bio: String,
    image: String
  }],
  host: {
    name: String,
    title: String,
    image: String
  },
  relatedContent: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content'
  }],
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String],
    slug: {
      type: String,
      unique: true,
      sparse: true
    }
  }
}, {
  timestamps: true
});

// Indexes for better query performance
contentSchema.index({ title: 'text', description: 'text' });
contentSchema.index({ type: 1, status: 1, category: 1 });
contentSchema.index({ 'publishing.publishDate': -1 });
contentSchema.index({ 'publishing.featured': 1, 'publishing.priority': -1 });
contentSchema.index({ 'seo.slug': 1 });

// Virtual for formatted duration
contentSchema.virtual('formattedDuration').get(function() {
  if (this.media.audio?.duration) {
    return this.formatDuration(this.media.audio.duration);
  }
  if (this.media.video?.duration) {
    return this.formatDuration(this.media.video.duration);
  }
  return null;
});

// Method to format duration
contentSchema.methods.formatDuration = function(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Method to increment view count
contentSchema.methods.incrementView = function() {
  this.analytics.views += 1;
  return this.save();
};

// Method to get public content (without sensitive data)
contentSchema.methods.getPublicData = function() {
  const contentObject = this.toObject();
  delete contentObject.__v;
  return contentObject;
};

// Pre-save middleware to generate slug if not provided
contentSchema.pre('save', function(next) {
  if (!this.seo.slug && this.title) {
    this.seo.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

const Content = mongoose.model('Content', contentSchema);

export default Content;
