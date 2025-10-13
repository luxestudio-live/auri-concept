# Auri Concept - Premium Lighting & Smart Home Solutions

A modern, responsive website built with Next.js showcasing Auri Concept's luxury lighting fixtures and smart home products.

## 🚀 Features

- **Modern Design**: Clean, premium UI with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Next.js 15 and React 18
- **Framer Motion Animations**: Subtle, elegant transitions
- **Contact Form**: Integrated contact functionality
- **GitHub Pages Ready**: Configured for static export

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🌐 GitHub Pages Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Setup (First Time Only)

1. Go to your repository settings: `https://github.com/luxestudio-live/auri-concept/settings/pages`
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. The workflow will automatically deploy on the next push to `main`

### Accessing the Site

After deployment, your site will be available at:
**https://luxestudio-live.github.io/auri-concept/**

## 📁 Project Structure

```
auri-concept-site/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── public/               # Static assets
├── styles/               # Global styles
└── .github/workflows/    # GitHub Actions
```

## 🎨 Key Features

### Premium Product Categories
- Designer Ceiling Lights
- Modern Ceiling Fans
- Smart Home Wall Switches
- Smart Door Locks

### Pages
- **Home**: Hero section, product categories, brand highlights
- **About**: Company story, values, and vision
- **Contact**: Professional contact form with company information

### UI Components
- Smooth page transitions
- Auto-carousel for product images
- Floating WhatsApp button
- Responsive navigation
- Custom animations

## 🔧 Configuration

### Base Path
The site is configured with base path `/auri-concept` for GitHub Pages in `next.config.mjs`:

```javascript
basePath: '/auri-concept',
output: 'export',
```

### Environment Variables
Create a `.env.local` file for local development if needed.

## 📝 License

All rights reserved © Auri Concept

## 👥 Contact

- **Website**: https://luxestudio-live.github.io/auri-concept/
- **Instagram**: [@auriconcept_](https://www.instagram.com/auriconcept_/)
- **WhatsApp**: Contact via floating button on the website

---

Built with ❤️ by Auri Concept Team
