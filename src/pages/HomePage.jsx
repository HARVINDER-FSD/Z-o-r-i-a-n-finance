import { Link } from 'react-router-dom'
import LoanCalculator from '../components/LoanCalculator'

export default function HomePage() {
  return (
    <div>
      {/* Promo Banner */}
      <aside className="bg-slate-900 text-white text-xs sm:text-sm py-2.5 px-4 text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center justify-center bg-blue-600/30 text-blue-200 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
            Zero Origination Fee
          </span>
          <span className="text-slate-300">
            Fast, transparent consumer financing with zero hidden origination fees.
          </span>
          <a className="underline text-blue-300 hover:text-white transition-colors ml-1 font-semibold hidden md:inline">
            View Current APRs →
          </a>
        </div>
      </aside>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100/70 border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                SMARTER BORROWING FOR AMERICANS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Loans Designed <br className="hidden sm:inline" />
                Around <span className="text-blue-600">Your Needs</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Experience modern personal and auto financing with complete visibility. Compare fixed rates, enjoy no prepayment penalties, and secure funding without impacting your credit score to check.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
                >
                  Check Your Eligibility
                  <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                </Link>
              </div>

              {/* Trust Markers */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-xl">lock</span>
                  <span>256-Bit Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-xl">speed</span>
                  <span>Soft Credit Check Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-xl">check_circle</span>
                  <span>Transparent Fixed Terms</span>
                </div>
              </div>
            </div>

            {/* Right Column: Calculator */}
            <div className="lg:col-span-5">
              <LoanCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">shield</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Secure Process</h3>
                <p className="text-xs text-slate-500 mt-1">Bank-grade 256-bit SSL encryption to safeguard all your identity details.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">timer</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Fast Under 3-Min App</h3>
                <p className="text-xs text-slate-500 mt-1">Check pre-qualified rates without impacting your credit score rating.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">price_check</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Flexible Options</h3>
                <p className="text-xs text-slate-500 mt-1">$0 prepayment penalties. Pay off early at any point with zero fees.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">US-Based Support</h3>
                <p className="text-xs text-slate-500 mt-1">Real human loan officers ready to guide you Monday through Saturday.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Effortless Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              From Application to Funding in 3 Steps
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We have eliminated paperwork bottlenecks so you can access capital when you need it.
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white text-xl font-extrabold flex items-center justify-center mb-6 shadow-md ring-8 ring-slate-100">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Check Your Options</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Enter basic information to view customized terms and fixed rates tailored to your budget. Zero credit impact.
              </p>
              <span className="text-xs text-blue-600 font-semibold mt-auto flex items-center gap-1">
                Takes 2 minutes
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-extrabold flex items-center justify-center mb-6 shadow-md ring-8 ring-slate-100">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Verification</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Select your best offer and verify your employment or income through our fast, encrypted digital document portal.
              </p>
              <span className="text-xs text-blue-600 font-semibold mt-auto flex items-center gap-1">
                100% Paperless
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white text-xl font-extrabold flex items-center justify-center mb-6 shadow-md ring-8 ring-slate-100">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Move Forward with Funds</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                E-sign your loan agreement. Receive direct ACH disbursement to your bank account as soon as the next business day.
              </p>
              <span className="text-xs text-emerald-600 font-semibold mt-auto flex items-center gap-1">
                Fast ACH Transfer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Tailored Solutions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Find the Right Financing Option
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md mt-2 md:mt-0">
              Competitive rates designed for life's milestones, expected upgrades, and unexpected moments.
            </p>
          </div>

          {/* 4 Loan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Auto Loans */}
            <Link
              to="/contact"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-blue-600"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center material-symbols-outlined">
                    directions_car
                  </span>
                  <span className="text-xs font-extrabold bg-blue-100 text-blue-600 px-2.5 py-1 rounded-full">
                    From 5.99% APR
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Auto Loans
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-3">New, Used & Refinancing</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Drive away with budget-friendly monthly payments and flexible borrowing amounts up to $75,000.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="text-xs text-slate-500 space-y-2 mb-5">
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    Max loan: $75,000
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    Terms up to 72 months
                  </li>
                </ul>
              </div>
            </Link>

            {/* Home Improvement */}
            <Link
              to="/contact"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-blue-600"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center material-symbols-outlined">
                    home_repair_service
                  </span>
                  <span className="text-xs font-extrabold bg-blue-100 text-blue-600 px-2.5 py-1 rounded-full">
                    From 6.49% APR
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Home Improvement
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-3">Kitchen, Roof & Renovations</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Fund remodels, repairs, or green upgrades without tapping into your precious home equity.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="text-xs text-slate-500 space-y-2 mb-5">
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    Max loan: $100,000
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    No home appraisal needed
                  </li>
                </ul>
              </div>
            </Link>

            {/* Emergency Loans */}
            <Link
              to="/contact"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-blue-600"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center material-symbols-outlined">
                    bolt
                  </span>
                  <span className="text-xs font-extrabold bg-blue-100 text-blue-600 px-2.5 py-1 rounded-full">
                    From 8.99% APR
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Emergency Loans
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-3">Medical & Urgent Repairs</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Immediate financial bridge when unexpected life events demand rapid next-day direct disbursement.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="text-xs text-slate-500 space-y-2 mb-5">
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    Next-day ACH funding
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    Simple online sign-off
                  </li>
                </ul>
              </div>
            </Link>

            {/* Debt Consolidation */}
            <Link
              to="/contact"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-blue-600"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center material-symbols-outlined">
                    account_balance
                  </span>
                  <span className="text-xs font-extrabold bg-blue-100 text-blue-600 px-2.5 py-1 rounded-full">
                    From 7.25% APR
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Debt Consolidation
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-3">Roll Multiple Cards Into One</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Combine high-interest credit card debt into one single, predictable, lower-cost monthly payment.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="text-xs text-slate-500 space-y-2 mb-5">
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    Terms up to 60 months
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                    Direct balance payoff avail
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
