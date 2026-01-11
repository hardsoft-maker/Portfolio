# Ahmed's Personal Website - Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites
1. A Google Gemini API key from [aistudio.google.com](https://aistudio.google.com)
2. A MongoDB database (use [MongoDB Atlas](https://www.mongodb.com/atlas) - free tier available)
3. Vercel account

---

### Step 1: Prepare Your Code

Download your project from Emergent and extract it.

Your project structure should look like:
```
/
├── frontend/          # React app
├── backend/           # FastAPI app
└── vercel.json        # Vercel config (create this)
```

---

### Step 2: Create `vercel.json` in root

```json
{
  "builds": [
    {
      "src": "backend/server.py",
      "use": "@vercel/python"
    },
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.py"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

---

### Step 3: Update Frontend for Production

In `frontend/src/components/ChatAssistant.jsx`, change:
```javascript
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
```

And update the fetch URL to:
```javascript
const response = await fetch(`${BACKEND_URL}/api/chat`, {
```

---

### Step 4: Set Environment Variables on Vercel

In Vercel Dashboard → Your Project → Settings → Environment Variables:

| Name | Value |
|------|-------|
| `GEMINI_API_KEY` | `AIzaSy...your-key` |
| `MONGO_URL` | `mongodb+srv://...` (from MongoDB Atlas) |
| `DB_NAME` | `ahmed_portfolio` |
| `CORS_ORIGINS` | `*` |

---

### Step 5: Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🔑 About Your Gemini API Key

Your current key may be hitting rate limits because:
1. **New keys** take 1-24 hours to fully activate
2. **Free tier** has limits: 15 requests/minute, 1,500 requests/day

### To fix rate limit issues:
1. Wait a few hours for the key to fully activate
2. Or create a new API key in Google AI Studio
3. The chat will work once quota resets

---

## 📁 Files to Deploy

### Backend (`/backend/`)
- `server.py` - Main API with Gemini integration
- `requirements.txt` - Python dependencies
- `.env` - Environment variables (don't commit, use Vercel env vars)

### Frontend (`/frontend/`)
- All React files
- Build with `yarn build` before deploying

---

## 🧪 Testing Locally

```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001

# Frontend (new terminal)
cd frontend
yarn install
yarn start
```

---

## Need Help?
- Gemini API docs: https://ai.google.dev/docs
- Vercel docs: https://vercel.com/docs
- MongoDB Atlas: https://www.mongodb.com/atlas
