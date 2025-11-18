# Setup Guide - Kuttikart Premium Kids Clothing Store

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Configuration

### Update Contact Information

You need to update the WhatsApp number and email in the following files:

1. **src/components/layout/Footer.jsx**
   - Line 58: WhatsApp link
   - Search for `https://wa.me/1234567890` and replace with your number

2. **src/pages/Contact.jsx**
   - Line 22: WhatsApp link in form submission
   - Line 86: WhatsApp contact card
   - Line 128: Email address

3. **src/pages/ProductDetail.jsx**
   - Line 36: WhatsApp link for product inquiries

### Update Social Media Links

Update social media links in:
- **src/components/layout/Footer.jsx** (lines 63-95)
- **src/pages/Contact.jsx** (lines 169-193)

### Customize Products

Edit **src/data/products.js** to add, remove, or modify products.

Each product object should have:
```javascript
{
  id: 1,                          // Unique number
  name: "Product Name",
  price: 2499,                    // Price in INR (no decimals)
  category: "girls" | "boys",
  ageGroup: "3-6 years",
  type: "dress",                  // dress, set, ethnic, etc.
  description: "...",
  sizes: ["3-4Y", "4-5Y"],
  colors: ["Pink", "Blue"],
  material: "100% Cotton",
  images: ["url1", "url2"],       // Array of image URLs
  featured: true                  // Show on homepage
}
```

### Customize Colors

The color scheme is defined in **src/index.css** in the `@theme` section:
- `--color-primary-*`: Main brand colors (currently purple/pink)
- `--color-accent-*`: Fun accent colors (coral, mint, peach, lavender, yellow)

### Update Images

Replace placeholder images with your actual product photos:
1. Add images to `src/assets/images/`
2. Update image URLs in `src/data/products.js`
3. Update hero section images in `src/pages/Home.jsx`

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Footer.jsx        # Site footer with links
│   │   └── Layout.jsx        # Main layout wrapper
│   ├── products/
│   │   └── ProductCard.jsx   # Product card component
│   └── common/
│       ├── Loading.jsx       # Loading spinner
│       └── ScrollToTop.jsx   # Auto-scroll on route change
├── pages/
│   ├── Home.jsx              # Homepage with hero & featured products
│   ├── Products.jsx          # Product catalog with filters
│   ├── ProductDetail.jsx    # Individual product page
│   ├── About.jsx             # About page
│   ├── Contact.jsx           # Contact page with form
│   └── NotFound.jsx          # 404 error page
├── data/
│   └── products.js           # Product data and filters
├── App.jsx                   # Router configuration
├── main.jsx                  # App entry point
└── index.css                 # Global styles & Tailwind config
```

## Features

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly navigation

### Product Filtering
- Filter by category (Boys/Girls)
- Filter by age group
- Filter by product type
- Search functionality

### WhatsApp Integration
- Direct WhatsApp contact from product pages
- Pre-filled messages with product details
- Contact form integration

### SEO Friendly
- Semantic HTML
- Meta tags configured
- Clean URLs with React Router

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

### Other Platforms
The `dist/` folder contains static files that can be deployed to any static hosting service.

## Troubleshooting

### Dev Server Won't Start
- Check if port 5173 is available
- Try `npm install` again
- Clear node_modules: `rm -rf node_modules && npm install`

### Build Fails
- Check for TypeScript/linting errors: `npm run lint`
- Ensure all dependencies are installed
- Check Node version (requires v14+)

### Images Not Loading
- Verify image URLs are accessible
- Check image paths in products.js
- Ensure images are in the public or assets folder

## Support

For questions or issues, refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)

