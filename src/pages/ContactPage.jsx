import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [loanDetails, setLoanDetails] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Load loan details from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem('loanDetails')
    if (stored) {
      setLoanDetails(JSON.parse(stored))
      // Auto-set reason based on loan purpose
      const details = JSON.parse(stored)
      const reasonMap = {
        auto: 'auto-loan',
        home: 'home-improvement',
        emergency: 'emergency-loan',
        debt: 'debt-consolidation',
      }
      setFormData(prev => ({
        ...prev,
        reason: reasonMap[details.purpose] || 'general'
      }))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.fullName && formData.email && formData.phone && formData.reason && formData.message && formData.consent) {
      setLoading(true)
      setError('')

      try {
        // Send directly to Formspree via HTML form
        const form = document.createElement('form')
        form.method = 'POST'
        form.action = 'https://formspree.io/f/xppqpkyj'
        form.style.display = 'none'

        const fields = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          message: formData.message,
        }

        // Add loan details if available
        if (loanDetails) {
          fields.loanPurpose = loanDetails.purpose
          fields.loanAmount = loanDetails.loanAmount
          fields.loanTerm = loanDetails.term
          fields.loanAPR = loanDetails.apr
          fields.monthlyPayment = loanDetails.monthlyPayment
        }

        Object.keys(fields).forEach(key => {
          const input = document.createElement('input')
          input.type = 'hidden'
          input.name = key
          input.value = fields[key]
          form.appendChild(input)
        })

        document.body.appendChild(form)
        
        // Submit form
        form.submit()

        // Success state
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          reason: '',
          message: '',
          consent: false,
        })
        sessionStorage.removeItem('loanDetails')

        // Remove form
        document.body.removeChild(form)
      } catch (err) {
        console.error('Error:', err)
        setError('Failed to send message. Please try again.')
        setLoading(false)
      }
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs mb-6">
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            CONTACT ZORIAN
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            How Can We Help?
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about our loan options, application process, or available resources? We're here to provide clarity and personal assistance.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md"
            >
              Submit Inquiry
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-white border border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-all"
            >
              Browse FAQs
              <span className="material-symbols-outlined text-[18px]">help_outline</span>
            </a>
          </div>
        </div>
      </section>

      {/* Three Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Written Inquiries</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Email Us Directly</h3>
              <p className="mt-2 font-semibold text-blue-600 break-all">quickadvancecash01@gmail.com</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Send detailed inquiries 24/7. Typically reviewed and resolved within one business day by loan specialists.
              </p>
            </div>
            <div className="mt-6 pt-4">
              <a
                href="mailto:quickadvancecash01@gmail.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors"
              >
                <span>Email Support</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Headquarters */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Corporate Presence</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Visit Headquarters</h3>
              <p className="mt-2 font-semibold text-slate-900">8326 Jamieson Ave, Northridge, CA</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                California licensed consumer lending operations, compliance desk, and executive underwriting headquarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 flex flex-col gap-6" id="inquiry-form">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Inquiry Form</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-1">Send Us a Message</h2>
                <p className="mt-2 text-slate-600">
                  Tell us what you need help with and our specialized support team will review your inquiry with institutional care.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Loan Details Display */}
                {loanDetails && (
                  <div className="p-6 rounded-xl bg-blue-50 border border-blue-200">
                    <h3 className="font-bold text-slate-900 mb-4">Your Loan Inquiry</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 font-semibold mb-1">Loan Purpose</p>
                        <p className="font-bold text-slate-900 capitalize">
                          {loanDetails.purpose === 'auto' && 'Auto Financing'}
                          {loanDetails.purpose === 'home' && 'Home Renovation'}
                          {loanDetails.purpose === 'debt' && 'Debt Consolidation'}
                          {loanDetails.purpose === 'emergency' && 'Personal/Emergency'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold mb-1">Loan Amount</p>
                        <p className="font-bold text-slate-900">${loanDetails.loanAmount?.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold mb-1">Term</p>
                        <p className="font-bold text-slate-900">{loanDetails.term} Months</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold mb-1">Est. APR</p>
                        <p className="font-bold text-slate-900">{loanDetails.apr}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold mb-1">Monthly Payment</p>
                        <p className="font-bold text-blue-600">${parseFloat(loanDetails.monthlyPayment)?.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      required
                      className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Reason for Contact <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  >
                    <option value="">Select an inquiry category</option>
                    <option value="general">General Lending Question</option>
                    <option value="loan-terms">Loan Terms & Rates Inquiry</option>
                    <option value="application">Application & Underwriting Status</option>
                    <option value="servicing">Payment & Servicing Schedule</option>
                    <option value="tech">Online Account or Technical Issue</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide specific details regarding your inquiry..."
                    required
                    maxLength="1000"
                    rows="5"
                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-y"
                  ></textarea>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-600"
                  />
                  <label className="text-sm text-slate-600 leading-relaxed">
                    I acknowledge receipt of Zorian Loan Finance's Consumer Privacy Notice and consent to receive communications
                    electronically regarding my inquiry.
                  </label>
                </div>

                {/* Security Banner */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50">
                  <span className="material-symbols-outlined text-blue-600 text-[20px] shrink-0 mt-0.5">lock</span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Security Alert:</strong> Please do not submit confidential financial
                    credentials, such as full Social Security Numbers, PINs, or bank account routing numbers, via this form.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Sending...' : 'Send Secure Message'}</span>
                  <span className={`material-symbols-outlined text-[18px] ${loading ? 'animate-spin' : ''}`}>
                    {loading ? 'hourglass_empty' : 'send'}
                  </span>
                </button>

                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-lg bg-red-50">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-6 p-8 bg-emerald-50 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Message Sent Successfully</h3>
                  <p className="mt-2 text-slate-600 max-w-md mx-auto">
                    Thank you for contacting Zorian Loan Finance. Your reference tracking number is <strong>#ZLF-84920</strong>.
                    A certified loan representative will follow up promptly.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* What Happens Next */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Our Protocol</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-6">What Happens Next?</h3>

              <div className="space-y-6">
                {[
                  { num: '01', title: 'Message Received & Encrypted', desc: 'Your inquiry is immediately cataloged in our SOC-2 compliant ticketing system.' },
                  { num: '02', title: 'Specialist File Review', desc: 'Our team investigates your specific question, pulling relevant application parameters.' },
                  { num: '03', title: 'Verified Personalized Response', desc: 'You receive an actionable reply via email without marketing spam.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{step.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="pb-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">Support Desk Hours</h4>
                    <p className="text-sm text-slate-600">Northridge Operating Center (PST)</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-emerald-600">Available Now</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between py-1">
                  <span>Monday – Friday:</span>
                  <span className="font-semibold text-slate-900">8:00 AM – 6:00 PM PST</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Saturday – Sunday:</span>
                  <span className="text-slate-500">Closed</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <p className="font-bold mb-2">Need Immediate Pre-Qualification?</p>
              <p className="text-sm text-blue-100 mb-4">Check custom APRs in under 3 minutes without hurting your credit score.</p>
              <Link to="/auto-loans" className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-white text-blue-600 font-bold hover:bg-slate-100 transition-all">
                Pre-Qualify Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
