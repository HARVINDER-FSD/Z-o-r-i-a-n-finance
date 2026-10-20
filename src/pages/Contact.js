import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have questions? Our team is here to help 24/7.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid grid-3">
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>✉️</div>
              <h3 style={{color: '#111827', marginBottom: '8px'}}>Email</h3>
              <a href="mailto:quickadvancecash@gmail.com" style={{color: '#667eea', textDecoration: 'none'}}>
                quickadvancecash@gmail.com
              </a>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>📞</div>
              <h3 style={{color: '#111827', marginBottom: '8px'}}>Phone</h3>
              <a href="tel:+1234567890" style={{color: '#667eea', textDecoration: 'none'}}>
                1-800-LOANS-NOW
              </a>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>📍</div>
              <h3 style={{color: '#111827', marginBottom: '8px'}}>Office</h3>
              <p style={{color: '#6b7280', fontSize: '14px', margin: 0}}>
                8326 Jamieson Ave<br/>
                Northridge, CA 91325
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-card card">
            <h2 style={{fontSize: '28px', marginBottom: '24px', color: '#111827'}}>Send us a Message</h2>
            <form>
              <div className="contact-form-grid">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <input type="text" placeholder="Subject" style={{marginBottom: '16px'}} />
              <textarea placeholder="Message" rows="6" style={{marginBottom: '16px', width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontFamily: 'inherit'}} />
              <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
