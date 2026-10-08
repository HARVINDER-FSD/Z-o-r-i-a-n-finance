import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [loanDetails, setLoanDetails] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bankName: '',
    state: '',
    country: '',
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
    if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.bankName && formData.state && formData.country && formData.consent) {
      setLoading(true)
      setError('')

      try {
        // Send directly to Formspree via HTML form
        const form = document.createElement('form')
        form.method = 'POST'
        form.action = 'https://formspree.io/f/xppqpkyj'
        form.style.display = 'none'

        const fields = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          bankName: formData.bankName,
          state: formData.state,
          country: formData.country,
        }

        // Add loan details if available
        if (loanDetails) {
          fields.loanPurpose = loanDetails.purpose
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          bankName: '',
          state: '',
          country: '',
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
                        <p className="text-xs text-slate-500 font-semibold mb-1">Term</p>
                        <p className="font-bold text-slate-900">{loanDetails.term} Months</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold mb-1">Est. APR</p>
                        <p className="font-bold text-slate-900">{loanDetails.apr}%</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                      className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                      className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
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

                {/* State & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      required
                      className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                      required
                      className="w-full h-12 pl-4 pr-4 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
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
                    Thank you for contacting Zorian Loan Finance. A loan specialist will follow up shortly.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us Directly</h3>
              <p className="font-semibold text-blue-600 mb-4">quickadvancecash01@gmail.com</p>
              <a
                href="mailto:quickadvancecash01@gmail.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold"
              >
                <span>Send Email</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
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
