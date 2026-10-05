import React from 'react';
import './Footer.css';

function Footer({ setPage }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid-4">
          {/* Company Info */}
          <div>
            <div className="footer-logo">
              <div className="logo-icon">Z</div>
              <span>Zorian</span>
            </div>
            <p className="footer-desc">Fast, secure, and reliable loans when you need them most.</p>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a onClick={() => { setPage('auto-loans'); window.scrollTo(0, 0); }}>Auto Loans</a></li>
              <li><a onClick={() => { setPage('personal-loans'); window.scrollTo(0, 0); }}>Personal Loans</a></li>
              <li><a onClick={() => { setPage('home-improvement'); window.scrollTo(0, 0); }}>Home Improvement</a></li>
              <li><a onClick={() => { setPage('debt-consolidation'); window.scrollTo(0, 0); }}>Debt Consolidation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a onClick={() => { setPage('about'); window.scrollTo(0, 0); }}>About Us</a></li>
              <li><a onClick={() => { setPage('faq'); window.scrollTo(0, 0); }}>FAQ</a></li>
              <li><a onClick={() => { setPage('contact'); window.scrollTo(0, 0); }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>📍 8326 Jamieson Ave, Northridge, CA 91325</li>
              <li>✉️ <a href="mailto:support@zorianloanfinance.com">support@zorianloanfinance.com</a></li>
              <li>📞 <a href="tel:+1234567890">1-800-LOANS-NOW</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom flex-between">
          <p>&copy; {currentYear} Zorian Loan Finance. All rights reserved. | Licensed Lender in all 50 states</p>
          <div className="footer-legal">
            <a onClick={() => { setPage('privacy'); window.scrollTo(0, 0); }}>Privacy Policy</a>
            <a onClick={() => { setPage('terms'); window.scrollTo(0, 0); }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
