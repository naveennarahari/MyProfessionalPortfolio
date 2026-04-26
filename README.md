# MyProfessionalPortfolio

Professional portfolio application for Narahari Naveen, focused on engineering leadership, investment banking technology, and large-scale platform delivery.

This repository contains a React frontend for the portfolio experience and a FastAPI backend that supports contact message storage and API testing.

## Highlights

- Personal brand site with hero, about, experience, projects, skills, and contact sections
- Leadership-focused content tailored to engineering management and architecture roles
- Downloadable resume and profile image support through the frontend public assets
- Contact form UX in the frontend with Formspree-based submission
- FastAPI backend with MongoDB models and contact endpoints for a self-hosted contact workflow
- GitHub Pages deployment workflow for the frontend

## Tech Stack

### Frontend

- React 19
- Create React App with CRACO
- Tailwind CSS
- Radix UI primitives
- Lucide React icons

### Backend

- FastAPI
- Motor and MongoDB
- Pydantic
- Python dotenv

## Architecture

The repository is split into two main applications:

- `frontend/`: the portfolio website UI
- `backend/`: the API service and contact-message persistence layer

The frontend currently uses Formspree for contact form submission in `frontend/src/components/Contact.jsx`.

The backend includes contact endpoints in `backend/routes/contact.py` plus models in `backend/models/contact.py`. Those APIs are useful for local development or a future full migration away from Formspree, but they are not the active frontend submission path today.

## Repository Structure

```text
MyProfessionalPortfolio/
|-- backend/
|   |-- models/
|   |-- routes/
|   `-- server.py
|-- frontend/
|   |-- public/
|   |-- src/
|   `-- package.json
|-- tests/
|-- .github/workflows/deploy.yml
|-- backend_test.py
`-- contracts.md
```

## Frontend Features

- Hero section with role positioning, summary message, and resume download
- About section with profile summary and key career metrics
- Experience timeline with expandable role highlights
- Project showcase covering banking and platform initiatives
- Skills grouped across leadership, technical, and domain areas
- Contact section with direct email, phone, LinkedIn, X, and message form

The frontend content is currently driven by static mock data in `frontend/src/mock.js`.

## Backend API

The backend exposes the following routes under `/api`:

- `GET /api/`: health-style hello response
- `POST /api/status`: create a sample status record
- `GET /api/status`: retrieve status records
- `POST /api/contact`: create a contact message
- `GET /api/contact`: retrieve contact messages

The contact API validates:

- `name`: 2 to 100 characters
- `email`: valid email format
- `subject`: 5 to 200 characters
- `message`: 10 to 2000 characters

## Local Setup

### Prerequisites

- Node.js 20+ recommended
- Yarn 1.x
- Python 3.10+
- MongoDB database

### 1. Clone the repository

```bash
git clone https://github.com/naveennarahari/MyProfessionalPortfolio.git
cd MyProfessionalPortfolio
```

### 2. Run the frontend

```bash
cd frontend
yarn install
yarn start
```

The frontend runs on `http://localhost:3000`.

### 3. Run the backend

Create `backend/.env` with:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=myprofessionalportfolio
CORS_ORIGINS=http://localhost:3000
```

Then start the API:

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

The backend runs on `http://localhost:8000`, and the API root is available under `http://localhost:8000/api`.

## Environment Variables

### Frontend

- `REACT_APP_FORMSPREE_ID`: Formspree form ID used by the contact form

### Backend

- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: database name
- `CORS_ORIGINS`: comma-separated allowed origins

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

- installs frontend dependencies
- builds the React app
- deploys the frontend build output to GitHub Pages

The workflow expects the repository secret `FORMSPREE_ID` for the production contact form.

## Testing

The repository includes `backend_test.py`, which exercises the contact API contract end to end using the backend URL configured in the frontend environment.

Before running it, make sure:

- the backend is running
- the frontend environment contains `REACT_APP_BACKEND_URL`

Example:

```bash
python backend_test.py
```

## Notes

- `frontend/README.md` still contains the default Create React App instructions.
- `contracts.md` documents the backend contact integration contract.
- The top-level portfolio data is intentionally easy to update in `frontend/src/mock.js`.

## Future Improvements

- Wire the frontend contact form directly to the FastAPI backend
- Add automated frontend tests
- Add backend test execution to CI
- Replace static mock content with a CMS or structured content source if needed
