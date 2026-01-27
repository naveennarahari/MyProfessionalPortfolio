from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.contact import ContactMessage, ContactMessageCreate
from typing import List
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])


def get_contact_router(db: AsyncIOMotorDatabase):
    """Factory function to create contact router with database dependency"""
    
    @router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
    async def create_contact_message(contact_data: ContactMessageCreate):
        """
        Submit a new contact form message
        """
        try:
            # Create contact message object
            contact_dict = contact_data.dict()
            contact_obj = ContactMessage(**contact_dict)
            
            # Insert into database
            result = await db.contact_messages.insert_one(contact_obj.dict())
            
            logger.info(f"New contact message created: {contact_obj.id} from {contact_data.email}")
            
            return {
                "success": True,
                "message": "Thank you for your message! I will get back to you soon.",
                "data": {
                    "id": contact_obj.id,
                    "created_at": contact_obj.created_at.isoformat()
                }
            }
        except Exception as e:
            logger.error(f"Error creating contact message: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to submit contact message. Please try again later."
            )
    
    @router.get("", response_model=dict)
    async def get_contact_messages():
        """
        Retrieve all contact messages (admin endpoint)
        """
        try:
            messages = await db.contact_messages.find().sort("created_at", -1).to_list(1000)
            
            # Convert to ContactMessage objects for proper serialization
            contact_messages = [ContactMessage(**msg) for msg in messages]
            
            return {
                "success": True,
                "data": [msg.dict() for msg in contact_messages]
            }
        except Exception as e:
            logger.error(f"Error retrieving contact messages: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to retrieve contact messages."
            )
    
    return router
