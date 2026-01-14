# Contact Form Project

## Overview

This project demonstrates a contact form implementation using modern web development practices, specifically focusing on **server actions** and **Next.js revalidation strategies**.

## Key Learnings

### Server Actions

- Implemented server-side form handling using Next.js Server Actions
- Secure form submission without exposing backend logic to the client
- Simplified data validation and processing on the server

### Revalidate Path

- Used `revalidatePath()` to refresh specific routes after form submission
- Ensures users see updated data without manual page refresh
- Improves user experience with real-time data synchronization

### Revalidate Tag

- Implemented `revalidateTag()` for cache invalidation using custom tags
- Allows granular control over which data gets refreshed
- Useful for managing dependencies between multiple pages/components

## Technologies Used

- **Next.js 16+** (App Router)
- **Server Actions** for backend operations
- **TypeScript** for type safety
- **React** for UI components

## How to Run

```bash
npm install
npm run dev
```

## Project Structure

```
contactform/
├── app/
│   ├── actions/
│   │   └── formAction.ts
│   └── page.tsx
└── components/
    └── ContactForm.tsx
```

## Features

✨ **Clean & Modern UI** - Responsive contact form with smooth interactions
🚀 **Server-Side Validation** - Secure form processing without client exposure
⚡ **Real-Time Updates** - Instant data synchronization with revalidation
🔒 **Type-Safe** - Full TypeScript support for reliability

## Tech Stack

| Technology            | Purpose                              |
| --------------------- | ------------------------------------ |
| 🔄 **Next.js 16+**    | Full-stack framework with App Router |
| ⚙️ **Server Actions** | Backend form handling & validation   |
| ⚛️ **React**          | Interactive UI components            |

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## About This Project

This project showcases modern Next.js patterns for building secure, efficient contact forms. It demonstrates best practices in server-side rendering, data validation, and cache management using the latest Next.js features.
