# Vernan Studio - Frontend Task

A React-based single-page application for Vernan Studio with contact form integration.

## Features

- Responsive design for multiple devices (480p, 720p, 1080p, iPad, MacBook)
- Contact form with API integration
- Form validation (frontend)
- Modular component architecture
- OWASP security principles

## API Integration

- **Endpoint**: `https://vernanbackend.ezlab.in/api/contact-us/`
- **Method**: POST
- **Validation**: Frontend validation for empty fields and email format
- **Success**: Displays "Form Submitted" on successful submission (status 200/201)

## Project Structure
src/
├── components/ # React components
├── hooks/ # Custom React hooks
├── services/ # API services
├── utils/ # Utility functions
└── styles/ # Global styles

## Technologies Used
React 18

Axios for API calls

CSS3 with responsive design

Git for version control


## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build