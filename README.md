# Eventora — Event Management Website

A responsive event discovery and booking front-end built with HTML, CSS and vanilla JavaScript.

## Features
- Responsive layout for desktop, tablet and mobile
- Six sample events with category filters and live search
- Event booking / host-an-event dialog with form validation
- Saves submitted demo booking details in browser `localStorage`
- No build tools or dependencies required

## Run locally
Open `index.html` in a browser. For a local development server, use VS Code Live Server or run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy with GitHub Pages
1. Create a public GitHub repository (for example, `eventora-event-management`).
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then Save.
6. Wait for the Pages URL to appear. It will look like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Important demo note
This is a front-end assignment starter. Booking submissions are stored only in the visitor's browser and are not sent to an administrator or database. Replace the sample event details, dates, contact email and images with your own project information before submission.
