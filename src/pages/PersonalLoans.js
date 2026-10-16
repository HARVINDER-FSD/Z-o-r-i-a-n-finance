import React from 'react';
import './LoanPages.css';

function PersonalLoans() {
  const useCases = [
    { emoji: '✈️', name: 'Vacation' },
    { emoji: '💍', name: 'Wedding' },
    { emoji: '📚', name: 'Education' },
    { emoji: '🏥', name: 'Medical Bills' },
    { emoji: '🚗', name: 'Vehicle' },
    { emoji: '💼', name: 'Business' },
  ];

  return (
    <div className="loan-page">
      <section className="hero-loan" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, white 100%)'}}>
        <div className="container">
          <div className="hero-badge">💰 Personal Loans</div>
          <h1>Cash When You Need It</h1>
          <p>Get personal loans for any purpose with competitive rates.</p>
          
          <div className="loan-stats grid-4">
            <div className="stat"><strong>12.99%</strong> <span>Starting APR</span></div>
            <div className="stat"><strong>$50K</strong> <span>Max Amount</span></div>
            <div className="stat"><strong>60</strong> <span>Months</span></div>
            <div className="stat"><strong>24h</strong> <span>Funding</span></div>
          </div>
        </div>
      </section>

      <section className="loan-section">
        <div className="container">
          <h2 className="section-title">Use Your Loan For Anything</h2>
          <div className="grid-3">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '48px', marginBottom: '12px'}}>{useCase.emoji}</div>
                <h3 style={{color: '#111827'}}>{useCase.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-cta" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <h2>Get the Cash You Need Today</h2>
          <p>Fast, simple, and transparent personal loans.</p>
          <button className="btn-secondary">Apply Now</button>
        </div>
      </section>
    </div>
  );
}

export default PersonalLoans;
