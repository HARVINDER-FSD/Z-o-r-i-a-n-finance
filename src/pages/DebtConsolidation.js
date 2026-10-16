import React from 'react';
import './LoanPages.css';

function DebtConsolidation() {
  return (
    <div className="loan-page">
      <section className="hero-loan" style={{background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, white 100%)'}}>
        <div className="container">
          <div className="hero-badge">📉 Debt Consolidation</div>
          <h1>Simplify Your Finances</h1>
          <p>Consolidate multiple debts into one simple payment.</p>
          
          <div className="loan-stats grid-3">
            <div className="stat"><strong>7.99%</strong> <span>Starting APR</span></div>
            <div className="stat"><strong>$100K</strong> <span>Max Amount</span></div>
            <div className="stat"><strong>60</strong> <span>Months</span></div>
          </div>
        </div>
      </section>

      <section className="loan-section">
        <div className="container">
          <div className="grid-3" style={{textAlign: 'center'}}>
            <div className="card">
              <h3 style={{fontSize: '24px', color: '#111827', marginBottom: '8px'}}>💰 Lower Rates</h3>
              <p style={{color: '#6b7280'}}>Save money with competitive rates</p>
            </div>
            <div className="card">
              <h3 style={{fontSize: '24px', color: '#111827', marginBottom: '8px'}}>📋 One Payment</h3>
              <p style={{color: '#6b7280'}}>Combine multiple debts into one</p>
            </div>
            <div className="card">
              <h3 style={{fontSize: '24px', color: '#111827', marginBottom: '8px'}}>⚡ Quick Relief</h3>
              <p style={{color: '#6b7280'}}>Get approved in minutes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="loan-cta" style={{background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'}}>
        <div className="container">
          <h2>Take Control of Your Debt</h2>
          <p>Consolidate and simplify your finances today.</p>
          <button className="btn-secondary">Apply Now</button>
        </div>
      </section>
    </div>
  );
}

export default DebtConsolidation;
