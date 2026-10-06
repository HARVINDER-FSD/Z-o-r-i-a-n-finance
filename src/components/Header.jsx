import { useState } from 'react'
import { Link } from 'react-router-dom'
import zorian_logo from '../assets/zorian-logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            alt="Zorian Loan Finance Logo"
            className="h-12 w-auto object-contain"
            src={zorian_logo}
          />
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-lg text-slate-1000">Zorian</span>
            <span className="text-xs font-semibold text-black-700">LOAN FINANCE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          <a href="#how-it-works" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            How It Works
          </a>

          {/* Loans Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setLoansDropdownOpen(true)}
            onMouseLeave={() => setLoansDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 py-2 transition-colors">
              <span>Loan Options</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </button>

            {/* Dropdown Menu */}
            {loansDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                <Link
                  to="/auto-loans"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-1.5 rounded-md text-[20px]">
                    directions_car
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Auto Loans</div>
                    <div className="text-[11px] text-slate-500">From 5.99% APR • Up to $75K</div>
                  </div>
                </Link>
                <Link
                  to="/home-improvement"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-1.5 rounded-md text-[20px]">
                    home_repair_service
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Home Improvement</div>
                    <div className="text-[11px] text-slate-500">From 6.49% APR • Up to $100K</div>
                  </div>
                </Link>
                <Link
                  to="/emergency-loans"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-1.5 rounded-md text-[20px]">
                    bolt
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Emergency Loans</div>
                    <div className="text-[11px] text-slate-500">Fast next-day funding • Low friction</div>
                  </div>
                </Link>
                <Link
                  to="/debt-consolidation"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-1.5 rounded-md text-[20px]">
                    account_balance
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Debt Consolidation</div>
                    <div className="text-[11px] text-slate-500">Simplify balances • Fixed 60-mo terms</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <a href="#calculator" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Calculator
          </a>
          <Link to="/faq" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/auto-loans"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all duration-150"
          >
            Check Eligibility
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          <a href="#how-it-works" className="block text-sm font-semibold text-slate-800 py-1">
            How It Works
          </a>
          <Link to="/auto-loans" className="block text-sm font-semibold text-slate-800 py-1">
            Loan Types
          </Link>
          <a href="#calculator" className="block text-sm font-semibold text-slate-800 py-1">
            Calculator
          </a>
          <Link to="/" className="block text-sm font-semibold text-slate-800 py-1">
            About Us
          </Link>
          <Link to="/faq" className="block text-sm font-semibold text-slate-800 py-1">
            FAQ
          </Link>
          <Link
            to="/contact"
            className="w-full text-center block py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
