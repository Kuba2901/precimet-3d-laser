# PRECIMET H.C.E. - 3D Laser Website

A modern, responsive website for PRECIMET H.C.E., a company specializing in cooperative services and production outsourcing. This website showcases their laser cutting, CNC machining, welding, and assembly services.

## 🚀 Features

- **Modern Design**: Clean, professional design with improved readability
- **Responsive Layout**: Mobile-first approach that works on all devices
- **Component-Based Architecture**: Built with React and Next.js for easy maintenance
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── WhyChooseUs.tsx # Company benefits
│   ├── Clients.tsx     # Client list
│   ├── MachinePark.tsx # Equipment showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-laser
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
The website uses a blue color scheme that can be customized in the Tailwind configuration. Main colors:
- Primary: Blue-600 (#2563eb)
- Secondary: Gray-900 (#111827)
- Accent: Blue-50 (#eff6ff)

### Content
All content is stored in the component files and can be easily modified:
- Company information in `Contact.tsx`
- Services list in `Services.tsx`
- Machine park details in `MachinePark.tsx`
- Client list in `Clients.tsx`

### Styling
The website uses Tailwind CSS utility classes. Custom styles can be added in `globals.css` or by extending the Tailwind configuration.

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layout with collapsible navigation
- **Tablet**: Two-column grid layouts
- **Desktop**: Full multi-column layouts with enhanced spacing

## 🔧 Maintenance

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation if needed

### Updating Content
1. Modify the relevant component file
2. Update any related links or references
3. Test on different screen sizes

### Styling Changes
1. Modify Tailwind classes in component files
2. Add custom CSS in `globals.css` if needed
3. Update Tailwind configuration for global changes

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Built-in caching strategies

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Traditional hosting with Node.js

## 📞 Support

For technical support or questions about the website:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Contact the development team

## 📄 License

This project is proprietary software for PRECIMET H.C.E. Sp. z o.o.

---

**Built with ❤️ using Next.js and Tailwind CSS**
