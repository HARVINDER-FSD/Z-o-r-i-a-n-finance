import React from 'react';
import './LoanPages.css';

function EmergencyLoans() {
  return (
    <div className="loan-page">
      <section className="hero-loan" style={{background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, white 100%)'}}>
        <div className="container">
          <div className="hero-badge">⚠️ Emergency Loans</div>
          <h1>When You Need Help Fast</h1>
          <p>Quick funds for unexpected emergencies.</p>
          
          <div className="loan-stats grid-3">
            <div className="stat"><strong>9.99%</strong> <span>Starting APR</span></div>
            <div className="stat"><strong>$25K</strong> <span>Max Amount</span></div>
            <div className="stat"><strong>36</strong> <span>Months</span></div>
          </div>
        </div>
      </section>

      <section className="loan-section">
        <div className="container">
          <div className="grid-3" style={{textAlign: 'center'}}>
            <div className="card">
              <h3 style={{fontSize: '24px', color: '#111827', marginBottom: '8px'}}>⚡ Same Day Approval</h3>
              <p style={{color: '#6b7280'}}>Get instant decisions</p>
            </div>
            <div className="card">
              <h3 style={{fontSize: '24px', color: '#111827', marginBottom: '8px'}}>💨 Quick Funds</h3>
              <p style={{color: '#6b7280'}}>Access cash within 24 hours</p>
            </div>
            <div className="card">
              <h3 style={{fontSize: '24px', color: '#111827', marginBottom: '8px'}}>🎯 Flexible Terms</h3>
              <p style={{color: '#6b7280'}}>Choose payment terms for you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="loan-cta" style={{background: 'linear-gradient(135deg, #f97316 0%, #d97706 100%)'}}>
        <div className="container">
          <h2>Get Emergency Funds Now</h2>
          <p>Don't let emergencies stress you out. We're here to help.</p>
          <button className="btn-secondary">Apply Now</button>
        </div>
      </section>
    </div>
  );
}

export default EmergencyLoans;
