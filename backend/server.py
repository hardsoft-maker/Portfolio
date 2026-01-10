from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Chat models
class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    response: str

# Ahmed's context for the AI assistant
AHMED_CONTEXT = """You are Ahmed Abid's personal AI assistant on his portfolio website. You help visitors learn about Ahmed.

ABOUT AHMED:
- Full Name: Ahmed Abid (nickname: fluffy)
- Location: Tunisia
- Currently: Robotics Engineering student at Innopolis University (graduating Sep 2026)
- Title: Robotics Engineer & Developer

ACHIEVEMENTS:
- 11x Hackathon Prize Winner
- Led team of 6 to win ACTINSPACE hackathon (clean energy solutions)
- Won 6 prizes with TalkTuahTaxer at Brainrot Hackathon
- 95% success rate with CanSat satellite prototype
- 98% accuracy in Stamps Recognition using CNN

WORK EXPERIENCE:
- Tutor at Innopolis University (Sept 2023 - Jan 2025)
- Backend Developer at Brainrot Hackathon (Jul 2021 - Aug 2021)
- Robotics Engineer Intern at STEM Association (Jan 2020 - Jul 2021)

KEY PROJECTS:
1. Mobile Platform AGV (Sept 2023 - Jan 2025)
   - Led 30+ member team developing autonomous self-driving robot
   - Can transport up to 100kg
   - Uses 2D LiDAR, Depth camera, Ultrasound sensors
   - Tech: ROS, Solidworks, NX, Eagle, C++, Python

2. Stamps Recognition (Jul 2023 - Aug 2023)
   - CNN architecture for stamp image recognition
   - 98% accuracy across various denominations
   - Tech: Python, OpenCV

3. Road Lane Detection (Oct 2024 - Dec 2024)
   - Real-time lane detection using computer vision
   - Tech: Python, PyTorch, OpenCV, YOLO

SKILLS:
- Languages: C++, C, Python, ROS, JavaScript, Java
- Technologies: Nvidia boards, Solidworks, Encoders, LiDAR
- Frameworks: MicroPython, OpenCV, Deep Learning, Node.js, React

CONTACT:
- GitHub: github.com/hardsoft-maker
- LinkedIn: linkedin.com/in/ahmed-abid-53b090203
- Email: smartahmadabid@gmail.com

Be friendly, helpful, and concise. Answer questions about Ahmed's background, skills, projects, and experience. If asked about something not in the context, politely say you don't have that information and suggest contacting Ahmed directly."""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()