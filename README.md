# BEIKA - Women's Specialty Coffee Shop Website

A modern, responsive website for BEIKA, a women-only specialty coffee shop located in Riyadh, Saudi Arabia. This website showcases their unique offerings, including ethically sourced coffee, vegan desserts, and a safe space for women.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful design on all devices
- **Modern UI/UX**: Clean, warm aesthetic reflecting the café's wabi-sabi style
- **Smooth Navigation**: Fixed navigation with smooth scrolling to sections
- **Complete Sections**: Hero, About, Menu, Hours & Location, Gallery, Contact
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Performance**: Built with Next.js 14 and optimized for speed

## 🎯 Key Sections

1. **Hero Section**: Eye-catching landing with café's mission statement
2. **About Us**: Story and unique selling points
3. **Menu**: Signature drinks and vegan desserts with pricing
4. **Hours & Location**: Complete business information
5. **Gallery**: Visual showcase of the café
6. **Contact**: Multiple ways to get in touch

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (ready for implementation)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nabt-fenjan
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nabt-fenjan/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main homepage
│   │   └── globals.css         # Global styles
│   └── components/
│       └── Navigation.tsx      # Navigation component
├── public/                     # Static assets
├── package.json
└── README.md
```

## 🎨 Customization

### Colors

The website uses a warm, coffee-inspired color palette:

- Primary: Amber/Brown tones
- Secondary: Cream/Beige
- Accent: Gold highlights

### Content Updates

To update content, edit the following files:

- `src/app/page.tsx` - Main content sections
- `src/app/layout.tsx` - SEO metadata
- `src/components/Navigation.tsx` - Navigation links

### Styling

All styles are in Tailwind CSS classes. The design system is defined in:

- `src/app/globals.css` - Custom CSS variables and global styles

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📞 Contact Information

**BEIKA**

- Address: Imam Saud Bin Abdulaziz Bin Mohammed Rd, Al Mughrizat, Riyadh 12473
- Phone: 058 232 6617
- Email: info@beika.com

## 🕒 Opening Hours

- **Monday - Thursday**: 7:00 AM - 10:30 PM
- **Friday - Saturday**: 4:00 PM - 11:00 PM
- **Sunday**: 7:00 AM - 10:30 PM

## 🌱 Special Features

- **Women-only safe space**: Highlighted throughout the website
- **Vegan-friendly menu**: Clear labeling for plant-based options
- **Ethical sourcing**: Emphasis on responsible coffee practices
- **Event hosting**: Information about private events and workshops

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Features

1. **New Pages**: Create new files in `src/app/`
2. **Components**: Add to `src/components/`
3. **Styles**: Use Tailwind classes or add to `globals.css`
4. **Images**: Place in `public/` directory

## 📈 SEO & Performance

- Optimized metadata for search engines
- Semantic HTML structure
- Fast loading with Next.js optimizations
- Mobile-friendly design
- Accessible navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for BEIKA café. All rights reserved.

---

**Built with ❤️ for BEIKA - Where women find their perfect coffee moment**
