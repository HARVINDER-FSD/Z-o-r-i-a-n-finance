import React, { useState } from 'react';

function Navigation({ setPage, currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);

  const navigateTo = (page, sectionId = null) => {
    setPage(page);
    setMobileMenuOpen(false);
    setLoansDropdownOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">

          {/* Logo */}
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('home')}
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#0B1F3A 60%,#10B981 100%)' }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 40 40" fill="none">
                <polygon points="22,4 14,22 20,22 18,36 26,18 20,18" fill="#F59E0B" />
                <text x="26" y="32" fontSize="13" fontWeight="bold" fill="#10B981" fontFamily="sans-serif">$</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-brand-navy leading-none">Quick Advance</span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5" style={{ color: '#10B981' }}>Cash</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            <button
              onClick={() => navigateTo('home', 'how-it-works')}
              className="text-sm font-semibold text-brand-muted hover:text-brand-navy transition-colors bg-transparent border-0 cursor-pointer whitespace-nowrap"
            >
              How It Works
            </button>

            {/* Loans Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <button
                onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-brand-muted hover:text-brand-navy transition-colors focus:outline-none bg-transparent border-0 cursor-pointer"
              >
                <span>Loans</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${loansDropdownOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {loansDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-brand-border p-2 space-y-1">
                    {[
                      { page: 'auto-loans', icon: 'directions_car', title: 'Auto Loans', sub: 'Rates from 5.99% APR' },
                      { page: 'home-improvement', icon: 'home_repair_service', title: 'Home Improvement', sub: 'Borrow up to $100k' },
                      { page: 'emergency-loans', icon: 'emergency', title: 'Emergency Loans', sub: 'Expedited disbursement' },
                      { page: 'debt-consolidation', icon: 'account_balance_wallet', title: 'Debt Consolidation', sub: 'Single lower payment' },
                    ].map((item) => (
                      <button
                        key={item.page}
                        onClick={() => navigateTo(item.page)}
                        className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blueLight transition-colors bg-transparent border-0 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-brand-blue text-[20px]">{item.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-brand-navy">{item.title}</div>
                          <div className="text-[11px] text-brand-muted">{item.sub}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('home', 'tools')}
              className="text-sm font-semibold text-brand-muted hover:text-brand-navy transition-colors bg-transparent border-0 cursor-pointer whitespace-nowrap"
            >
              Calculators &amp; Tools
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`text-sm font-semibold transition-colors bg-transparent border-0 cursor-pointer whitespace-nowrap ${currentPage === 'about' ? 'text-brand-blue font-bold' : 'text-brand-muted hover:text-brand-navy'}`}
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo('faq')}
              className={`text-sm font-semibold transition-colors bg-transparent border-0 cursor-pointer whitespace-nowrap ${currentPage === 'faq' ? 'text-brand-blue font-bold' : 'text-brand-muted hover:text-brand-navy'}`}
            >
              FAQ
            </button>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Log In — hidden on mobile */}
            <button
              onClick={() => navigateTo('apply')}
              className="hidden sm:inline-block text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors px-3 py-2 bg-transparent border-0 cursor-pointer whitespace-nowrap"
            >
              Log In
            </button>

            {/* CTA Button — text on sm+, icon-only on xs */}
            <button
              onClick={() => navigateTo('apply')}
              className="inline-flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-brand-blueHover text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all border-0 cursor-pointer px-3 py-2 sm:px-5 sm:py-2.5"
            >
              <span className="hidden sm:inline whitespace-nowrap">Check Eligibility</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            {/* Hamburger — visible only below lg */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-xl text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-border bg-white px-4 pt-4 pb-6">

            {/* Main Links */}
            <div className="space-y-1 mb-4">
              {[
                { label: 'Home', page: 'home' },
                { label: 'How It Works', page: 'home', section: 'how-it-works' },
                { label: 'About Us', page: 'about' },
                { label: 'FAQ', page: 'faq' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigateTo(item.page, item.section)}
                  className={`w-full text-left py-2.5 px-3 rounded-lg font-semibold bg-transparent border-0 cursor-pointer text-sm transition-colors ${
                    currentPage === item.page && !item.section
                      ? 'text-brand-blue bg-brand-blueLight'
                      : 'text-brand-navy hover:bg-brand-bg'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Loans Section */}
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted px-3 mb-2">Loan Products</p>
              <div className="space-y-1">
                {[
                  { page: 'auto-loans', icon: 'directions_car', label: 'Auto Loans' },
                  { page: 'home-improvement', icon: 'home_repair_service', label: 'Home Improvement' },
                  { page: 'emergency-loans', icon: 'emergency', label: 'Emergency Loans' },
                  { page: 'debt-consolidation', icon: 'account_balance_wallet', label: 'Debt Consolidation' },
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => navigateTo(item.page)}
                    className={`w-full text-left flex items-center gap-3 py-2.5 px-3 rounded-lg font-semibold bg-transparent border-0 cursor-pointer text-sm transition-colors ${
                      currentPage === item.page
                        ? 'text-brand-blue bg-brand-blueLight'
                        : 'text-brand-navy hover:bg-brand-bg'
                    }`}
                  >
                    <span className="material-symbols-outlined text-brand-blue text-[18px]">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider + CTA Buttons */}
            <div className="border-t border-brand-border pt-4 space-y-2">
              <button
                onClick={() => navigateTo('apply')}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all border-0 cursor-pointer"
              >
                <span>Check Eligibility</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => navigateTo('apply')}
                className="w-full text-center py-2.5 text-sm font-semibold text-brand-muted hover:text-brand-navy bg-transparent border-0 cursor-pointer"
              >
                Log In
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navigation;


