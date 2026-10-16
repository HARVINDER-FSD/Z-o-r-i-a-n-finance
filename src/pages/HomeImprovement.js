import React from 'react';
import './LoanPages.css';

function HomeImprovement() {
  const projects = [
    { emoji: '🛏️', name: 'Kitchen' },
    { emoji: '🚿', name: 'Bathroom' },
    { emoji: '⚡', name: 'Electrical' },
    { emoji: '🏠', name: 'Roof' },
    { emoji: '🪟', name: 'Windows' },
    { emoji: '🌳', name: 'Landscaping' },
  ];

  return (
    <div className="loan-page">
      <section className="hero-loan" style={{background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, white 100%)'}}>
        <div className="container">
          <div className="hero-badge">🏠 Home Improvement</div>
          <h1>Transform Your Home</h1>
          <p>Get funds for your home renovation dreams.</p>
          
          <div className="loan-stats grid-4">
            <div className="stat"><strong>6.99%</strong> <span>Starting APR</span></div>
            <div className="stat"><strong>$100K</strong> <span>Max Amount</span></div>
            <div className="stat"><strong>60</strong> <span>Months</span></div>
            <div className="stat"><strong>24h</strong> <span>Funding</span></div>
          </div>
        </div>
      </section>

      <section className="loan-section">
        <div className="container">
          <h2 className="section-title">Popular Projects</h2>
          <div className="grid-3">
            {projects.map((project, idx) => (
              <div key={idx} className="card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '48px', marginBottom: '12px'}}>{project.emoji}</div>
                <h3 style={{color: '#111827'}}>{project.name} Renovation</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-cta" style={{background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'}}>
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Get approved for your home improvement loan today!</p>
          <button className="btn-secondary">Apply Now</button>
        </div>
      </section>
    </div>
  );
}

export default HomeImprovement;
