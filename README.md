# Ben Nachmanson — Personal Website

Single-page personal website built with Next.js (app router). Includes a contact API route that sends email using Nodemailer and credentials provided via environment variables.

## Features
- Minimal portfolio / bio page
- Contact API endpoint (`src/app/api/contact/route.js`) that sends mail via Gmail SMTP
- Static assets in `public/`

## Tech
- Next.js 15 (app router)
- React 19
- Nodemailer

## Quick start
Prerequisites: Node.js (18+ recommended), npm

1. Clone

   git clone <repo-url>
   cd personal_website

2. Install

   npm install

3. Create environment file

Create a `.env` (or `.env.local`) in the project root with the following variables:

```
GMAIL_USER=your@gmail.com
GMAIL_PASS=your_gmail_app_password_or_oauth_token
CONTACT_TO_EMAIL=optional_target_email
```

Notes:
- For Gmail use an App Password or proper SMTP credential — do not store your primary Gmail password. If using OAuth, configure accordingly.
- `.env` is in `.gitignore` already — do not commit secrets.

4. Run dev server

   npm run dev

Open http://localhost:3000

5. Build / start

   npm run build
   npm run start

## Code layout
- `src/app/page.js` — main page UI
- `src/app/api/contact/route.js` — contact POST handler (reads GMAIL_USER / GMAIL_PASS)
- `public/` — static images and assets

## Deployment
Deploy to Vercel or any Node host. Configure the same environment variables in the host's secrets UI (do not upload your `.env`).

## Security notes
- Do NOT commit `.env` or any secret files. Confirm with `git status --ignored` if unsure.
- If you accidentally commit secrets: rotate them immediately and purge history with `git-filter-repo` or BFG Repo-Cleaner.
- Consider enabling GitHub CodeQL and Secret Scanning.

## Optional improvements I can make
- Add a CONTRIBUTING.md
- Add a CodeQL GitHub Actions workflow
- Add a sample contact form frontend that posts to the API route

---

If you want a different README tone or additional sections (contributing, license, changelog), tell me which and I’ll update it.

