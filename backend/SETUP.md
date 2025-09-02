# Backend Setup Guide

## Quick Start

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and fill in your values
3. Start server: `npm run dev`

## Environment Variables

Required in `.env`:
- MongoDB connection string
- JWT secret
- YouTube API key
- Instagram access token
- Cloudinary credentials
- Gmail SMTP settings

## API Testing

Test endpoints:
- Health: `GET /health`
- Social: `GET /api/social/latest`
- WhatsApp: `GET /api/whatsapp/contact`
- Contact: `POST /api/contact`

## Deployment

Deploy to Vercel with `vercel --prod` or use the included `vercel.json`.
