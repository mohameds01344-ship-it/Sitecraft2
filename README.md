# SiteCraft Portfolio

A bilingual (English / Arabic) responsive portfolio website for SiteCraft.

## Files
- `index.html` — page structure and content
- `style.css` — visual identity, responsive layout, motion
- `script.js` — language switch, mobile navigation, reveal effects, WhatsApp enquiry form
- `assets/sitecraft-logo.jpeg` — the logo supplied for this project

## Run locally
Open `index.html` in your browser, or use the VS Code Live Server extension.

## Before publishing
1. Open `script.js`.
2. Find `const CONFIG`.
3. Replace `whatsappNumber` with the company's WhatsApp number in international format, digits only. For Egypt, use `20` followed by the number without the first `0`.
4. Replace the sample project URLs in `index.html` if your live portfolio links change.
5. Update the email address in `index.html` and `script.js` when you have a real company email.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload all files and the `assets` folder, keeping the same structure.
3. Open repository Settings → Pages.
4. Select deploy from the `main` branch and the root folder.
5. Save and wait for GitHub Pages to publish.

## Notes
- English is the default language. Visitors can switch to Arabic using the language button in the header. The selection is saved in the visitor's browser.
- The contact form opens WhatsApp with the enquiry pre-filled. It does not store form submissions on a server.
- Project cards currently link to the supplied demo websites. Verify that each URL is still public before sharing the portfolio with clients.
- The email shown in the contact section is a placeholder; replace it before launch.
