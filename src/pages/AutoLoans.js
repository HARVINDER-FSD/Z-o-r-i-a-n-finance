import React from 'react';
import './LoanPages.css';

function AutoLoans() {
  const benefits = [
    { icon: '💰', title: 'Competitive Rates', desc: 'Starting at 5.99% APR' },
    { icon: '⚡', title: 'Quick Approval', desc: 'Get approved in minutes' },
    { icon: '📋', title: 'Flexible Terms', desc: '6 to 60 months available' },
    { icon: '🚗', title: 'All Vehicles', desc: 'Cars, trucks, motorcycles, RVs' },
  ];

  const vehicles = [
    { emoji: '🚗', name: 'Cars & Sedans' },
    { emoji: '🚙', name: 'Trucks & SUVs' },
    { emoji: '🏍️', name: 'Motorcycles' },
    { emoji: '🚐', name: 'RVs & Campers' },
  ];

  return (
    <div className="loan-page">
      {/* Hero */}
      <section className="hero-loan" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, white 100%)'}}>
        <div className="container">
          <div className="hero-badge">🚗 Auto Loans</div>
          <h1>Finance Your Dream Car</h1>
          <p>Get behind the wheel with competitive rates and flexible terms.</p>
          
          <div className="loan-stats grid-4">
            <div className="stat"><strong>5.99%</strong> <span>Starting APR</span></div>
            <div className="stat"><strong>$75K</strong> <span>Max Amount</span></div>
            <div className="stat"><strong>60</strong> <span>Months</span></div>
            <div className="stat"><strong>24h</strong> <span>Funding</span></div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="loan-section">
        <div className="container">
          <h2 className="section-title">Why Finance With Us?</h2>
          <div className="grid-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card">
                <div style={{fontSize: '32px', marginBottom: '12px'}}>{benefit.icon}</div>
                <h3 style={{marginBottom: '8px', color: '#111827'}}>{benefit.title}</h3>
                <p style={{color: '#6b7280', fontSize: '14px'}}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="loan-section" style={{background: '#f9fafb'}}>
        <div className="container">
          <h2 className="section-title">We Finance All Vehicle Types</h2>
          <div className="grid-4">
            {vehicles.map((vehicle, idx) => (
              <div key={idx} className="card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '48px', marginBottom: '12px'}}>{vehicle.emoji}</div>
                <h3 style={{color: '#111827'}}>{vehicle.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="loan-cta" style={{background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'}}>
        <div className="container">
          <h2>Ready to Drive Home Today?</h2>
          <p>Get pre-approved in minutes. No impact on your credit score.</p>
          <button className="btn-secondary">Start Your Application</button>
        </div>
      </section>
    </div>
  );
}

export default AutoLoans;
