import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoanCalculator() {
  const navigate = useNavigate()
  const [loanAmount, setLoanAmount] = useState(20000)
  const [term, setTerm] = useState(48)
  const [purpose, setPurpose] = useState('auto')
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  // APR rates by purpose
  const ratesByPurpose = {
    auto: 5.99,
    home: 6.49,
    emergency: 8.99,
    debt: 7.25,
  }

  // Calculate monthly payment
  useEffect(() => {
    const apr = ratesByPurpose[purpose]
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
  }, [loanAmount, term, purpose])

  const totalInterest = (monthlyPayment * term - loanAmount).toFixed(2)
  const totalRepayment = (parseFloat(monthlyPayment) * term).toFixed(2)

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8" data-calculator>
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Estimate Monthly Payment</h2>
          <p className="text-xs text-slate-500">Live rate estimate • No obligation</p>
        </div>
        <span className="bg-blue-50 text-blue-600 p-2 rounded-xl material-symbols-outlined">
          calculate
        </span>
      </div>

      {/* Form Inputs */}
      <div className="space-y-5">
        {/* Loan Amount Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Borrow Amount
            </label>
            <span className="text-2xl font-extrabold text-blue-600">
              ${loanAmount.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="2000"
            max="75000"
            step="500"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
            <span>$2,000</span>
            <span>$75,000</span>
          </div>
        </div>

        {/* Purpose Select */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Loan Purpose
          </label>
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full text-sm font-semibold rounded-lg border border-slate-300 p-2.5 focus:border-blue-600 focus:ring-blue-600"
          >
            <option value="auto">Auto Financing (5.99% est. APR)</option>
            <option value="home">Home Renovation (6.49% est. APR)</option>
            <option value="debt">Debt Consolidation (7.25% est. APR)</option>
            <option value="emergency">Personal / Emergency (8.99% est. APR)</option>
          </select>
        </div>

        {/* Term Select */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Term Length
          </label>
          <select
            value={term}
            onChange={(e) => setTerm(parseInt(e.target.value))}
            className="w-full text-sm font-semibold rounded-lg border border-slate-300 p-2.5 focus:border-blue-600 focus:ring-blue-600"
          >
            <option value="24">24 Months (2 Years)</option>
            <option value="36">36 Months (3 Years)</option>
            <option value="48">48 Months (4 Years)</option>
            <option value="60">60 Months (5 Years)</option>
          </select>
        </div>

        {/* Result Box */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
          <span className="text-xs uppercase tracking-wide text-slate-500 font-bold block mb-1">
            Estimated Payment
          </span>
          <div className="text-3xl font-extrabold text-slate-900">
            ${parseFloat(monthlyPayment).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            <span className="text-sm font-semibold text-slate-500">/mo</span>
          </div>
          <span className="text-[11px] text-slate-400 block mt-1">
            Rate fixed for term. Excludes optional credit insurance.
          </span>
        </div>

        {/* Breakdown */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between text-slate-700">
              <span>Total Interest Over {term} Months:</span>
              <span className="font-bold">${parseFloat(totalInterest).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>Total Repayment Amount:</span>
              <span className="font-bold">${parseFloat(totalRepayment).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            // Store loan details in sessionStorage
            sessionStorage.setItem('loanDetails', JSON.stringify({
              loanAmount,
              term,
              purpose,
              apr: ratesByPurpose[purpose],
              monthlyPayment,
            }))
            navigate('/contact')
          }}
          className="w-full inline-flex items-center justify-center py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition duration-150"
        >
          Get Started With This Rate
        </button>
      </div>
    </div>
  )
}
