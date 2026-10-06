# Setup Instructions for Zorian Loan Finance React Website

## Quick Start

### Step 1: Install Dependencies
Open terminal/PowerShell in the `zorian-loan-react` directory and run:

```bash
npm install
```

**Alternative (if npm install fails):**
```bash
npm install --legacy-peer-deps
```

Or use yarn:
```bash
yarn install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

## Troubleshooting

### If npm install is slow:
1. Clear npm cache: `npm cache clean --force`
2. Try with `npm install --legacy-peer-deps`
3. Or use yarn: `yarn install`

### Port 5173 already in use:
Vite will automatically try the next available port (5174, 5175, etc.)

### Module not found errors:
Make sure all dependencies are installed: `npm install`

## Project Structure

All source code is in the `src/` folder:
- `components/` - Reusable components (Header, Footer, Calculator)
- `pages/` - Full page components for each route
- `App.jsx` - Main app with routing setup
- `main.jsx` - Entry point
- `index.css` - Global styles with Tailwind

## Available Routes

- `/` - Home page with hero and calculators
- `/auto-loans` - Auto loan product page with calculator
- `/home-improvement` - Home improvement loans page
- `/emergency-loans` - Emergency loans page
- `/debt-consolidation` - Debt consolidation loans page
- `/contact` - Contact form and support information
- `/faq` - Frequently asked questions

## Customization Tips

### Change Colors
Edit `tailwind.config.js` in the `colors` section:
```javascript
colors: {
  brand: {
    navy: '#0B1F3A',  // Change this
    blue: '#2563EB',  // Change this
  }
}
```

### Update Company Info
- Footer: Edit `src/components/Footer.jsx`
- Contact page: Edit `src/pages/ContactPage.jsx`

### Modify Loan Rates
- Auto Loans Calculator: `src/components/LoanCalculator.jsx`
- Auto Loans Page: `src/pages/AutoLoansPage.jsx`

### Add New Features
Create new components in `src/components/` and pages in `src/pages/`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Static Hosting (S3, etc.)
1. Run `npm run build`
2. Upload `dist/` folder contents
3. Configure web server for SPA routing

## Support

For issues or questions, see the main README.md file.
