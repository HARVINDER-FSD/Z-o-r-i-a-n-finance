import { Link } from 'react-router-dom'

export default function EmergencyLoansPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 font-semibold text-xs mb-6">
              <span className="material-symbols-outlined text-[16px]">emergency</span>
              EMERGENCY LOANS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Fast Funding When You Need It Most
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Get immediate financial support for unexpected emergencies. Next-day ACH funding with minimal paperwork and low friction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all"
              >
                Apply Now
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

      {/* Quick Stats */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">Next Day</div>
              <p className="text-slate-600">Fast ACH funding to your bank account</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">From 8.99%</div>
              <p className="text-slate-600">Competitive APR rates for emergency loans</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">Simple</div>
              <p className="text-slate-600">3-minute application • Zero paperwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">We Can Help With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'local_hospital', title: 'Medical Bills', desc: 'Cover unexpected medical expenses and treatments' },
              { icon: 'home_repair_service', title: 'Emergency Repairs', desc: 'Urgent home or vehicle repairs that cannot wait' },
              { icon: 'credit_card', title: 'Cash Flow Help', desc: 'Bridge unexpected financial gaps quickly' },
              { icon: 'school', title: 'Education Costs', desc: 'Last-minute tuition and education expenses' },
              { icon: 'moving', title: 'Relocation', desc: 'Cover urgent moving and relocation costs' },
              { icon: 'pets', title: 'Pet Care', desc: 'Unexpected veterinary and pet emergency care' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition">
                <span className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center material-symbols-outlined text-2xl mb-4 inline-block">
                  {item.icon}
                </span>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Wait. Get Funded Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Simple online application takes just 3 minutes. Funds typically arrive the next business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-red-600 font-bold hover:bg-slate-100 transition-all shadow-lg"
          >
            Start Your Emergency Loan Today
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
