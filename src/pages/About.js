import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Zorian Loan Finance</h1>
          <p>Founded in 2018, we've become a trusted leader in fast, transparent loans.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'}}>
            <div>
              <h2 style={{fontSize: '32px', marginBottom: '16px', color: '#111827'}}>Our Story</h2>
              <p style={{color: '#6b7280', marginBottom: '16px', lineHeight: '1.6'}}>
                Zorian was founded to make borrowing easy and transparent. We saw a gap where traditional banks were slow and unfair.
              </p>
              <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                Today, we've helped 250,000+ customers with over $2 billion in loans across all 50 states.
              </p>
            </div>
            <div className="about-stats">
              <div><strong>250K+</strong> <span>Customers</span></div>
              <div><strong>$2B+</strong> <span>Funded</span></div>
              <div><strong>7 Years</strong> <span>In Business</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" style={{background: '#f9fafb'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '32px', marginBottom: '48px', color: '#111827'}}>Our Values</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px'}}>
            {[
              { emoji: '❤️', title: 'Customer First', desc: 'We put customers at the center' },
              { emoji: '⭐', title: 'Integrity', desc: 'Transparent in all dealings' },
              { emoji: '🎯', title: 'Responsibility', desc: 'Responsible lending' },
              { emoji: '🤝', title: 'Community', desc: 'Support our communities' },
            ].map((value, idx) => (
              <div key={idx} className="card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '32px', marginBottom: '12px'}}>{value.emoji}</div>
                <h3 style={{color: '#111827', marginBottom: '8px'}}>{value.title}</h3>
                <p style={{color: '#6b7280', fontSize: '14px'}}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <h2>Join Thousands of Satisfied Customers</h2>
          <p>Experience the Zorian difference today.</p>
          <button className="btn-secondary">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default About;
