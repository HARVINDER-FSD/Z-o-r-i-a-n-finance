# Zorian Loan Finance - React.js Website

A modern, professional React.js implementation of the Zorian Loan Finance platform. This is a full-featured fintech lending website with multiple loan products, interactive calculators, and a complete user experience.

## Features

- **Multi-page Application**: Home, Auto Loans, Home Improvement, Emergency Loans, Debt Consolidation, Contact, and FAQ pages
- **Interactive Loan Calculators**: Real-time payment estimation based on loan amount, term, and APR
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Modern UI/UX**: Built with Tailwind CSS following the Zorian design system
- **Client-side Routing**: Smooth navigation using React Router
- **Professional Components**: Reusable Header, Footer, and Calculator components
- **Contact Form**: Fully functional contact form with validation
- **FAQ Section**: Comprehensive FAQ with accordion functionality

## Tech Stack

- **React 18**: Core framework
- **React Router v6**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool
- **JavaScript ES6+**: Modern JavaScript

## Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. Navigate to the project directory:
```bash
cd zorian-loan-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
zorian-loan-react/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── LoanCalculator.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── AutoLoansPage.jsx
│   │   ├── HomeImprovementPage.jsx
│   │   ├── EmergencyLoansPage.jsx
│   │   ├── DebtConsolidationPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── FAQPage.jsx
│   ├── App.jsx           # Root app component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Key Features

### 1. Interactive Loan Calculators
- Real-time monthly payment calculation
- Support for different loan types with varying APR rates
- Adjustable loan amount, term, and down payment
- Instant breakdown of interest and total repayment

### 2. Multi-Product Support
- **Auto Loans**: Up to $75,000 at 5.99% APR
- **Home Improvement**: Up to $100,000 at 6.49% APR
- **Emergency Loans**: Fast next-day funding at 8.99% APR
- **Debt Consolidation**: Roll multiple cards into one at 7.25% APR

### 3. Responsive Navigation
- Sticky header with dropdown menus
- Mobile-friendly hamburger menu
- Quick access to loan calculators and contact forms

### 4. Contact Management
- Full-featured contact form with validation
- Success state feedback
- Three contact methods: Email, Phone, In-person

### 5. Comprehensive FAQ
- Organized by categories
- Accordion-style expandable items
- Easy navigation

## Customization

### Colors
Modify Tailwind colors in `tailwind.config.js`:
```javascript
colors: {
  brand: {
    navy: '#0B1F3A',
    blue: '#2563EB',
    // ... more colors
  }
}
```

### Content
- Update company information in `Footer.jsx`
- Modify loan rates and terms in calculator components
- Edit FAQ items in `FAQPage.jsx`
- Change contact information in `ContactPage.jsx`

### Styling
All styling uses Tailwind CSS utility classes. To customize:
1. Modify class names in components
2. Add custom CSS in `src/index.css`
3. Extend Tailwind config for project-specific utilities

## Performance

- Lightweight bundle size with Vite
- Lazy loading through React Router
- Optimized images
- Efficient re-renders with React hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder ready for deployment.

## Deployment

The build can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Future Enhancements

- Backend API integration for real loan applications
- User authentication and account dashboard
- Payment tracking and history
- Document upload functionality
- Live rate updates
- Email notifications
- Admin dashboard

## Support

For questions or issues, contact:
- Email: support@zorianloanfinance.com
- Phone: (800) 582-9140
- Address: 8326 Jamieson Ave, Northridge, CA 91325

## License

Proprietary - Zorian Loan Finance. All rights reserved.

## Credits

Built with React, Tailwind CSS, and Vite.
