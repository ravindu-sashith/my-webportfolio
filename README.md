
# Ravindu Hettiarachchi - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
  - [Updating Personal Information](#updating-personal-information)
  - [Adding Skills](#adding-skills)
  - [Updating Projects](#updating-projects)
  - [Adding Certificates](#adding-certificates)
  - [Connecting Social Media](#connecting-social-media)
  - [Download CV Button](#download-cv-button)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

## Overview

This portfolio website showcases skills, projects, certifications, and contact information in a responsive and visually appealing manner.

## Getting Started

1. Clone the repository
```sh
git clone <YOUR_GIT_URL>
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```

## Customization Guide

### Updating Personal Information

Edit the `src/components/Hero.tsx` file to update your name, tagline, and profile picture:

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cyber-dark dark:text-white">
  Hi, I'm <span className="text-cyber-blue dark:text-cyber-blue-light">YOUR NAME HERE</span>
</h1>
<p className="text-lg text-cyber-gray dark:text-gray-300 mb-6 max-w-lg">YOUR TAGLINE HERE</p>
```

To change the profile picture, upload a new image and update the `src` attribute:
```tsx
<img src="/path/to/your/image.png" alt="Profile" className="w-full h-full object-cover" />
```

### Adding Skills

To add or modify skills, edit the `skillCategories` array in `src/components/About.tsx`:

```tsx
const skillCategories = [
  {
    category: "Programming", // Category name
    skills: ["Python", "C#", "SQL", "JavaScript", "Add More Here"] // Add your skills here
  },
  {
    category: "Digital Forensics",
    skills: ["FTK Imager", "Autopsy", "Add More Tools Here"]
  },
  // You can add more categories like this:
  {
    category: "New Category Name",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  }
];
```

### Updating Projects

To modify or add projects, locate the Projects component in `src/components/Projects.tsx` and update the projects array:

```tsx
const projects = [
  {
    id: 1,
    title: "XOR Cipher", // Project title
    description: "This is a simple Python script that implements a 4-bit XOR cipher to encrypt and decrypt binary data.", // Project description
    tags: ["Python", "Cryptography", "Symmetric Encryption"], // Technologies used
    githubUrl: "https://github.com/yourusername/project-repo" // Your GitHub repository URL
  },
  // Add more projects by following this structure
  {
    id: 2,
    title: "New Project Name",
    description: "Project description goes here",
    tags: ["Tag1", "Tag2", "Tag3"],
    githubUrl: "https://github.com/yourusername/another-project"
  }
];
```

### Adding Certificates

To add or update certifications, modify the `certifications` array in `src/components/Certifications.tsx`:

```tsx
const certifications = [
  {
    id: 1,
    title: "IT Masters' Digital Forensics (Updated)", // Certificate title
    issuer: "IT Masters (Charles Sturt University)", // Certificate issuer
    date: "Mar 2025", // Date earned
    imageUrl: "/path/to/certificate-image.jpg" // Optional: path to certificate image
  },
  // Add more certificates by following this structure
  {
    id: 2,
    title: "New Certificate Name",
    issuer: "Certificate Provider",
    date: "Month Year",
    imageUrl: "/path/to/image.jpg" // Optional
  }
];
```

### Connecting Social Media

To update social media links, edit the links in `src/components/Contact.tsx`:

```tsx
// Find these lines in the Contact.tsx file
<a href="mailto:your-email@example.com"> // Update the email address
  // ...
</a>
<a href="https://github.com/yourusername"> // Update GitHub username
  // ...
</a>
<a href="https://linkedin.com/in/yourprofile"> // Update LinkedIn profile URL
  // ...
</a>
```

### Download CV Button

To update the CV file that gets downloaded when clicking the "Download CV" button:

1. Add your CV file to the public folder (`/public/cv.pdf`)
2. Update the path in the `Hero.tsx` component if necessary:

```tsx
// Find this section in the Hero.tsx file
const link = document.createElement('a');
link.href = '/cv.pdf'; // Update the path to your CV file
link.download = 'Your_Name_CV.pdf'; // Update the download filename
```

## Project Structure

```
src/
├── components/           # UI components
│   ├── About.tsx         # About section with skills
│   ├── Certifications.tsx # Certifications section
│   ├── Contact.tsx       # Contact form and info
│   ├── Footer.tsx        # Website footer
│   ├── Hero.tsx          # Hero section (landing)
│   ├── Navbar.tsx        # Navigation bar
│   ├── Projects.tsx      # Projects section
│   └── ui/               # UI components from shadcn
├── pages/                # Page components
│   ├── Index.tsx         # Main page
│   └── NotFound.tsx      # 404 page
├── App.tsx               # Main App component
└── main.tsx              # Entry point
```

## Deployment

To deploy your portfolio:

1. Click on the Share button in the Lovable interface
2. Choose "Publish" to deploy to a live URL
3. Alternatively, connect your GitHub account and deploy using your preferred hosting service (Vercel, Netlify, GitHub Pages, etc.)

For connecting a custom domain, navigate to Project > Settings > Domains in Lovable.

---

Created with [Lovable](https://lovable.dev)
