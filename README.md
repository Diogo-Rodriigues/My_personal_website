# Diogo Rodrigues - Portfolio

This is a personal portfolio website created to showcase my skills, projects, and professional experience in an interactive and modern way.   
It can be viewed via this link: https://my-personal-website-ivory.vercel.app/
![Portfolio Screenshot](/public/Images/My_Website.png)

## ✨ Features

- **Responsive Design**: Seamless experience across mobile devices, tablets, and desktops
- **Elegant Animations**: Smooth animations using Framer Motion for an immersive user experience
- **Smooth Navigation**: Smooth scrolling to different sections of the page
- **Project Portfolio**: Display of projects with details and links to source code
- **Dark Mode**: Dark interface for better viewing
- **Detailed View**: Individual pages for each project

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **Icons**: Lucide Icons
- **Typography**: Google Fonts (Inter)

## 📋 Prerequisites

Before you begin, you'll need to have the following installed on your computer:

- Node.js (v18 or higher)
- npm or pnpm

## 🚀 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Diogo-Rodriigues/My_personal_website
   cd My_personal_website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
MyWebsite/
├── app/                   # Main application directory (Next.js App Router)
│   ├── components/        # Reusable components
│   │   ├── About.tsx      # About Me section
│   │   ├── AnimatedBackground.tsx # Animated background
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Header.tsx     # Header/navigation
│   │   ├── Hero.tsx       # Initial/banner section
│   │   ├── Projects.tsx   # Projects list
│   │   ├── SectionSeparator.tsx # Separator between sections
│   │   ├── Skills.tsx     # Skills section
│   │   └── WorkExperience.tsx # Professional experience section
│   ├── projects/          # Individual project pages
│   │   ├── page.tsx       # Main projects page
│   │   └── [slug]/        # Dynamic page for project details
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main application layout
│   └── page.tsx           # Home page
├── public/                # Static files
│   └── Images/            # Site images
├── components/            # shadcn/ui library components (not used)
├── lib/                   # Utilities (not used)
├── styles/                # Additional styles (not used)
├── hooks/                 # Custom hooks (not used)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 📝 Development

This project uses Next.js with the App Router to create a fluid and responsive user experience. TailwindCSS is used for styling, providing a modern and easy-to-maintain design.

Animations are implemented with Framer Motion to add interactivity and engagement to the site.
