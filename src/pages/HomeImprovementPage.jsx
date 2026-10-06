import { Link } from 'react-router-dom'

export default function HomeImprovementPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              HOME IMPROVEMENT LOANS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Transform Your Home With Confidence
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Finance your renovation, repair, or green upgrade projects with flexible terms and competitive rates. No home equity required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
              >
                Check Eligibility
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition-all"
              >
                View All Loans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <span className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center material-symbols-outlined text-2xl mb-4 inline-block">
                home
              </span>
              <h3 className="font-bold text-slate-900 mb-2">Up to $100,000</h3>
              <p className="text-sm text-slate-600">
                Borrow up to $100,000 for any home improvement project without home equity requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <span className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center material-symbols-outlined text-2xl mb-4 inline-block">
                rate_review
              </span>
              <h3 className="font-bold text-slate-900 mb-2">From 6.49% APR</h3>
              <p className="text-sm text-slate-600">
                Competitive rates with fixed terms up to 60 months for predictable monthly payments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <span className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center material-symbols-outlined text-2xl mb-4 inline-block">
                assignment
              </span>
              <h3 className="font-bold text-slate-900 mb-2">100% Online Process</h3>
              <p className="text-sm text-slate-600">
                Complete application in minutes. No home appraisal needed. Direct deposit to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligible Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Eligible Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Kitchen Remodeling',
              'Bathroom Renovation',
              'Roof Replacement',
              'HVAC Installation',
              'Window Replacement',
              'Solar Panel Installation',
              'Deck & Patio',
              'Flooring Upgrade',
            ].map((project) => (
              <div key={project} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                <span className="material-symbols-outlined text-blue-600 text-2xl">check_circle</span>
                <span className="font-semibold text-slate-900">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
