import React, { useState } from 'react';
import './Navigation.css';

function Navigation({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoanDropdown, setShowLoanDropdown] = useState(false);

  const handleNavClick = (page) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="nav-container container">
        {/* Logo */}
        <div 
          className="nav-logo"
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-icon">Z</div>
          <span>Zorian</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li>
            <a onClick={() => handleNavClick('home')}>Home</a>
          </li>
          <li className="dropdown">
            <a>Loans ▼</a>
            <div className="dropdown-content">
              <a onClick={() => handleNavClick('auto-loans')}>Auto Loans</a>
              <a onClick={() => handleNavClick('personal-loans')}>Personal Loans</a>
              <a onClick={() => handleNavClick('home-improvement')}>Home Improvement</a>
              <a onClick={() => handleNavClick('debt-consolidation')}>Debt Consolidation</a>
              <a onClick={() => handleNavClick('emergency-loans')}>Emergency Loans</a>
            </div>
          </li>
          <li>
            <a onClick={() => handleNavClick('about')}>About</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('faq')}>FAQ</a>
          </li>
        </ul>

        {/* Apply Button */}
        <button 
          className="btn-primary nav-btn"
          onClick={() => handleNavClick('apply')}
        >
          Apply Now
        </button>

        {/* Mobile Menu Toggle */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a onClick={() => handleNavClick('home')}>Home</a>
          <a onClick={() => handleNavClick('auto-loans')}>Auto Loans</a>
          <a onClick={() => handleNavClick('personal-loans')}>Personal Loans</a>
          <a onClick={() => handleNavClick('home-improvement')}>Home Improvement</a>
          <a onClick={() => handleNavClick('debt-consolidation')}>Debt Consolidation</a>
          <a onClick={() => handleNavClick('emergency-loans')}>Emergency Loans</a>
          <a onClick={() => handleNavClick('about')}>About</a>
          <a onClick={() => handleNavClick('faq')}>FAQ</a>
          <button 
            className="btn-primary nav-btn-mobile"
            onClick={() => handleNavClick('apply')}
          >
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
