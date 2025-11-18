# Kuttikart - Premium Kids Clothing Store

A cutting-edge, Lululemon-inspired React web application for Kuttikart's premium kids clothing store. Built with React, Vite, and Tailwind CSS featuring a modern, sophisticated design.

## Features

- 🎨 **Cutting-Edge Design**: Sleek, sophisticated interface inspired by premium fashion brands
- 📱 **Fully Responsive**: Seamless experience across all devices
- 🛍️ **Modern Product Catalog**: Advanced filtering with elegant UI
- 🔍 **Detailed Product Pages**: Full-screen image galleries with smooth interactions
- 💬 **WhatsApp Integration**: Direct ordering through WhatsApp
- ⚡ **Lightning Fast**: Built with Vite for optimal performance
- 🎭 **Premium Aesthetics**: Modern typography, clean layouts, sophisticated color palette

## Design System

### Typography
- **Primary Font**: Outfit - Modern, clean sans-serif
- **Display Font**: Space Grotesk - Bold, geometric headlines
- Uppercase tracking for emphasis
- Generous letter spacing

### Color Palette
- **Primary**: Black (#000) and sophisticated grays
- **Accents**: Coral (#FF6B5E), Mint (#00D4A1), Blue (#0066FF), Purple (#8B5CF6)
- Minimalistic approach with strategic color usage

### UI Elements
- Sharp, modern borders (no rounded corners)
- Bold typography with uppercase treatments
- Clean grid layouts
- Sophisticated hover effects and transitions
- Full-bleed images with overlays

## Tech Stack

- **React 19** - Latest React features
- **Vite** - Next-generation build tool
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Modern utility-first CSS
- **Google Fonts** - Outfit & Space Grotesk

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kuttikart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
kuttikart/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx         # Modern navigation
│   │   │   ├── Footer.jsx         # Premium footer
│   │   │   └── Layout.jsx         # Main layout wrapper
│   │   ├── products/
│   │   │   └── ProductCard.jsx    # Elegant product cards
│   │   └── common/
│   │       ├── Loading.jsx        # Loading states
│   │       └── ScrollToTop.jsx    # Smooth scrolling
│   ├── pages/
│   │   ├── Home.jsx               # Full-screen hero & sections
│   │   ├── Products.jsx           # Catalog with modern filters
│   │   ├── ProductDetail.jsx     # Detailed product view
│   │   ├── About.jsx              # Brand story
│   │   ├── Contact.jsx            # Contact form
│   │   └── NotFound.jsx           # 404 page
│   ├── data/
│   │   └── products.js            # Product database
│   ├── assets/
│   ├── App.jsx                    # Router config
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles & theme
├── public/
├── index.html
├── SETUP.md                       # Detailed setup guide
└── README.md
```

## Customization

### Update Contact Information

Replace WhatsApp number `1234567890` with your actual number in:
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/pages/ProductDetail.jsx`

### Modify Products

Edit `src/data/products.js` to add, remove, or update products.

### Customize Design

The design system is defined in `src/index.css`:
- Color variables in `@theme` section
- Font families
- Button styles
- Custom utilities

### Update Images

Replace placeholder images with your actual product photos:
1. Add images to `src/assets/images/`
2. Update image URLs in `src/data/products.js`
3. Update hero/banner images in page components

## Key Features

### Homepage
- Full-screen hero with bold typography
- Featured collection grid
- Split banners (Girls/Boys collections)
- Values section
- Call-to-action sections

### Product Catalog
- Clean sidebar filters
- Modern product grid
- Hover effects with quick view
- Category/age/type filtering
- Real-time search

### Product Details
- Full-screen image gallery
- Size and color selectors
- WhatsApp quick order
- Related products
- Breadcrumb navigation

### About Page
- Brand story with imagery
- Values section (black background)
- Craftsmanship details
- Multi-image grid layouts

### Contact Page
- Clean contact form
- WhatsApp integration
- Multiple contact methods
- Store policies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production

```bash
npm run build
```

The `dist/` directory will contain your production-ready files.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Build: `npm run build`
2. Deploy the `dist/` folder

## Performance

- Optimized images with lazy loading
- Code splitting with React Router
- Minimal bundle size
- Fast page transitions
- Smooth animations

## Credits

Design inspiration: [Lululemon](https://shop.lululemon.com/)

## License

This project is private and proprietary.

## Contact

For questions or support, visit our contact page or reach out via WhatsApp.
