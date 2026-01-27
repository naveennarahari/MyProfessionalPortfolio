#!/usr/bin/env python3
"""
Backend API Testing for Narahari Naveen's Portfolio Contact Form
Tests the contact form backend API integration
"""

import requests
import json
import time
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("ERROR: REACT_APP_BACKEND_URL not found in frontend/.env")
    exit(1)

API_BASE = f"{BACKEND_URL}/api"
CONTACT_ENDPOINT = f"{API_BASE}/contact"

print(f"Testing Contact API at: {CONTACT_ENDPOINT}")
print("=" * 60)

class ContactAPITester:
    def __init__(self):
        self.test_results = []
        self.created_message_ids = []
        
    def log_result(self, test_name, success, details=""):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name}")
        if details:
            print(f"   Details: {details}")
        self.test_results.append({
            'test': test_name,
            'success': success,
            'details': details
        })
        
    def test_valid_submission(self):
        """Test POST /api/contact with valid data"""
        print("\n1. Testing Valid Contact Form Submission")
        print("-" * 40)
        
        test_data = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "subject": "Testing Contact Form",
            "message": "This is a test message to verify the contact form is working properly."
        }
        
        try:
            response = requests.post(CONTACT_ENDPOINT, json=test_data, timeout=10)
            
            if response.status_code == 201:
                data = response.json()
                if (data.get('success') == True and 
                    'message' in data and 
                    'data' in data and 
                    'id' in data['data'] and 
                    'created_at' in data['data']):
                    
                    self.created_message_ids.append(data['data']['id'])
                    self.log_result("Valid submission returns 201", True, 
                                  f"ID: {data['data']['id']}")
                    self.log_result("Response structure correct", True, 
                                  "Contains success, message, data with id and created_at")
                else:
                    self.log_result("Valid submission response structure", False, 
                                  f"Missing required fields in response: {data}")
            else:
                self.log_result("Valid submission returns 201", False, 
                              f"Got status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Valid submission - Network", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Valid submission - General", False, f"Error: {str(e)}")
    
    def test_validation_errors(self):
        """Test POST /api/contact with invalid data"""
        print("\n2. Testing Validation Errors")
        print("-" * 40)
        
        # Test cases for validation
        validation_tests = [
            {
                "name": "Missing name",
                "data": {
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "This is a test message."
                },
                "expected_error": "name field required"
            },
            {
                "name": "Invalid email format",
                "data": {
                    "name": "Test User",
                    "email": "invalid-email",
                    "subject": "Test Subject", 
                    "message": "This is a test message."
                },
                "expected_error": "invalid email format"
            },
            {
                "name": "Subject too short",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "Hi",  # Less than 5 chars
                    "message": "This is a test message."
                },
                "expected_error": "subject too short"
            },
            {
                "name": "Message too short",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "Short"  # Less than 10 chars
                },
                "expected_error": "message too short"
            }
        ]
        
        for test_case in validation_tests:
            try:
                response = requests.post(CONTACT_ENDPOINT, json=test_case["data"], timeout=10)
                
                if response.status_code in [400, 422]:
                    self.log_result(f"Validation: {test_case['name']}", True, 
                                  f"Correctly rejected with status {response.status_code}")
                else:
                    self.log_result(f"Validation: {test_case['name']}", False, 
                                  f"Expected 400/422, got {response.status_code}: {response.text}")
                    
            except requests.exceptions.RequestException as e:
                self.log_result(f"Validation: {test_case['name']} - Network", False, 
                              f"Request failed: {str(e)}")
            except Exception as e:
                self.log_result(f"Validation: {test_case['name']} - General", False, 
                              f"Error: {str(e)}")
    
    def test_message_retrieval(self):
        """Test GET /api/contact to retrieve messages"""
        print("\n3. Testing Message Retrieval")
        print("-" * 40)
        
        # First, submit a couple more messages to test retrieval
        test_messages = [
            {
                "name": "Alice Smith",
                "email": "alice@example.com", 
                "subject": "Portfolio Inquiry",
                "message": "I'm interested in your portfolio work and would like to discuss a potential project."
            },
            {
                "name": "Bob Johnson",
                "email": "bob@example.com",
                "subject": "Collaboration Opportunity", 
                "message": "I have a collaboration opportunity that might interest you. Let's connect!"
            }
        ]
        
        # Submit test messages
        for msg in test_messages:
            try:
                response = requests.post(CONTACT_ENDPOINT, json=msg, timeout=10)
                if response.status_code == 201:
                    data = response.json()
                    if 'data' in data and 'id' in data['data']:
                        self.created_message_ids.append(data['data']['id'])
            except:
                pass  # Continue with retrieval test even if submission fails
        
        # Now test retrieval
        try:
            response = requests.get(CONTACT_ENDPOINT, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if data.get('success') == True and 'data' in data:
                    messages = data['data']
                    
                    if isinstance(messages, list) and len(messages) > 0:
                        self.log_result("Message retrieval returns 200", True, 
                                      f"Retrieved {len(messages)} messages")
                        
                        # Check message structure
                        first_msg = messages[0]
                        required_fields = ['id', 'name', 'email', 'subject', 'message', 'status', 'created_at']
                        
                        if all(field in first_msg for field in required_fields):
                            self.log_result("Message structure correct", True, 
                                          "All required fields present")
                        else:
                            missing = [f for f in required_fields if f not in first_msg]
                            self.log_result("Message structure correct", False, 
                                          f"Missing fields: {missing}")
                        
                        # Check if messages are sorted by created_at (newest first)
                        if len(messages) > 1:
                            dates = [msg.get('created_at') for msg in messages[:2]]
                            if dates[0] and dates[1]:
                                try:
                                    date1 = datetime.fromisoformat(dates[0].replace('Z', '+00:00'))
                                    date2 = datetime.fromisoformat(dates[1].replace('Z', '+00:00'))
                                    if date1 >= date2:
                                        self.log_result("Messages sorted correctly", True, 
                                                      "Newest first order confirmed")
                                    else:
                                        self.log_result("Messages sorted correctly", False, 
                                                      "Not in newest first order")
                                except:
                                    self.log_result("Messages sorted correctly", False, 
                                                  "Could not parse dates for sorting check")
                    else:
                        self.log_result("Message retrieval data", False, 
                                      "No messages returned or invalid data structure")
                else:
                    self.log_result("Message retrieval response structure", False, 
                                  f"Missing success or data fields: {data}")
            else:
                self.log_result("Message retrieval returns 200", False, 
                              f"Got status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Message retrieval - Network", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Message retrieval - General", False, f"Error: {str(e)}")
    
    def test_edge_cases(self):
        """Test edge cases with boundary values"""
        print("\n4. Testing Edge Cases")
        print("-" * 40)
        
        edge_cases = [
            {
                "name": "Very long name (100 chars)",
                "data": {
                    "name": "A" * 100,  # Exactly 100 chars (max allowed)
                    "email": "longname@example.com",
                    "subject": "Testing long name boundary",
                    "message": "This tests the maximum allowed name length of 100 characters."
                }
            },
            {
                "name": "Maximum length message (2000 chars)",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com", 
                    "subject": "Testing maximum message length",
                    "message": "A" * 2000  # Exactly 2000 chars (max allowed)
                }
            },
            {
                "name": "Special characters in name and message",
                "data": {
                    "name": "José María O'Connor-Smith",
                    "email": "jose@example.com",
                    "subject": "Testing special characters",
                    "message": "This message contains special chars: àáâãäåæçèéêë & symbols like @#$%^&*()!"
                }
            }
        ]
        
        for test_case in edge_cases:
            try:
                response = requests.post(CONTACT_ENDPOINT, json=test_case["data"], timeout=10)
                
                if response.status_code == 201:
                    data = response.json()
                    if data.get('success') == True:
                        self.log_result(f"Edge case: {test_case['name']}", True, 
                                      "Successfully handled")
                        if 'data' in data and 'id' in data['data']:
                            self.created_message_ids.append(data['data']['id'])
                    else:
                        self.log_result(f"Edge case: {test_case['name']}", False, 
                                      f"Success=False in response: {data}")
                else:
                    self.log_result(f"Edge case: {test_case['name']}", False, 
                                  f"Got status {response.status_code}: {response.text}")
                    
            except requests.exceptions.RequestException as e:
                self.log_result(f"Edge case: {test_case['name']} - Network", False, 
                              f"Request failed: {str(e)}")
            except Exception as e:
                self.log_result(f"Edge case: {test_case['name']} - General", False, 
                              f"Error: {str(e)}")
    
    def run_all_tests(self):
        """Run all test suites"""
        print(f"Starting Contact API Tests at {datetime.now()}")
        print(f"Backend URL: {BACKEND_URL}")
        print(f"Contact Endpoint: {CONTACT_ENDPOINT}")
        
        self.test_valid_submission()
        self.test_validation_errors()
        self.test_message_retrieval()
        self.test_edge_cases()
        
        # Summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result['success'])
        failed_tests = total_tests - passed_tests
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if failed_tests > 0:
            print(f"\nFAILED TESTS:")
            for result in self.test_results:
                if not result['success']:
                    print(f"❌ {result['test']}: {result['details']}")
        
        print(f"\nCreated {len(self.created_message_ids)} test messages during testing")
        
        return failed_tests == 0


if __name__ == "__main__":
    tester = ContactAPITester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed! Contact API is working correctly.")
        exit(0)
    else:
        print("\n⚠️  Some tests failed. Check the details above.")
        exit(1)