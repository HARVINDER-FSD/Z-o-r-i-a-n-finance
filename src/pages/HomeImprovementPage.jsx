import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomeImprovementPage() {
  const navigate = useNavigate()
  const [loanAmount, setLoanAmount] = useState(30000)
  const [term, setTerm] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const apr = 6.49
  const ratesByPurpose = { home: 6.49 }

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
      purpose: 'home',
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
              <a
                href="#calculator-section"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
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

      {/* Home Improvement Loan Calculator */}
      <section id="calculator-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Calculate Your Savings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Estimate Your Home Improvement Loan Payment
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Adjust the project budget and loan term to see your estimated monthly payment and total costs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-200 min-h-[500px]">
            {/* Left: Inputs */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col gap-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-900">Project Budget</label>
                  <div className="px-4 py-1.5 rounded-lg bg-slate-100 font-bold text-slate-900">
                    ${loanAmount.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>$5,000</span>
                  <span>$50,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block font-bold text-slate-900 mb-3">Loan Term (Months)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[36, 48, 60, 72].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTerm(t)}
                      className={`py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                        term === t
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {t} mo
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p className="font-semibold mb-2">Fixed APR: <span className="text-blue-600 font-bold">{apr}%</span></p>
                <p className="text-xs">Rate is fixed for the life of the loan. Actual rate may vary based on creditworthiness.</p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-6">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    Payment Projection
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                    Home Improvement
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
                    <span className="text-slate-400">Project Budget</span>
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
                    <span className="text-slate-400">Origination Fee</span>
                    <span className="font-bold text-emerald-400">$0.00 Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6">
                <button
                  onClick={handleApply}
                  className="w-full h-12 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
                >
                  Apply Now
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <p className="text-xs text-slate-400 leading-relaxed opacity-75">
                  Calculator results are estimates. Actual rate may vary based on credit history and project details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
