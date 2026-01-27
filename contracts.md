# Backend Integration Contracts

## Overview
This document outlines the backend API contracts for the portfolio website contact form functionality.

## Current State (Frontend - Mock)
- **File**: `/app/frontend/src/mock.js`
- **Mocked Data**: All portfolio content (personalInfo, experiences, projects, skills, certifications, education, achievements)
- **Contact Form**: Currently shows mock success message without saving data

## Backend Implementation Required

### 1. MongoDB Model
**Collection**: `contact_messages`

**Schema**:
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, validated),
  subject: String (required),
  message: String (required),
  status: String (default: "new"), // new, read, archived
  created_at: DateTime (auto),
  updated_at: DateTime (auto)
}
```

### 2. API Endpoints

#### POST /api/contact
**Purpose**: Submit contact form
**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```
**Response Success (201)**:
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "id": "message_id",
    "created_at": "timestamp"
  }
}
```
**Response Error (400)**:
```json
{
  "success": false,
  "message": "Validation error message",
  "errors": ["field specific errors"]
}
```

#### GET /api/contact
**Purpose**: Retrieve all contact messages (admin use)
**Response Success (200)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "message_id",
      "name": "string",
      "email": "string",
      "subject": "string",
      "message": "string",
      "status": "string",
      "created_at": "timestamp"
    }
  ]
}
```

## Frontend Integration Changes

### File: `/app/frontend/src/components/Contact.jsx`

**Current (Mock)**:
```javascript
setTimeout(() => {
  setStatus({
    type: 'success',
    message: 'Thank you for your message! I will get back to you soon.'
  });
  setFormData({ name: '', email: '', subject: '', message: '' });
  setIsSubmitting(false);
}, 1500);
```

**After Integration**:
```javascript
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
// Handle response
```

## Validation Rules
- **name**: Required, min 2 chars, max 100 chars
- **email**: Required, valid email format
- **subject**: Required, min 5 chars, max 200 chars
- **message**: Required, min 10 chars, max 2000 chars

## Error Handling
- Network errors: Show user-friendly message
- Validation errors: Show field-specific errors
- Server errors: Show generic error message with retry option

## Integration Steps
1. Create MongoDB model in `/app/backend/models/contact.py`
2. Create API routes in `/app/backend/routes/contact.py`
3. Update `/app/backend/server.py` to include contact routes
4. Update Contact.jsx to use real API instead of mock
5. Test complete flow

## Notes
- All portfolio content (experiences, projects, skills) remains static in mock.js (no backend needed)
- Only contact form requires backend integration
- Email notifications can be added later if needed
