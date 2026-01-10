#!/usr/bin/env python3
"""
Backend API Testing for Ahmed's Personal Website
Tests the health check and chat endpoints
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend env (production URL)
BACKEND_URL = "https://chat-profile-1.preview.emergentagent.com/api"

def test_health_check():
    """Test GET /api/ - health check endpoint"""
    print("🔍 Testing Health Check Endpoint...")
    print(f"URL: {BACKEND_URL}/")
    
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and data["message"] == "Hello World":
                print("✅ Health check passed - correct response format")
                return True
            else:
                print("❌ Health check failed - unexpected response format")
                return False
        else:
            print(f"❌ Health check failed - status code {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check failed - connection error: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Health check failed - invalid JSON response: {e}")
        return False

def test_chat_endpoint():
    """Test POST /api/chat - AI chat endpoint"""
    print("\n🔍 Testing Chat Endpoint...")
    print(f"URL: {BACKEND_URL}/chat")
    
    # Test data as specified in the review request
    test_payload = {
        "message": "What projects has Ahmed worked on?",
        "history": []
    }
    
    print(f"Request payload: {json.dumps(test_payload, indent=2)}")
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/chat",
            json=test_payload,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            try:
                data = response.json()
                print(f"Response data: {json.dumps(data, indent=2)}")
                
                if "response" in data and isinstance(data["response"], str):
                    response_text = data["response"].lower()
                    
                    # Check if response contains information about Ahmed's projects
                    project_keywords = [
                        "mobile platform agv", "agv", "autonomous", "robot",
                        "stamps recognition", "cnn", "stamp",
                        "lane detection", "computer vision", "yolo",
                        "project", "developed", "led team"
                    ]
                    
                    found_keywords = [kw for kw in project_keywords if kw in response_text]
                    
                    if found_keywords:
                        print(f"✅ Chat endpoint passed - response contains project info")
                        print(f"Found project-related keywords: {found_keywords}")
                        return True
                    else:
                        print("⚠️ Chat endpoint responded but may not contain expected project information")
                        print("Response content:", data["response"][:200] + "..." if len(data["response"]) > 200 else data["response"])
                        return False
                else:
                    print("❌ Chat endpoint failed - invalid response format")
                    return False
                    
            except json.JSONDecodeError as e:
                print(f"❌ Chat endpoint failed - invalid JSON response: {e}")
                print(f"Raw response: {response.text}")
                return False
        else:
            print(f"❌ Chat endpoint failed - status code {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Chat endpoint failed - connection error: {e}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING - AHMED'S PERSONAL WEBSITE")
    print("=" * 60)
    print(f"Testing backend at: {BACKEND_URL}")
    print(f"Test started at: {datetime.now().isoformat()}")
    print()
    
    # Run tests
    health_result = test_health_check()
    chat_result = test_chat_endpoint()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    print(f"Health Check (GET /api/): {'✅ PASS' if health_result else '❌ FAIL'}")
    print(f"Chat Endpoint (POST /api/chat): {'✅ PASS' if chat_result else '❌ FAIL'}")
    
    total_tests = 2
    passed_tests = sum([health_result, chat_result])
    
    print(f"\nOverall: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️ Some tests failed - check logs above")
        return 1

if __name__ == "__main__":
    sys.exit(main())