# Naveen Narahari — Professional Portfolio

Personal portfolio website for **Naveen Narahari**, Engineering Manager and Architecture Leader with 14+ years of experience in Investment Banking Technology.

[![Deploy to GitHub Pages](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-gh-pages.yml)
[![Deploy to Netlify](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-netlify.yml/badge.svg)](https://github.com/naveennarahari/MyProfessionalPortfolio/actions/workflows/deploy-netlify.yml)

## Live URLs

| Platform | URL |
|---|---|
| Netlify (primary) | https://naveenprofessionalportfolio.netlify.app |
| GitHub Pages (backup) | https://naveennarahari.github.io/MyProfessionalPortfolio |

---

## Sections

- **Hero** — Role positioning, profile photo, and resume download
- **About** — Career summary and key metrics (14+ years, 17+ team members, 1M+ daily transactions, 99.9% availability)
- **Experience** — Timeline of roles at Societe Generale, NTT DATA, and IGATE with expandable highlights
- **Projects** — SWIFT, CLS, performance optimization, and enterprise platform projects
- **Skills** — Leadership, technical, and domain expertise
- **Contact** — Email, phone, LinkedIn, X (Twitter), and contact form via Formspree

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Create React App (CRACO) |
| Styling | Tailwind CSS |
| Components | Radix UI primitives + shadcn/ui |
| Icons | Lucide React |
| Contact form | Formspree (no backend required) |
| CI/CD | GitHub Actions |
| Hosting | Netlify + GitHub Pages (parallel) |

---

## Repository Structure

```
MyProfessionalPortfolio/
├── .github/
│   └── workflows/
│       ├── deploy-gh-pages.yml   # GitHub Pages deployment
│       └── deploy-netlify.yml    # Netlify deployment
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── 404.html              # SPA routing fix for GitHub Pages
│   │   ├── profile.jpg           # Your profile photo (add manually)
│   │   └── resume.pdf            # Your resume (add manually)
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── mock.js               # All portfolio content lives here
│   │   └── App.js
│   └── package.json
├── netlify.toml                  # Netlify build config + SPA redirects
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

All content is in one file — **`frontend/src/mock.js`**. Edit it to update:

- Personal info, tagline, social links
- Work experience and highlights
- Projects and impact
- Skills

No backend, no database, no API keys needed for content updates.

---

## Deployment

Both deployments trigger automatically on every push to `main`.

| Workflow | Platform | Build config |
|---|---|---|
| `deploy-gh-pages.yml` | GitHub Pages | `PUBLIC_URL=/MyProfessionalPortfolio` |
| `deploy-netlify.yml` | Netlify | `PUBLIC_URL=` (root) |

### Required GitHub Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|---|---|
| `FORMSPREE_ID` | Form ID from [formspree.io](https://formspree.io) |
| `NETLIFY_AUTH_TOKEN` | Personal access token from Netlify user settings |
| `NETLIFY_SITE_ID` | Site ID from Netlify site configuration |

### Adding your profile photo and resume

Drop these two files into `frontend/public/` and push:

```
frontend/public/profile.jpg   ← your photo
frontend/public/resume.pdf    ← your CV
```

They will be automatically picked up by both deployments.

---

## Connect

- LinkedIn: [linkedin.com/in/narahari-naveen](https://www.linkedin.com/in/narahari-naveen)
- X (Twitter): [x.com/naveennarahari](https://x.com/naveennarahari)
- Email: naraharinaveenqa@gmail.com
