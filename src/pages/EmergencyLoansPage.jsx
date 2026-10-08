import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EmergencyLoansPage() {
  const navigate = useNavigate()
  const [loanAmount, setLoanAmount] = useState(10000)
  const [term, setTerm] = useState(36)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const apr = 8.99
  
  useEffect(() => {
    const monthlyRate = apr / 100 / 12
    const n = term

    if (monthlyRate === 0) {
      setMonthlyPayment((loanAmount / term).toFixed(2))
    } else {
      const payment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
        (Math.pow(1 + monthlyRate, n) - 1)
      setMonthlyPayment(payment.toFixed(2))
    }
  }, [loanAmount, term])

  const totalInterest = (monthlyPayment * term - loanAmount).toFixed(2)
  const totalRepayment = (parseFloat(monthlyPayment) * term).toFixed(2)

  const handleApply = () => {
    sessionStorage.setItem('loanDetails', JSON.stringify({
      loanAmount,
      term,
      purpose: 'emergency',
      apr,
      monthlyPayment,
    }))
    navigate('/contact')
  }

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
              <a
                href="#calculator-section"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all"
              >
                Calculate Your Payment
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
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

      {/* Emergency Loan Calculator */}
      <section id="calculator-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Quick Estimates</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Calculate Your Emergency Loan Payment
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              See your estimated monthly payment and total costs for your emergency loan.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-200 min-h-[500px]">
            {/* Left: Inputs */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col gap-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-900">Emergency Loan Amount</label>
                  <div className="px-4 py-1.5 rounded-lg bg-slate-100 font-bold text-slate-900">
                    ${loanAmount.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>$1,000</span>
                  <span>$25,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block font-bold text-slate-900 mb-3">Loan Term (Months)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[24, 36, 48, 60].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTerm(t)}
                      className={`py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                        term === t
                          ? 'bg-red-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {t} mo
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p className="font-semibold mb-2">Fixed APR: <span className="text-red-600 font-bold">{apr}%</span></p>
                <p className="text-xs">Funds available as soon as next business day. Rate varies by creditworthiness.</p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-6">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    Payment Projection
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                    Emergency Loan
                  </span>
                </div>
                <div className="mb-8">
                  <span className="text-slate-400 text-sm block mb-1">Estimated Monthly Payment</span>
                  <div className="text-5xl font-extrabold text-white flex items-baseline gap-2">
                    ${parseFloat(monthlyPayment).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    <span className="text-lg text-slate-400 font-normal">/mo</span>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="flex flex-col gap-3.5 py-6 border-t border-slate-700">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Loan Amount</span>
                    <span className="font-bold">${loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Estimated Total Interest</span>
                    <span className="font-bold">${parseFloat(totalInterest).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Total Repayment Amount</span>
                    <span className="font-bold">${parseFloat(totalRepayment).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Funding Timeline</span>
                    <span className="font-bold text-emerald-400">Next Business Day</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6">
                <button
                  onClick={handleApply}
                  className="w-full h-12 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-md"
                >
                  Apply Now
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <p className="text-xs text-slate-400 leading-relaxed opacity-75">
                  Estimates are for informational purposes. Actual terms vary by application.
                </p>
              </div>
            </div>
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
