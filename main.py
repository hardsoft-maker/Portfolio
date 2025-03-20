from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import BaseModel, EmailStr
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# FastAPI app instance
app = FastAPI()

# ✅ Allow CORS (Frontend can talk to backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ Use ["http://localhost:3000"] in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Email configuration
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
    MAIL_SERVER=os.getenv("MAIL_SERVER", "smtp.gmail.com"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True
)

# Message Model
class Message(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Send Email Function
async def send_email(data: Message):
    message = MessageSchema(
        subject=data.subject,
        recipients=["smartahmadabid@gmail.com"],
        body=f"New message from {data.name} ({data.email}):\n\n{data.message}",
        subtype="plain"
    )
    fm = FastMail(conf)
    await fm.send_message(message)

# API Route to Send Email (POST Request)
@app.post("/api/send-message")
async def send_message(background_tasks: BackgroundTasks, data: Message):
    background_tasks.add_task(send_email, data)
    return {"message": "Email sent successfully!"}
