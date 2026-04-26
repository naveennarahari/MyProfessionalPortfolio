# Naveen Narahari — Professional Portfolio

Personal portfolio website for **Naveen Narahari**, Engineering Manager and Architecture Leader with 14+ years of experience in Investment Banking Technology at Societe Generale.

[![Deploy to GitHub Pages](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-gh-pages.yml)
[![Deploy to Netlify](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-netlify.yml/badge.svg)](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-netlify.yml)

---

## Live URLs

| Platform | URL | Purpose |
|---|---|---|
| **Netlify** (primary) | https://naveenprofessionalportfolio.netlify.app | Main live site |
| **GitHub Pages** (backup) | https://naveennarahari.github.io/MyProfessionalPortfolio | Backup / redundancy |

Both deployments run in parallel on every push to `main` via GitHub Actions.

---

## Portfolio Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, profile photo, and resume download |
| **About** | Career summary with key metrics — 14+ years, 17+ team members, 1M+ daily transactions, 99.9% uptime |
| **Experience** | Timeline of roles at Societe Generale, NTT DATA Americas, and IGATE with expandable highlights |
| **Projects** | SWIFT/CLS confirmations, performance optimization, data archival, and testing infrastructure |
| **Skills** | Leadership, technical (C# / .NET / Microservices), and domain (Forex / Payments / Regulatory) |
| **Contact** | Email, phone, LinkedIn, X (Twitter), and contact form |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 with Create React App (CRACO) |
| Styling | Tailwind CSS |
| UI Components | Radix UI primitives + shadcn/ui |
| Icons | Lucide React |
| Contact form | Formspree — no backend required |
| CI/CD | GitHub Actions (two parallel workflows) |
| Hosting | Netlify + GitHub Pages |

This is a **frontend-only** project. There is no backend server, no database, and no API. All portfolio content lives in `frontend/src/mock.js` and the contact form submits via Formspree.

---

## Repository Structure

```
MyProfessionalPortfolio/
├── .github/
│   └── workflows/
│       ├── deploy-gh-pages.yml   # Builds and deploys to GitHub Pages
│       └── deploy-netlify.yml    # Builds and deploys to Netlify
├── frontend/
│   ├── public/
│   │   ├── index.html            # App entry point
│   │   ├── 404.html              # SPA routing fix for GitHub Pages
│   │   ├── profile.jpg           # Profile photo (add your own)
│   │   └── resume.pdf            # Resume / CV (add your own)
│   ├── src/
│   │   ├── components/           # React page components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ui/               # shadcn/ui base components
│   │   ├── mock.js               # All portfolio content lives here
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── netlify.toml                  # Netlify build settings + SPA redirects
└── README.md
```

---

## Local Development

### Prerequisites

- Node.js 20+
- Yarn 1.x

### Run locally

```bash
git clone https://github.com/naveennarahari/MyProfessionalPortfolio.git
cd MyProfessionalPortfolio/frontend
yarn install
yarn start
```

App runs at `http://localhost:3000`.

---

## Updating Portfolio Content

All content is in one file: `frontend/src/mock.js`

Edit it to update your personal info, experience, projects, and skills. No backend, no database, no rebuild configuration needed — just edit and push.

---

## Deployment Architecture

Both platforms deploy automatically on every push to `main`.

| Workflow | Platform | Key difference |
|---|---|---|
| `deploy-gh-pages.yml` | GitHub Pages | Sets `PUBLIC_URL=/MyProfessionalPortfolio` so assets resolve correctly from the subdirectory |
| `deploy-netlify.yml` | Netlify | No `PUBLIC_URL` needed — serves from root `/` |

### GitHub Secrets required

Go to **Settings → Secrets and variables → Actions** and ensure these exist:

| Secret | Description | Where to get it |
|---|---|---|
| `FORMSPREE_ID` | Formspree form ID | formspree.io — your form settings |
| `NETLIFY_AUTH_TOKEN` | Netlify personal access token | Netlify → User Settings → Applications |
| `NETLIFY_SITE_ID` | Your Netlify site ID | Netlify → Site configuration → Site ID |

**Security note:** GitHub Secrets are encrypted at rest and never exposed in logs or to the public. They are safe to use in public repositories without any additional encryption on your end.

---

## Adding Profile Photo and Resume

Drop files into `frontend/public/` and push to `main`:

```
frontend/public/profile.jpg   — your profile photo
frontend/public/resume.pdf    — your CV / resume
```

Both files are automatically served on Netlify and GitHub Pages without any code changes.

---

## Connect

| Platform | Link |
|---|---|
| LinkedIn | https://www.linkedin.com/in/narahari-naveen |
| X (Twitter) | https://x.com/naveennarahari |
| Email | naraharinaveenqa@gmail.com |
