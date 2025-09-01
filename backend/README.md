# Media Website Backend API

A comprehensive Node.js/Express backend for the Vibes Unplugged media website, featuring content management, social media integration, contact forms, and WhatsApp services.

## 🚀 Features

- **Content Management**: Full CRUD operations for media content (podcasts, videos, articles)
- **Social Media Integration**: Automatic YouTube and Instagram content fetching
- **Contact Management**: Contact forms and service request handling with email notifications
- **WhatsApp Integration**: Direct chat links and message templates
- **User Authentication**: JWT-based authentication with role-based access control
- **File Upload**: Cloudinary integration for media file management
- **Real-time Updates**: Caching system for optimal performance
- **Security**: Rate limiting, CORS, Helmet, and input validation

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcryptjs
- **File Upload**: Multer + Cloudinary
- **Email**: Nodemailer
- **Validation**: express-validator
- **Security**: Helmet, CORS, Rate Limiting
- **Social APIs**: YouTube Data API, Instagram Basic Display API

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- YouTube Data API key
- Instagram Basic Display API access
- Cloudinary account
- Gmail account for SMTP

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/media-website
   MONGODB_URI_PROD=mongodb+srv://username:password@cluster.mongodb.net/media-website
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   
   # YouTube API
   YOUTUBE_API_KEY=your-youtube-api-key
   
   # Instagram API
   INSTAGRAM_ACCESS_TOKEN=your-instagram-access-token
   INSTAGRAM_USER_ID=your-instagram-user-id
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

4. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Content Management
- `GET /api/content` - Get all content
- `POST /api/content` - Create new content
- `GET /api/content/:id` - Get content by ID
- `PUT /api/content/:id` - Update content
- `DELETE /api/content/:id` - Delete content

### Social Media
- `GET /api/social/latest` - Get latest content from YouTube & Instagram
- `GET /api/social/youtube` - Get YouTube videos
- `GET /api/social/instagram` - Get Instagram posts
- `GET /api/social/youtube/search` - Search YouTube videos
- `GET /api/social/instagram/search` - Search Instagram posts

### Contact & Services
- `POST /api/contact` - Submit contact form
- `POST /api/contact/service` - Submit service request
- `GET /api/contact` - Get all contacts (Admin)
- `PUT /api/contact/:id/status` - Update contact status

### WhatsApp
- `GET /api/whatsapp/contact` - Get WhatsApp contact info
- `POST /api/whatsapp/chat-link` - Generate chat link
- `GET /api/whatsapp/templates` - Get message templates
- `GET /api/whatsapp/redirect` - Redirect to WhatsApp chat

### File Upload
- `POST /api/upload/image` - Upload image to Cloudinary
- `POST /api/upload/video` - Upload video to Cloudinary
- `POST /api/upload/audio` - Upload audio to Cloudinary

## 🔐 Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### User Roles
- **viewer**: Basic access to public content
- **editor**: Can create and edit content
- **admin**: Full access to all features

## 📱 Social Media Integration

### YouTube Integration
1. Get YouTube Data API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable YouTube Data API v3
3. Add API key to environment variables

### Instagram Integration
1. Create Instagram Basic Display app
2. Generate access token
3. Add token and user ID to environment variables

## 📧 Email Configuration

### Gmail SMTP Setup
1. Enable 2-factor authentication
2. Generate App Password
3. Use App Password in EMAIL_PASS

## 🚀 Deployment

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel --prod`

### Option 2: Netlify
1. Build the project
2. Deploy to Netlify
3. Configure environment variables

### Option 3: Traditional Hosting
1. Build the project: `npm run build`
2. Upload to your server
3. Configure environment variables
4. Start with PM2: `pm2 start server.js`

## 📊 Database Schema

### User Model
- Authentication fields (username, email, password)
- Role-based access control
- Profile information
- Activity tracking

### Content Model
- Media content (podcasts, videos, articles)
- Metadata and SEO
- Analytics tracking
- Publishing controls

### Contact Model
- Contact form submissions
- Service requests
- Status tracking
- Assignment and notes

## 🔒 Security Features

- **Rate Limiting**: Prevents API abuse
- **Input Validation**: Sanitizes all inputs
- **CORS**: Configurable cross-origin requests
- **Helmet**: Security headers
- **JWT**: Secure authentication
- **Password Hashing**: bcrypt encryption

## 📈 Performance Optimization

- **Caching**: Redis-like caching for social media content
- **Compression**: Gzip compression for responses
- **Database Indexing**: Optimized MongoDB queries
- **Async Operations**: Non-blocking API calls
- **Error Handling**: Graceful error responses

## 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- --grep "auth"
```

## 📝 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 5000 |
| `NODE_ENV` | Environment | No | development |
| `MONGODB_URI` | MongoDB connection | Yes | - |
| `JWT_SECRET` | JWT signing key | Yes | - |
| `YOUTUBE_API_KEY` | YouTube API key | Yes | - |
| `INSTAGRAM_ACCESS_TOKEN` | Instagram token | Yes | - |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud | Yes | - |
| `EMAIL_USER` | SMTP username | Yes | - |
| `EMAIL_PASS` | SMTP password | Yes | - |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: [your-email@domain.com]
- WhatsApp: +91 78008 44260

## 🔄 Updates

- **v1.0.0**: Initial release with core features
- **v1.1.0**: Added social media integration
- **v1.2.0**: Enhanced security and performance
- **v1.3.0**: WhatsApp integration and templates

---

**Built with ❤️ for Vibes Unplugged**
