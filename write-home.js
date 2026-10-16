const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'src', 'pages', 'Home.js');

const code = `import React, { useState, useMemo } from 'react';
import './Home.css';
import { 
  IconShield, 
  IconZap, 
  IconClock, 
  IconHeadphones, 
  IconCar, 
  IconHome, 
  IconUser, 
  IconTrendingUp, 
  IconAlertCircle, 
  IconPercent, 
  IconCheckCircle, 
  IconStar, 
  IconArrowRight, 
  IconCalculator,
  IconLock,
  IconFileText
} from '../components/Icons';

function Home({ setPage }) {
  const [loanType, setLoanType] = useState('personal');
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(36);

  // Interest rates map
  const rates = {
    personal: 10.49,
    auto: 8.75,
    home: 8.40,
    debt: 9.99,
  };

  // Accurate EMI calculation
  const { monthlyPayment, totalPayment, totalInterest } = useMemo(() => {
    const annualRate = rates[loanType];
    const monthlyRate = annualRate / 12 / 100;
    const n = loanTerm;
    
    if (monthlyRate === 0) {
      const payment = loanAmount / n;
      return { monthlyPayment: payment, totalPayment: loanAmount, totalInterest: 0 };
    }

    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const total = emi * n;
    const interest = total - loanAmount;

    return {
      monthlyPayment: Math.round(emi),
      totalPayment: Math.round(total),
      totalInterest: Math.round(interest)
    };
  }, [loanAmount, loanTerm, loanType]);

  const formatCurrency = (val) => {
    return '₹' + Number(val).toLocaleString('en-IN');
  };

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: <IconZap size={28} color="#ED1B24" />,
      title: 'Lightning-Fast Disbursal',
      desc: 'Funds credited directly to your bank account within 24 hours of digital verification.',
      badge: 'Under 24 Hrs'
    },
    {
      icon: <IconShield size={28} color="#0C2340" />,
      title: 'RBI Regulated & Secure',
      desc: 'Partnered with RBI-approved NBFCs with 256-bit bank grade encryption for complete safety.',
      badge: '100% Safe'
    },
    {
      icon: <IconPercent size={28} color="#16A34A" />,
      title: 'Lowest Interest Rates',
      desc: 'Transparent pricing starting at just 8.40% p.a. with zero hidden charges or prepayment penalties.',
      badge: 'From 8.40%*'
    },
    {
      icon: <IconHeadphones size={28} color="#EA580C" />,
      title: 'Dedicated Loan Expert',
      desc: 'Get one-on-one personal guidance from application to loan settlement via phone or WhatsApp.',
      badge: '24x7 Help'
    }
  ];

  // Featured Loan Products with real downloaded images
  const products = [
    {
      id: 'personal-loans',
      title: 'Personal Loans',
      tagline: 'Instant Cash for Any Purpose',
      rate: 'From 10.49% p.a.',
      maxAmount: 'Up to ₹25 Lakhs',
      tenure: '12 to 60 Months',
      image: '/images/personal-loan.jpg',
      icon: <IconUser size={20} color="#ED1B24" />,
      features: ['No collateral required', 'Minimal documentation', 'Flexible tenure'],
      badge: 'Most Popular'
    },
    {
      id: 'home-improvement',
      title: 'Home & Renovation Loans',
      tagline: 'Build Your Dream Sanctuary',
      rate: 'From 8.40% p.a.',
      maxAmount: 'Up to ₹1.5 Crores',
      tenure: 'Up to 20 Years',
      image: '/images/home-loan.jpg',
      icon: <IconHome size={20} color="#16A34A" />,
      features: ['Low processing fee', 'Tax benefit under Sec 24', 'Quick property eval'],
      badge: 'Lowest Rate'
    },
    {
      id: 'auto-loans',
      title: 'Auto & Car Loans',
      tagline: 'Drive Home Your Favorite Car',
      rate: 'From 8.75% p.a.',
      maxAmount: 'Up to 100% On-Road',
      tenure: 'Up to 7 Years',
      image: '/images/auto-loan.jpg',
      icon: <IconCar size={20} color="#0C2340" />,
      features: ['100% on-road funding', 'New & pre-owned cars', 'Zero foreclosure fee'],
      badge: 'Zero Downpayment'
    },
    {
      id: 'debt-consolidation',
      title: 'Debt Consolidation',
      tagline: 'Merge High EMIs into One Low Rate',
      rate: 'From 9.99% p.a.',
      maxAmount: 'Up to ₹40 Lakhs',
      tenure: '12 to 84 Months',
      image: '/images/debt-consolidation.jpg',
      icon: <IconTrendingUp size={20} color="#EA580C" />,
      features: ['Reduce EMI up to 40%', 'Single monthly payment', 'Improve credit score'],
      badge: 'Save Money'
    }
  ];

  // How It Works Steps
  const steps = [
    {
      step: '01',
      title: 'Check Eligibility',
      desc: 'Fill basic details and know your loan approval status in under 2 minutes.',
      icon: <IconCheckCircle size={24} color="#ED1B24" />
    },
    {
      step: '02',
      title: 'Choose Offer & Tenure',
      desc: 'Select preferred loan amount, interest rate, and comfortable monthly EMI tenure.',
      icon: <IconCalculator size={24} color="#0C2340" />
    },
    {
      step: '03',
      title: 'Digital Paperless KYC',
      desc: 'Complete paperless Aadhaar/PAN verification via secure DigiLocker integration.',
      icon: <IconFileText size={24} color="#16A34A" />
    },
    {
      step: '04',
      title: 'Direct Bank Disbursal',
      desc: 'Loan agreement signed digitally and money directly transferred to your bank account.',
      icon: <IconZap size={24} color="#EA580C" />
    }
  ];

  // Customer Reviews
  const reviews = [
    {
      name: 'Rajesh Sharma',
      role: 'IT Director, Bangalore',
      image: '/images/avatar2.jpg',
      rating: 5,
      review: 'Got ₹8,00,000 personal loan approved and credited within 4 hours! Seamless process, clean light UI, and much better interest rates than traditional bank queues.',
      loanType: 'Personal Loan'
    },
    {
      name: 'Priyanka Verma',
      role: 'Architect & Interior Designer, Mumbai',
      image: '/images/avatar1.jpg',
      rating: 5,
      review: 'I financed my home renovation through Zorian. Transparent terms, zero surprise fees, and the relationship manager was exceptionally responsive.',
      loanType: 'Home Loan'
    },
    {
      name: 'Amitabh Sen',
      role: 'Senior Consultant, Delhi NCR',
      image: '/images/avatar3.jpg',
      rating: 5,
      review: 'Consolidated three expensive credit cards and an old personal loan into a single low-interest EMI. Saved over ₹14,000 each month on interest payments!',
      loanType: 'Debt Consolidation'
    }
  ];

  return (
    <div className="home-page">
      {/* ============================================
          HERO SECTION — KOTAK LIGHT THEME
      ============================================ */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-tag">
              <IconShield size={14} color="#ED1B24" />
              <span>Kotak & RBI Regulated Lending Partner</span>
            </div>

            <h1 className="hero-title">
              Instant Loans with <span className="highlight-red">Lowest Interest Rates</span> for Every Need
            </h1>

            <p className="hero-subtitle">
              Get pre-approved digital loans up to <strong>₹50 Lakhs</strong> with 100% paperless verification, zero hidden charges, and disbursal directly to your bank account in 24 hours.
            </p>

            {/* Benefit Checkmarks */}
            <div className="hero-checks">
              <div className="check-item">
                <IconCheckCircle size={18} color="#16A34A" />
                <span>Rates from 8.40% p.a.*</span>
              </div>
              <div className="check-item">
                <IconCheckCircle size={18} color="#16A34A" />
                <span>Zero Prepayment Penalty</span>
              </div>
              <div className="check-item">
                <IconCheckCircle size={18} color="#16A34A" />
                <span>Instant Digital Disbursal</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button 
                className="btn-primary hero-btn-apply"
                onClick={() => setPage('apply')}
              >
                <span>Check Your Eligibility</span>
                <IconArrowRight size={18} color="#FFFFFF" />
              </button>
              
              <a href="#calculator" className="btn-secondary hero-btn-calc">
                <IconCalculator size={18} color="#0C2340" />
                <span>Calculate EMI</span>
              </a>
            </div>

            {/* Trust Stats Bar */}
            <div className="hero-trust-bar">
              <div className="trust-stat">
                <strong>₹4,500+ Cr</strong>
                <span>Disbursed</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-stat">
                <strong>10 Lakh+</strong>
                <span>Happy Customers</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-stat">
                <div className="star-rating">
                  <strong>4.9/5</strong>
                  <IconStar size={14} color="#F59E0B" fill="#F59E0B" />
                </div>
                <span>TrustScore Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Image & Floating Cards */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src="/images/hero-loan.jpg" 
                alt="Happy customer with instant loan approval"
                className="hero-main-img"
              />
              <div className="hero-img-gradient"></div>

              {/* Floating Approval Card */}
              <div className="floating-card approval-card">
                <div className="card-icon-circle green">
                  <IconCheckCircle size={22} color="#16A34A" />
                </div>
                <div>
                  <span className="card-label">Loan Approved</span>
                  <strong className="card-value">₹5,00,000 Disbursed</strong>
                  <span className="card-sub">In 18 minutes • Axis & Kotak</span>
                </div>
              </div>

              {/* Floating Credit Score Card */}
              <div className="floating-card score-card">
                <div className="card-icon-circle red">
                  <IconShield size={20} color="#ED1B24" />
                </div>
                <div>
                  <span className="card-label">CIBIL Score</span>
                  <strong className="card-value">790 (Excellent)</strong>
                  <span className="card-sub">Eligible for lowest 8.40% rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LOAN EMI CALCULATOR — KOTAK LIGHT CARD
      ============================================ */}
      <section className="calculator-section" id="calculator">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Smart EMI Calculator</span>
            <h2 className="section-title">Calculate Your Monthly Loan EMI</h2>
            <p className="section-subtitle">
              Plan your finances accurately before applying. Adjust amount and tenure to find your ideal monthly payment.
            </p>
          </div>

          <div className="calc-card">
            {/* Calculator Left: Controls */}
            <div className="calc-controls">
              {/* Loan Type Selector */}
              <div className="calc-group">
                <label className="calc-label">Select Loan Type</label>
                <div className="loan-type-buttons">
                  <button 
                    className={\`type-btn \${loanType === 'personal' ? 'active' : ''}\`}
                    onClick={() => setLoanType('personal')}
                  >
                    Personal (10.49%)
                  </button>
                  <button 
                    className={\`type-btn \${loanType === 'home' ? 'active' : ''}\`}
                    onClick={() => setLoanType('home')}
                  >
                    Home (8.40%)
                  </button>
                  <button 
                    className={\`type-btn \${loanType === 'auto' ? 'active' : ''}\`}
                    onClick={() => setLoanType('auto')}
                  >
                    Auto (8.75%)
                  </button>
                  <button 
                    className={\`type-btn \${loanType === 'debt' ? 'active' : ''}\`}
                    onClick={() => setLoanType('debt')}
                  >
                    Consolidation (9.99%)
                  </button>
                </div>
              </div>

              {/* Amount Slider */}
              <div className="calc-group">
                <div className="calc-slider-header">
                  <label className="calc-label">Loan Amount Required</label>
                  <span className="calc-value-display">{formatCurrency(loanAmount)}</span>
                </div>
                <input 
                  type="range"
                  min="50000"
                  max="5000000"
                  step="25000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="slider-limits">
                  <span>₹50,000</span>
                  <span>₹25,00,000</span>
                  <span>₹50,00,000</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="calc-group">
                <div className="calc-slider-header">
                  <label className="calc-label">Loan Duration (Tenure)</label>
                  <span className="calc-value-display">{loanTerm} Months ({Math.round(loanTerm / 12 * 10) / 10} Yrs)</span>
                </div>
                <input 
                  type="range"
                  min="12"
                  max="84"
                  step="6"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="slider-limits">
                  <span>1 Year</span>
                  <span>3.5 Years</span>
                  <span>7 Years</span>
                </div>
              </div>
            </div>

            {/* Calculator Right: Output Summary Card */}
            <div className="calc-summary">
              <div className="summary-card-inner">
                <div className="summary-top">
                  <span className="summary-title">Estimated Monthly EMI</span>
                  <div className="emi-display">
                    <span className="emi-amount">{formatCurrency(monthlyPayment)}</span>
                    <span className="emi-per-month">/ month</span>
                  </div>
                </div>

                <div className="summary-breakdown">
                  <div className="breakdown-row">
                    <span className="b-label">Principal Amount</span>
                    <strong className="b-val">{formatCurrency(loanAmount)}</strong>
                  </div>
                  <div className="breakdown-row">
                    <span className="b-label">Interest Rate</span>
                    <strong className="b-val text-red">{rates[loanType]}% p.a.</strong>
                  </div>
                  <div className="breakdown-row">
                    <span className="b-label">Total Interest Payable</span>
                    <strong className="b-val">{formatCurrency(totalInterest)}</strong>
                  </div>
                  <div className="breakdown-divider"></div>
                  <div className="breakdown-row total">
                    <span className="b-label">Total Amount Payable</span>
                    <strong className="b-val">{formatCurrency(totalPayment)}</strong>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="breakdown-bar-wrap">
                  <div className="bar-labels">
                    <span className="bar-label-p">Principal: {Math.round((loanAmount / totalPayment) * 100)}%</span>
                    <span className="bar-label-i">Interest: {Math.round((totalInterest / totalPayment) * 100)}%</span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-fill-p" 
                      style={{ width: \`\${(loanAmount / totalPayment) * 100}%\` }}
                    ></div>
                    <div 
                      className="progress-fill-i" 
                      style={{ width: \`\${(totalInterest / totalPayment) * 100}%\` }}
                    ></div>
                  </div>
                </div>

                <button 
                  className="btn-primary calc-apply-btn"
                  onClick={() => setPage('apply')}
                >
                  <span>Apply For {formatCurrency(loanAmount)}</span>
                  <IconArrowRight size={16} color="#FFFFFF" />
                </button>
                <p className="calc-footnote">*Final interest rate subject to CIBIL & bank assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PRODUCTS SECTION — CARDS WITH REAL IMAGES
      ============================================ */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tailored Products</span>
            <h2 className="section-title">Explore Our Wide Range of Loan Solutions</h2>
            <p className="section-subtitle">
              Whether purchasing your dream car, renovating a home, or consolidating debts, we have the right financing plan for you.
            </p>
          </div>

          <div className="products-grid">
            {products.map((item) => (
              <div key={item.id} className="product-card">
                <div className="product-img-box">
                  <img src={item.image} alt={item.title} className="product-img" />
                  <span className="product-badge">{item.badge}</span>
                </div>
                
                <div className="product-body">
                  <div className="product-header">
                    <div className="product-icon-wrap">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="product-title">{item.title}</h3>
                      <p className="product-tagline">{item.tagline}</p>
                    </div>
                  </div>

                  <div className="product-stats-row">
                    <div className="p-stat">
                      <span className="p-stat-label">Interest Rate</span>
                      <strong className="p-stat-value highlight">{item.rate}</strong>
                    </div>
                    <div className="p-stat">
                      <span className="p-stat-label">Max Limit</span>
                      <strong className="p-stat-value">{item.maxAmount}</strong>
                    </div>
                  </div>

                  <ul className="product-features">
                    {item.features.map((f, i) => (
                      <li key={i}>
                        <IconCheckCircle size={14} color="#16A34A" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className="btn-outline-red product-btn"
                    onClick={() => setPage(item.id)}
                  >
                    <span>View Details & Apply</span>
                    <IconArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US — TRUST & SPEED
      ============================================ */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Zorian</span>
            <h2 className="section-title">The Modern Way to Borrow Money</h2>
            <p className="section-subtitle">
              We eliminate traditional banking red tape, lengthy paperwork, and confusing hidden charges with our seamless digital lending experience.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((feature, idx) => (
              <div key={idx} className="why-card">
                <div className="why-card-top">
                  <div className="why-icon-box">{feature.icon}</div>
                  <span className="why-badge">{feature.badge}</span>
                </div>
                <h3 className="why-title">{feature.title}</h3>
                <p className="why-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS — 4 EASY STEPS
      ============================================ */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Seamless Process</span>
            <h2 className="section-title">Get Funded in 4 Simple Steps</h2>
            <p className="section-subtitle">
              Fast, transparent, and 100% digital from start to finish without visiting any bank branch.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((st, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{st.step}</div>
                <div className="step-icon-wrap">{st.icon}</div>
                <h3 className="step-title">{st.title}</h3>
                <p className="step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS WITH REAL CUSTOMER PHOTOS
      ============================================ */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Customer Stories</span>
            <h2 className="section-title">Trusted by Thousands Across India</h2>
            <p className="section-subtitle">
              Discover how our seamless financing helped real people achieve their dreams with peace of mind.
            </p>
          </div>

          <div className="testimonials-grid">
            {reviews.map((rev, index) => (
              <div key={index} className="review-card">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <IconStar key={i} size={16} color="#F59E0B" fill="#F59E0B" />
                  ))}
                  <span className="loan-badge-pill">{rev.loanType}</span>
                </div>
                <p className="review-text">"{rev.review}"</p>
                <div className="reviewer-info">
                  <img src={rev.image} alt={rev.name} className="reviewer-avatar" />
                  <div>
                    <h4 className="reviewer-name">{rev.name}</h4>
                    <span className="reviewer-role">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CALL TO ACTION BANNER — KOTAK RED
      ============================================ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="cta-tag">Pre-Approved Offers Waiting</span>
              <h2 className="cta-title">Ready to Fuel Your Financial Goals?</h2>
              <p className="cta-desc">
                Check your eligibility in 60 seconds with zero impact on your CIBIL score. Instant approval and same-day bank disbursal.
              </p>
              <div className="cta-buttons">
                <button 
                  className="btn-white-action"
                  onClick={() => setPage('apply')}
                >
                  <span>Apply Now Online</span>
                  <IconArrowRight size={18} color="#ED1B24" />
                </button>
                <a href="tel:18002667788" className="btn-outline-white">
                  <IconHeadphones size={18} color="#FFFFFF" />
                  <span>Call 1800-266-7788</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
`;

fs.writeFileSync(target, code, 'utf8');
console.log('Successfully wrote Home.js');
