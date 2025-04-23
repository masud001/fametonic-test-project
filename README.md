This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

The easiest way to deploy your Next.js app is to use the [Netlify Platform](https://docs.netlify.com/).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Documentation

## Overview

This project is a modern web application built with Next.js (App Router), TypeScript, and TailwindCSS. It features reusable components, optimized performance, and robust error handling. The application includes a hero section, announcement bar, and other modular components.

## Folder Structure

The project follows a feature-based folder structure for scalability and maintainability:

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout for the app
│   ├── page.tsx             # Main entry point for the homepage
├── components/
│   ├── AnnouncementBar/
│   │   ├── AnnouncementBar.tsx  # Announcement bar component
│   │   ├── AnnouncementItem.tsx # Subcomponent for individual announcements
│   ├── HeroSection/
│   │   ├── HeroSection.tsx       # Main hero section component
│   │   ├── FeaturesList.tsx      # List of features in the hero section
│   │   ├── FooterNote.tsx        # Footer note for the hero section
│   │   └── CallToAction.tsx      # Call-to-action button
│   ├── FallbackUI.tsx            # Reusable fallback UI for error handling
├── data/
│   ├── heroData.json             # Static data for the hero section
│   ├── menuData.json             # Static data for the menu
│   └── announcementBar.json      # Static data for the announcement bar
├── public/
│   └── images/                   # Static assets (e.g., hero images)
├── styles/
│   └── tailwind.config.js        # TailwindCSS configuration
└── lib/
    └── utils.ts                  # Utility functions (e.g., error logging)
```

## Future Enhancements

- Dynamic Data Fetching:

- Replace static JSON files with API calls for dynamic content.
  Unit Tests:

- Add unit tests for components using a testing library like Jest or React Testing Library.
  Accessibility:

- Ensure all components meet WCAG accessibility standards.
  Animations:

- Add animations to improve user experience (e.g., using Framer Motion).
