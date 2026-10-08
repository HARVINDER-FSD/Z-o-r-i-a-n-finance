import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function DebtConsolidationPage() {
  const navigate = useNavigate()
  const [loanAmount, setLoanAmount] = useState(25000)
  const [term, setTerm] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const apr = 7.25

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
      purpose: 'debt',
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-600 font-semibold text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              DEBT CONSOLIDATION
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Simplify Your Debt Into One Payment
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Combine multiple high-interest credit cards into one fixed, predictable monthly payment. Lower your interest rate and pay off debt faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#calculator-section"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all"
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

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <span className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center material-symbols-outlined text-2xl mb-4 inline-block">
                trending_down
              </span>
              <h3 className="font-bold text-slate-900 mb-2">Lower Interest Rates</h3>
              <p className="text-sm text-slate-600">
                From 7.25% APR - much lower than typical credit card rates of 18-25%.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <span className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center material-symbols-outlined text-2xl mb-4 inline-block">
                check_circle
              </span>
              <h3 className="font-bold text-slate-900 mb-2">Simplified Payments</h3>
              <p className="text-sm text-slate-600">
                One predictable monthly payment instead of juggling multiple credit card bills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <span className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center material-symbols-outlined text-2xl mb-4 inline-block">
                calendar_today
              </span>
              <h3 className="font-bold text-slate-900 mb-2">Fixed Term</h3>
              <p className="text-sm text-slate-600">
                Know exactly when your debt will be paid off - typically 36-60 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Credit Cards vs. Consolidation Loan
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Feature</th>
                  <th className="px-6 py-3 text-center font-bold text-slate-900">Credit Cards</th>
                  <th className="px-6 py-3 text-center font-bold text-emerald-600">Zorian Consolidation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Interest Rate</td>
                  <td className="px-6 py-4 text-center text-slate-600">18-25% APR</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">From 7.25% APR</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Monthly Payment</td>
                  <td className="px-6 py-4 text-center text-slate-600">Varies / Unpredictable</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">Fixed & Predictable</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Payoff Timeline</td>
                  <td className="px-6 py-4 text-center text-slate-600">Unknown / Never</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">Fixed Term (36-60 mo)</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Credit Utilization</td>
                  <td className="px-6 py-4 text-center text-slate-600">High (negative impact)</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">Low (positive impact)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Prepayment Penalty</td>
                  <td className="px-6 py-4 text-center text-slate-600">Usually None</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">$0 Guaranteed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Debt Consolidation Calculator */}
      <section id="calculator-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">See Your Savings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Calculate Your Consolidation Payment
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Enter your total debt and see how much you could save with consolidation.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-200 min-h-[500px]">
            {/* Left: Inputs */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col gap-8">
              {/* Total Debt */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-900">Total Credit Card Debt</label>
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>$5,000</span>
                  <span>$50,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Payoff Term */}
              <div>
                <label className="block font-bold text-slate-900 mb-3">Payoff Term (Months)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[36, 48, 60, 72].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTerm(t)}
                      className={`py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                        term === t
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {t} mo
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p className="font-semibold mb-2">Fixed APR: <span className="text-emerald-600 font-bold">{apr}%</span></p>
                <p className="text-xs">Much lower than typical credit card rates. Rate varies based on creditworthiness.</p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-6">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    Payment Projection
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold">
                    Debt Consolidation
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
                    <span className="text-slate-400">Total Debt Amount</span>
                    <span className="font-bold">${loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Total Interest Paid</span>
                    <span className="font-bold">${parseFloat(totalInterest).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Total Repayment</span>
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
                  className="w-full h-12 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-md"
                >
                  Apply Now
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <p className="text-xs text-slate-400 leading-relaxed opacity-75">
                  Actual rates vary. Calculator shows estimates only. Apply to see personalized rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Savings */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">See Your Potential Savings</h2>

          <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Scenario: You have $15,000 in credit card debt at 20% APR</p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Credit Cards (20% APR)</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">$348/mo</p>
                    <p className="text-xs text-red-600 mt-1">Total paid: $20,880</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Our Consolidation (7.25% APR)</p>
                    <p className="text-2xl font-bold text-emerald-600 mt-1">$267/mo</p>
                    <p className="text-xs text-emerald-600 mt-1">Total paid: $16,020</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm font-bold text-emerald-600">💰 You Save: $4,860 in interest!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Debt?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get your personalized consolidation estimate in under 3 minutes. No credit score impact.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-emerald-600 font-bold hover:bg-slate-100 transition-all shadow-lg"
          >
            Check Your Savings Today
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
