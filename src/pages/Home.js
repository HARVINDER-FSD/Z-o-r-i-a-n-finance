import React, { useState, useMemo } from 'react';
import './Home.css';

function Home({ setPage }) {
  const [loanType, setLoanType] = useState('auto');
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(60);

  const rates = { auto: 5.99, personal: 12.99, home: 6.99, debt: 7.99 };

  const monthlyPayment = useMemo(() => {
    const rate = rates[loanType] / 100 / 12;
    if (rate === 0) return loanAmount / loanTerm;
    return (loanAmount * rate * Math.pow(1 + rate, loanTerm)) / (Math.pow(1 + rate, loanTerm) - 1);
  }, [loanAmount, loanTerm, loanType]);

  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  const features = [
    { icon: '?', title: 'Fast Funding', desc: 'Get funds as soon as the next business day after approval.' },
    { icon: '??', title: 'Secure Process', desc: 'Your information is protected with bank-level 256-bit encryption.' },
    { icon: '?', title: 'Easy Approval', desc: 'Simple requirements and instant decisions in under 60 seconds.' },
    { icon: '??', title: '24/7 Support', desc: 'Our dedicated support team is here for you around the clock.' },
  ];

  const loanProducts = [
    { icon: '??', title: 'Auto Loans', rate: '5.99%', max: '$75,000', term: '60 months', page: 'auto-loans' },
    { icon: '??', title: 'Home Improvement', rate: '6.99%', max: '$100,000', term: '60 months', page: 'home-improvement' },
    { icon: '??', title: 'Personal Loans', rate: '12.99%', max: '$50,000', term: '60 months', page: 'personal-loans' },
    { icon: '??', title: 'Debt Consolidation', rate: '7.99%', max: '$100,000', term: '60 months', page: 'debt-consolidation' },
    { icon: '??', title: 'Emergency Loans', rate: '9.99%', max: '$25,000', term: '36 months', page: 'emergency-loans' },
  ];

  const testimonials = [
    { name: 'Marcus Williams', city: 'Austin, TX', text: 'Got approved in minutes! The process was smooth and rates are unbeatable. Zorian truly delivers.', initials: 'MW' },
    { name: 'Mike Rodriguez', city: 'Phoenix, AZ', text: 'Zorian Loan Finance saved me in an emergency. Professional service from start to finish. Highly recommended!', initials: 'MR' },
    { name: 'Sarah Johnson', city: 'Denver, CO', text: 'Best loan experience ever. Simple, straightforward, and the team was incredibly helpful throughout.', initials: 'SJ' },
    { name: 'James Chen', city: 'Seattle, WA', text: 'The loan calculator was incredibly helpful for planning. Got exactly the amount I needed at a great rate.', initials: 'JC' },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-grid-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-badge">? Fast &amp; Secure Loans</div>
              <h1>Get <span className="gradient-text">Approved</span><br />in Minutes</h1>
              <p>Access fast, secure loans with competitive rates. From auto financing to home improvements — we have every financial need covered.</p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => setPage('apply')}>Apply Now ?</button>
                <button className="btn-secondary" onClick={() => setPage('about')}>Learn More</button>
              </div>
              <div className="hero-badges">
                <div className="hero-badge-item"><span className="badge-dot" />Licensed in all 50 states</div>
                <div className="hero-badge-item"><span className="badge-dot" />250,000+ satisfied customers</div>
                <div className="hero-badge-item"><span className="badge-dot" />Funds as fast as 24 hours</div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-orbit">??</div>
                <div className="card-badge">??</div>
                <p className="card-label">Loan Amount</p>
                <p className="card-amount">${loanAmount.toLocaleString()}</p>
                <div className="card-details">
                  <div><span>Interest Rate</span> <strong>{rates[loanType]}%</strong></div>
                  <div><span>Monthly Payment</span> <strong>${monthlyPayment.toFixed(0)}</strong></div>
                  <div><span>Loan Type</span> <strong style={{textTransform:'capitalize'}}>{loanType}</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-grid grid-4">
            <div className="stat-card"><p className="stat-number">250K+</p><p>Happy Customers</p></div>
            <div className="stat-card"><p className="stat-number">5.99%</p><p>Starting APR</p></div>
            <div className="stat-card"><p className="stat-number">24h</p><p>Fast Funding</p></div>
            <div className="stat-card"><p className="stat-number">100%</p><p>Transparent</p></div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="gradient-text">Zorian</span>?</h2>
          <p className="section-subtitle">We built the fastest, most secure loan platform in America. Here is what makes us different.</p>
          <div className="grid-4">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card card">
                <div className="feature-icon-wrap">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <h2 className="section-title">Loan <span className="gradient-text">Calculator</span></h2>
          <p className="section-subtitle">See your estimated monthly payments instantly. Adjust the sliders to explore your options.</p>
          <div className="calculator-grid grid-2">
            <div className="calculator-form card">
              <div className="form-group">
                <label>Loan Type</label>
                <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
                  <option value="auto">?? Auto Loans — 5.99%</option>
                  <option value="personal">?? Personal Loans — 12.99%</option>
                  <option value="home">?? Home Improvement — 6.99%</option>
                  <option value="debt">?? Debt Consolidation — 7.99%</option>
                </select>
              </div>
              <div className="form-group">
                <label>Loan Amount: <span style={{color:'#F59E0B'}}>${loanAmount.toLocaleString()}</span></label>
                <input type="range" min="1000" max="100000" step="1000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
                <div className="range-labels"><span>$1,000</span> <span>$100,000</span></div>
              </div>
              <div className="form-group">
                <label>Loan Term: <span style={{color:'#F59E0B'}}>{loanTerm} months</span></label>
                <input type="range" min="6" max="60" step="1" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} />
                <div className="range-labels"><span>6 months</span> <span>60 months</span></div>
              </div>
            </div>
            <div className="calculator-results">
              <div className="result-card gradient-primary">
                <p className="result-label">Monthly Payment</p>
                <p className="result-amount">${monthlyPayment.toFixed(2)}</p>
              </div>
              <div className="result-card">
                <p className="result-label">Total Payment</p>
                <p className="result-amount">${totalPayment.toFixed(2)}</p>
              </div>
              <div className="result-card">
                <p className="result-label">Total Interest</p>
                <p className="result-amount">${totalInterest.toFixed(2)}</p>
              </div>
              <button className="btn-primary" style={{width:'100%',marginTop:'8px',justifyContent:'center'}} onClick={() => setPage('apply')}>
                Apply for This Loan ?
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Our Loan <span className="gradient-text">Products</span></h2>
          <p className="section-subtitle">Choose from our range of competitive loan products tailored to your unique needs.</p>
          <div className="grid-3">
            {loanProducts.map((product, idx) => (
              <div key={idx} className="product-card card" onClick={() => setPage(product.page)}>
                <div className="product-icon-wrap">{product.icon}</div>
                <h3>{product.title}</h3>
                <p>{product.rate} APR</p>
                <div className="product-details">
                  <div><strong>{product.max}</strong> <span>Max</span></div>
                  <div><strong>{product.term}</strong> <span>Term</span></div>
                </div>
                <div className="product-card-cta">Apply Now ?</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers <span className="gradient-text">Say</span></h2>
          <p className="section-subtitle">Join over 250,000 happy customers who trust Zorian for their financing needs.</p>
          <div className="grid-4">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card card">
                <div className="testimonial-stars">{[1,2,3,4,5].map(s => <span key={s}>?</span>)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testimonial.initials}</div>
                  <div className="testimonial-info">
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.city}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Your <span className="gradient-text">Loan?</span></h2>
            <p>Join thousands of satisfied customers. Get approved in minutes with rates starting at 5.99% APR.</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => setPage('apply')}>Apply Now — It Is Free ?</button>
              <button className="btn-secondary" onClick={() => setPage('contact')}>Talk to an Expert</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
