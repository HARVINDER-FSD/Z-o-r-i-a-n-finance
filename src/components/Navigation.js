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
      {/* TOP PROMO BANNER */}
      <aside className="bg-brand-dark text-white text-xs py-2 px-4 text-center border-b border-white/10 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
        <span className="font-medium">Fast, transparent consumer financing with zero hidden origination fees.</span>
        <button 
          onClick={() => navigateTo('home', 'calculator')}
          className="text-brand-accent hover:underline font-semibold ml-1 bg-transparent border-0 cursor-pointer text-xs"
        >
          Check rates today &rarr;
        </button>
      </aside>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-3 group cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform" style={{background:'linear-gradient(135deg,#0B1F3A 60%,#10B981 100%)'}}>
              <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
                <polygon points="22,4 14,22 20,22 18,36 26,18 20,18" fill="#F59E0B"/>
                <text x="26" y="32" fontSize="13" fontWeight="bold" fill="#10B981" fontFamily="sans-serif">$</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-brand-navy leading-none">Quick Advance</span>
              <span className="text-[10px] font-bold tracking-widest uppercase mt-0.5" style={{color:'#10B981'}}>Cash</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => navigateTo('home', 'how-it-works')}
              className="text-sm font-semibold text-brand-muted hover:text-brand-navy transition-colors bg-transparent border-0 cursor-pointer"
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
                    <button 
                      onClick={() => navigateTo('auto-loans')}
                      className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blueLight transition-colors bg-transparent border-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-brand-blue text-[20px]">directions_car</span>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Auto Loans</div>
                        <div className="text-[11px] text-brand-muted">Rates from 5.99% APR</div>
                      </div>
                    </button>

                    <button 
                      onClick={() => navigateTo('home-improvement')}
                      className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blueLight transition-colors bg-transparent border-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-brand-blue text-[20px]">home_repair_service</span>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Home Improvement</div>
                        <div className="text-[11px] text-brand-muted">Borrow up to $100k</div>
                      </div>
                    </button>

                    <button 
                      onClick={() => navigateTo('emergency-loans')}
                      className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blueLight transition-colors bg-transparent border-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-brand-blue text-[20px]">emergency</span>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Emergency Loans</div>
                        <div className="text-[11px] text-brand-muted">Expedited disbursement</div>
                      </div>
                    </button>

                    <button 
                      onClick={() => navigateTo('debt-consolidation')}
                      className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blueLight transition-colors bg-transparent border-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-brand-blue text-[20px]">account_balance_wallet</span>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Debt Consolidation</div>
                        <div className="text-[11px] text-brand-muted">Single lower payment</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigateTo('home', 'tools')}
              className="text-sm font-semibold text-brand-muted hover:text-brand-navy transition-colors bg-transparent border-0 cursor-pointer"
            >
              Calculators & Tools
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className={`text-sm font-semibold transition-colors bg-transparent border-0 cursor-pointer ${currentPage === 'about' ? 'text-brand-blue font-bold' : 'text-brand-muted hover:text-brand-navy'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => navigateTo('faq')}
              className={`text-sm font-semibold transition-colors bg-transparent border-0 cursor-pointer ${currentPage === 'faq' ? 'text-brand-blue font-bold' : 'text-brand-muted hover:text-brand-navy'}`}
            >
              FAQ
            </button>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigateTo('apply')}
              className="hidden sm:inline-block text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors px-3 py-2 bg-transparent border-0 cursor-pointer"
            >
              Log In
            </button>
            <button 
              onClick={() => navigateTo('apply')}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all border-0 cursor-pointer"
            >
              <span>Check Eligibility</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            {/* Mobile menu trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-border bg-white px-4 pt-3 pb-6 space-y-3">
            <button 
              onClick={() => navigateTo('home')}
              className="w-full text-left py-2 px-3 rounded-lg font-semibold text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('auto-loans')}
              className="w-full text-left py-2 px-3 rounded-lg font-semibold text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer text-sm"
            >
              Auto Loans
            </button>
            <button 
              onClick={() => navigateTo('home-improvement')}
              className="w-full text-left py-2 px-3 rounded-lg font-semibold text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer text-sm"
            >
              Home Improvement
            </button>
            <button 
              onClick={() => navigateTo('emergency-loans')}
              className="w-full text-left py-2 px-3 rounded-lg font-semibold text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer text-sm"
            >
              Emergency Loans
            </button>
            <button 
              onClick={() => navigateTo('debt-consolidation')}
              className="w-full text-left py-2 px-3 rounded-lg font-semibold text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer text-sm"
            >
              Debt Consolidation
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="w-full text-left py-2 px-3 rounded-lg font-semibold text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer text-sm"
            >
              About Us
            </button>
            <button 
              onClick={() => navigateTo('faq')}
              className="w-full text-left py-2 px-3 rounded-lg font-semibold text-brand-navy hover:bg-brand-bg bg-transparent border-0 cursor-pointer text-sm"
            >
              FAQ
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export default Navigation;
