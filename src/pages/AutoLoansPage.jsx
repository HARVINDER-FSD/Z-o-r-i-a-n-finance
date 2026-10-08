import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AutoLoansPage() {
  const [vehiclePrice, setVehiclePrice] = useState(25000)
  const [downPayment, setDownPayment] = useState(5000)
  const [term, setTerm] = useState(60)
  const [apr, setApr] = useState(5.99)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  // Loan Application Form State
  const [loanFormData, setLoanFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })
  const [loanSubmitted, setLoanSubmitted] = useState(false)
  const [loanLoading, setLoanLoading] = useState(false)
  const [loanError, setLoanError] = useState('')

  useEffect(() => {
    const principal = vehiclePrice - downPayment
    const monthlyRate = apr / 100 / 12
    const n = term

    if (monthlyRate === 0) {
      setMonthlyPayment((principal / term).toFixed(2))
    } else {
      const payment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
        (Math.pow(1 + monthlyRate, n) - 1)
      setMonthlyPayment(payment.toFixed(2))
    }
  }, [vehiclePrice, downPayment, term, apr])

  const principal = vehiclePrice - downPayment
  const totalInterest = (monthlyPayment * term - principal).toFixed(2)
  const totalRepayment = (parseFloat(monthlyPayment) * term).toFixed(2)

  const handleLoanFormChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoanFormData({
      ...loanFormData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleLoanSubmit = async (e) => {
    e.preventDefault()
    if (loanFormData.fullName && loanFormData.email && loanFormData.phone && loanFormData.consent) {
      setLoanLoading(true)
      setLoanError('')

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: 'support@zorianloanfinance.com',
            from: 'Zorian Loans <onboarding@resend.dev>',
            subject: `New Auto Loan Application from ${loanFormData.fullName}`,
            html: `
              <h2>New Auto Loan Application</h2>
              <p><strong>Name:</strong> ${loanFormData.fullName}</p>
              <p><strong>Email:</strong> ${loanFormData.email}</p>
              <p><strong>Phone:</strong> ${loanFormData.phone}</p>
              <p><strong>Message:</strong> ${loanFormData.message || 'No additional message'}</p>
              <h3>Loan Criteria</h3>
              <p><strong>Vehicle Price:</strong> $${vehiclePrice.toLocaleString()}</p>
              <p><strong>Down Payment:</strong> $${downPayment.toLocaleString()}</p>
              <p><strong>Loan Amount:</strong> $${principal.toLocaleString()}</p>
              <p><strong>Loan Term:</strong> ${term} months</p>
              <p><strong>APR:</strong> ${apr}%</p>
              <p><strong>Monthly Payment:</strong> $${parseFloat(monthlyPayment).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
              <p><strong>Total Interest:</strong> $${parseFloat(totalInterest).toLocaleString()}</p>
              <p><strong>Total Repayment:</strong> $${parseFloat(totalRepayment).toLocaleString()}</p>
            `
          })
        })

        const data = await response.json()

        if (response.ok && data.id) {
          setLoanSubmitted(true)
          setLoanLoading(false)
          setTimeout(() => setLoanSubmitted(false), 5000)
          setLoanFormData({
            fullName: '',
            email: '',
            phone: '',
            message: '',
            consent: false,
          })
        } else {
          setLoanError('Failed to submit application. Please try again.')
          setLoanLoading(false)
        }
      } catch (err) {
        console.error('Error:', err)
        setLoanError('Failed to submit application. Please try again.')
        setLoanLoading(false)
      }
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                AUTO FINANCING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                Finance Your Next Vehicle With Confidence
              </h1>

              <p className="font-lg text-slate-600 max-w-xl">
                Explore financing options for a new or used vehicle through a simple, secure online experience designed around clarity and direct lender terms.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#calculator-section"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-md"
                >
                  Calculate Your Payment
                  <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-slate-600 font-semibold">
                <span className="inline-flex items-center gap-1.5 text-emerald-600">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span> New & Used Vehicles
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span> Flexible Terms
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span> Simple Online Process
                </span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 h-[380px] lg:h-[420px]">
                <img
                  alt="Modern electric vehicle in studio lighting"
                  className="w-full h-full object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ00oJAUlq0__BsD6P2OtvoN3ozmoZjpGZARHfdyscByo9l0EXxHj3sQwVR31TItH1MwW9vOJ-8t1SN3ZNQsT1LmkR9cgmSf5CmJnFErFVvuuu5ynkB1b8xTUIu2ueSpggHZURqRiiu_bnHe0UcvU1YyGSWR6qs4qRTUs29aO8vNVDqayV0aeG90FKq-pSQIJTGYyqyM5Igm769xe36uA5w5K96XofdvN_mYP0jJiKZT9M2dWrUTKFwQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 right-4 sm:right-auto bg-white p-5 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Estimated Payment</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 font-bold text-xs">5.99% APR</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 flex items-baseline gap-1">
                  $398 <span className="text-sm font-semibold text-slate-500">/mo</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Based on $25k financed, 60 mos @ 5.99% APR example.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'directions_car', title: 'New & Used Vehicles', desc: 'Explore financing options across thousands of franchise dealerships, certified pre-owned lots, or eligible private sellers nationwide.' },
              { icon: 'calendar_month', title: 'Flexible Terms', desc: 'Select amortization windows from 36 to 72 months to customize monthly out-of-pocket payments to match your exact household budget.' },
              { icon: 'bolt', title: 'Simple Application', desc: 'Complete key eligibility questions online in under 3 minutes with zero physical paperwork and no initial credit score impact.' },
              { icon: 'visibility', title: 'Clear Information', desc: 'Zero hidden origination fees, guaranteed prepayment autonomy, and full APR amortization schedules disclosed upfront before signing.' },
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">{benefit.icon}</span>
                  </div>
                  <span className="text-xs text-blue-600 font-bold tracking-wider uppercase">{`0${idx + 1}`} {benefit.title.split(' ')[0].toUpperCase()}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Interactive Estimator</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Estimate Your Auto Loan Payment
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Adjust the vehicle price, down payment, and loan term to see an estimated monthly payment and comprehensive cost breakdown.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-200 min-h-[500px]">
            {/* Left: Inputs */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col gap-8">
              {/* Vehicle Price */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-900">Vehicle Price</label>
                  <div className="px-4 py-1.5 rounded-lg bg-slate-100 font-bold text-slate-900">
                    ${vehiclePrice.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>$5,000</span>
                  <span>$50,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-900">Down Payment & Trade-In</label>
                  <div className="px-4 py-1.5 rounded-lg bg-slate-100 font-bold text-slate-900">
                    ${downPayment.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30000"
                  step="500"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>$0</span>
                  <span>$15,000</span>
                  <span>$30,000</span>
                </div>
              </div>

              {/* Term Buttons */}
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

              {/* APR Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-slate-900">Estimated APR (%)</label>
                  <span className="text-xs text-slate-500">Example rate</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="25"
                    step="0.1"
                    value={apr}
                    onChange={(e) => setApr(parseFloat(e.target.value))}
                    className="w-full h-12 px-4 rounded-lg bg-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="absolute right-4 top-3 text-slate-500 font-bold">% APR</span>
                </div>
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
                    Competitive Tier
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
                    <span className="text-slate-400">Estimated Amount Financed</span>
                    <span className="font-bold">${principal.toLocaleString()}</span>
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
                    <span className="text-slate-400">Estimated Origination Fee</span>
                    <span className="font-bold text-emerald-400">$0.00 Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6">
                <Link
                  to="/contact"
                  className="w-full h-12 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
                >
                  Check My Eligibility
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <p className="text-xs text-slate-400 leading-relaxed opacity-75">
                  Calculator results are estimates. Actual APR may vary based on credit history and vehicle specifics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Application Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Submit Your Application</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Apply for Your Auto Loan
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Submit your loan criteria and we'll connect with you to finalize your application with custom pre-qualification rates.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
              <form onSubmit={handleLoanSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={loanFormData.fullName}
                    onChange={handleLoanFormChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={loanFormData.email}
                      onChange={handleLoanFormChange}
                      placeholder="you@example.com"
                      required
                      className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={loanFormData.phone}
                      onChange={handleLoanFormChange}
                      placeholder="(555) 000-0000"
                      required
                      className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                </div>

                {/* Loan Criteria Display */}
                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-4">Your Loan Criteria</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-1">Vehicle Price</p>
                      <p className="font-bold text-slate-900">${vehiclePrice.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-1">Down Payment</p>
                      <p className="font-bold text-slate-900">${downPayment.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-1">Loan Amount</p>
                      <p className="font-bold text-slate-900">${principal.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-1">Loan Term</p>
                      <p className="font-bold text-slate-900">{term} Months</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-1">APR</p>
                      <p className="font-bold text-slate-900">{apr}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-1">Monthly Payment</p>
                      <p className="font-bold text-blue-600">${parseFloat(monthlyPayment).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={loanFormData.message}
                    onChange={handleLoanFormChange}
                    placeholder="Tell us anything else about your situation or preferences..."
                    maxLength="500"
                    rows="3"
                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
                  ></textarea>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={loanFormData.consent}
                    onChange={handleLoanFormChange}
                    required
                    className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-600"
                  />
                  <label className="text-sm text-slate-600 leading-relaxed">
                    I acknowledge receipt of Zorian Loan Finance's Consumer Privacy Notice and consent to be contacted regarding my loan application.
                  </label>
                </div>

                {/* Security Banner */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50">
                  <span className="material-symbols-outlined text-blue-600 text-[20px] shrink-0 mt-0.5">lock</span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Security Alert:</strong> Please do not submit confidential information such as full Social Security Numbers or bank account details via this form.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loanLoading}
                  className="w-full h-12 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loanLoading ? 'Submitting Application...' : 'Submit Loan Application'}</span>
                  <span className={`material-symbols-outlined text-[18px] ${loanLoading ? 'animate-spin' : ''}`}>
                    {loanLoading ? 'hourglass_empty' : 'send'}
                  </span>
                </button>

                {/* Error Message */}
                {loanError && (
                  <div className="p-4 rounded-lg bg-red-50">
                    <p className="text-sm text-red-600">{loanError}</p>
                  </div>
                )}
              </form>

              {/* Success Message */}
              {loanSubmitted && (
                <div className="p-8 bg-emerald-50 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Application Submitted Successfully!</h3>
                  <p className="mt-2 text-slate-600 max-w-md mx-auto">
                    Thank you for submitting your auto loan application. Our team will review your criteria and contact you within 24 hours with personalized rates and next steps.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
