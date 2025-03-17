from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS: Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (Change this in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define message model
class Message(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.post("/api/send-message")
async def send_message(msg: Message):
    # Simulate sending email (Replace with real logic)
    print(f"Message received: {msg}")
    return {"status": "Message sent successfully"}
