# API Contracts - Ahmed's Personal Website

## Overview
Minimalist personal portfolio website with timeline and AI chat assistant.

## Frontend Structure
- **Header**: Logo "ahmed." + Social links (GH, IN, EMAIL)
- **Timeline**: Chronological events with dates and underscored links
- **Footer**: Copyright, "a/f" initials, live time
- **ChatAssistant**: Floating chat modal with AI integration

## Mock Data Location
`/app/frontend/src/data/mock.js`
- `personalInfo`: Name, bio, links, skills
- `timelineEvents`: Array of events with dates, descriptions, links
- `socialLinks`: GitHub, LinkedIn, Email

## API Endpoints

### GET /api/
Health check endpoint

### POST /api/chat
AI chat assistant endpoint

**Request:**
```json
{
  "message": "string",
  "history": [
    { "role": "user|assistant", "content": "string" }
  ]
}
```

**Response:**
```json
{
  "response": "string"
}
```

## Integration Details
- **LLM**: OpenAI GPT-4o via Emergent LLM Key
- **Context**: Ahmed's full CV including education, experience, projects, skills
- **Session**: New session created per message (stateless)

## Environment Variables
- `EMERGENT_LLM_KEY`: AI chat integration key
- `MONGO_URL`: MongoDB connection
- `DB_NAME`: Database name
