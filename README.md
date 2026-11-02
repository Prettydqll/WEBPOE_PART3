# Presh's Hair Studio Website

Student Name:Precious Phele
Student Number: ST10523376
Module:WEDE5020 / Part 3
Date:02 November 2026
Live Link:https://your-final-netlify-link.netlify.app

## Project Overview
Presh's Hair Studio is a 5-page responsive website for a local hair and beauty salon in Soweto. The website provides information about services, prices, gallery, and a contact/enquiry form. The goal is to increase online bookings and showcase work. Part 3 focuses on SEO, JavaScript functionality, and final deployment.

## Website Structure
- `index.html` - The home page
- `about.html` - About page with company details and history
- `services.html` - Services offered with search filter functionality
- `enquiries.html` - Enquiries page with form validation
- `contact.html` - Contact page with company contact details and map
- `_image/` - Images folder (logo and salon images)
- `css_assets/style.css` - Main external stylesheet
- `js_assets/` - JavaScript files
    - `script.js` - General interactivity
    - `search_filter.js` - Service search (braids, weaves, wigs)
    - `contact_form.js` / `enquiry_form.js` - Form validation
- `robots.txt` - SEO - tells search engines what to crawl
- `sitemap.xml` - SEO - lists all pages for Google
- `README.md` - Project documentation

## Features
- 5-page navigation with no list numbers (fixed with `list-style: none`)
- Responsive design for desktop, tablet and mobile using flexbox and media queries
- Contact form and enquiry form with JavaScript validation
- Service search/filter functionality (search "braids, weaves, wigs")
- External CSS styling with % and rem units
- SEO improvements: meta tags, alt text, robots.txt, sitemap.xml
- JavaScript interactivity: form validation, search filter, enquiry handling

## Changelog

### Part 1 - Initial Release - 15 Aug 2025
- Created 5 HTML pages with navigation
- Added images and basic content
- Created folder structure

### Part 2 - Feedback Fixes and CSS Styling - 18 Sept 2026
1. Fixed CSS link path from `style.css` to `css_assets/style.css` - CSS was not loading
2. Fixed image paths that were broken on services.html
3. Added alt text to all images in _image folder for accessibility
4. Created external stylesheet `css_assets/style.css`
5. Implemented base styles, desktop layout using flexbox and mobile responsiveness using media queries with % and rem units
6. Updated README.md with detailed changelog

### Part 3 - SEO, JavaScript and Final Deployment - 02 Nov 2026
1. **Fixed critical bug - numbered navigation:** Added `list-style: none !important` and `display: flex` to `nav ul` in style.css - menu was showing as `1. Home 2. About`
2. **Removed `_private/` folder:** This folder was causing CSS to break on Netlify - deleted for deployment
3. **Fixed image folder:** Renamed `_image` correctly and ensured `images` path works on both local and Netlify
4. **Implemented JavaScript functionality:**
      - Search filter on services.html (filters Women's hairstyles, Men's haircuts, etc.)
      - Form validation on enquiries.html and contact.html
      - "Make an Enquiry" button functionality
5. **Added SEO:**
      - Added `robots.txt` and `sitemap.xml`
      - Added meta descriptions and keywords to all pages
      - Added title tags and alt attributes
6. **Deployment:** Deployed final fixed version to Netlify Drop and claimed site for permanent link
7. **Updated README.md** to reflect Part 3 requirements

## How to Run
1. Open folder `PRESH'S_HAIR_STUDIO` in VS Code
2. Right-click `index.html` > Open with Live Server (Port 5500)
3. Test all pages and check no numbers in menu

## How to Deploy
Drag entire folder contents to https://app.netlify.com/drop and claim site.

## References
- Images from Pexels and salon owner (gold logo)
- W3Schools for HTML and CSS (list-style fix, flexbox)
- MDN Web Docs for JavaScript form validation and search filter
- Lecturer feedback from Part 1 and Part 2
- Netlify Docs for deployment