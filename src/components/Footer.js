import React from 'react';

function Footer({ setPage }) {
  const navigateTo = (page, sectionId = null) => {
    setPage(page);
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
    <footer className="bg-brand-dark text-slate-400 pt-16 pb-12 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-emerald-500/30 flex items-center justify-center text-white" style={{background:'linear-gradient(135deg,#0B1F3A 60%,#10B981 100%)'}}>
                <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none">
                  <polygon points="22,4 14,22 20,22 18,36 26,18 20,18" fill="#F59E0B"/>
                  <text x="26" y="32" fontSize="13" fontWeight="bold" fill="#10B981" fontFamily="sans-serif">$</text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">Quick Advance</span>
                <span className="text-[9px] font-bold tracking-widest uppercase" style={{color:'#10B981'}}>Cash</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Fast, secure, and reliable cash advances when you need them most. Empowering consumers with quick access to funds across the United States.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]" style={{color:'#10B981'}}>location_on</span>
                <span>8326 Jamieson Ave, Northridge, CA 91325</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]" style={{color:'#10B981'}}>mail</span>
                <a href="mailto:support@quickadvancecash.com" className="hover:text-white transition-colors">support@quickadvancecash.com</a>
              </div>
            </div>
          </div>

          {/* Col 1: Loan Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Loan Services</h4>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              <li>
                <button onClick={() => navigateTo('auto-loans')} className="hover:text-white transition-colors bg-transparent border-0 p-0 text-slate-400 cursor-pointer text-xs">
                  Auto Loans
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('home-improvement')} className="hover:text-white transition-colors bg-transparent border-0 p-0 text-slate-400 cursor-pointer text-xs">
                  Home Improvement
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('emergency-loans')} className="hover:text-white transition-colors bg-transparent border-0 p-0 text-slate-400 cursor-pointer text-xs">
                  Emergency Loans
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('debt-consolidation')} className="hover:text-white transition-colors bg-transparent border-0 p-0 text-slate-400 cursor-pointer text-xs">
                  Debt Consolidation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors bg-transparent border-0 p-0 text-slate-400 cursor-pointer text-xs">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('home', 'how-it-works')} className="hover:text-white transition-colors bg-transparent border-0 p-0 text-slate-400 cursor-pointer text-xs">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors bg-transparent border-0 p-0 text-slate-400 cursor-pointer text-xs">
                  FAQ
                </button>
              </li>
              <li>
                <a href="mailto:support@zorianloanfinace.com" className="hover:text-white transition-colors text-slate-400">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Legal & Compliance</h4>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              <li><a href="#privacy" className="hover:text-white transition-colors text-slate-400">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors text-slate-400">Terms of Service</a></li>
              <li><a href="#responsible" className="hover:text-white transition-colors text-slate-400">Responsible Lending</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors text-slate-400">State Licensing</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2018 - 2025 Quick Advance Cash. All rights reserved. | Licensed Lender in all 50 states.</p>
          <div className="flex items-center gap-4">
            <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300">Equal Housing Lender</span>
            <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300">NMLS ID #184920</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
