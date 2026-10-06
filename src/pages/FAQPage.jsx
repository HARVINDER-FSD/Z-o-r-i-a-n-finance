import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FAQPage() {
  const [openItem, setOpenItem] = useState(0)

  const faqs = [
    {
      category: 'General Questions',
      items: [
        {
          q: 'What is Zorian Loan Finance?',
          a: 'Zorian Loan Finance is a consumer lending platform providing fast, transparent personal and auto financing solutions with fixed rates, no prepayment penalties, and streamlined digital application processes.',
        },
        {
          q: 'How does Zorian differ from traditional banks?',
          a: 'We focus on speed, transparency, and consumer empowerment. Our digital-first process, fixed terms, zero hidden fees, and no credit score impact for pre-qualification set us apart.',
        },
        {
          q: 'Is my personal information secure?',
          a: 'Yes. We use 256-bit SSL encryption, maintain SOC 2 compliance, and never sell your data. All communications are secured with bank-grade security protocols.',
        },
      ],
    },
    {
      category: 'Application & Eligibility',
      items: [
        {
          q: 'What are the eligibility requirements?',
          a: 'You must be 18+, a U.S. resident, and have a valid income source. We accept W-2 income, self-employment, gig work, and retirement income.',
        },
        {
          q: 'Will checking my rate hurt my credit score?',
          a: 'No. Our pre-qualification process uses a soft credit inquiry, which does not impact your credit score.',
        },
        {
          q: 'How long does the application take?',
          a: 'Our initial application typically takes 2-3 minutes. Full verification and approval may take 24-48 hours.',
        },
      ],
    },
    {
      category: 'Rates & Terms',
      items: [
        {
          q: 'What interest rates do you offer?',
          a: 'Our rates range from 5.99% to 8.99% APR depending on loan type, term length, and credit profile. All rates are fixed for the life of the loan.',
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No. We charge zero origination fees, prepayment penalties, or late fees. What you see is what you pay.',
        },
        {
          q: 'Can I pay off my loan early?',
          a: 'Absolutely. We offer zero prepayment penalties, so you can pay off your loan at any time without additional costs.',
        },
      ],
    },
    {
      category: 'Funding & Disbursement',
      items: [
        {
          q: 'How quickly will I receive my funds?',
          a: 'For approved loans, funds typically arrive via direct deposit within 1-2 business days of final approval.',
        },
        {
          q: 'What is the funding process?',
          a: 'After approval, you receive a final loan agreement to e-sign. Once signed, funds are sent directly to your bank account via ACH transfer.',
        },
        {
          q: 'Can I request direct payoff to creditors?',
          a: 'Yes. For debt consolidation loans, we can send funds directly to your creditors on your behalf if you provide written instructions.',
        },
      ],
    },
    {
      category: 'Loan Management',
      items: [
        {
          q: 'How do I make payments?',
          a: 'Payments are automatically deducted from your bank account on your payment due date each month. You can adjust payment methods anytime in your online portal.',
        },
        {
          q: 'Can I change my payment date?',
          a: 'Yes. You can request to change your payment date or payment frequency through your online account dashboard.',
        },
        {
          q: 'What happens if I miss a payment?',
          a: 'We encourage on-time payments. If you miss a payment, contact us immediately. Late fees are not charged, but interest continues to accrue per your loan agreement.',
        },
      ],
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs mb-6">
            <span className="material-symbols-outlined text-[18px]">help</span>
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Find Your Answers
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Browse our comprehensive FAQ to understand our loan products, application process, rates, and more.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md"
            >
              Still Have Questions?
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {faqs.map((category, categoryIdx) => (
            <div key={categoryIdx}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{category.category}</h2>

              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition"
                  >
                    <button
                      onClick={() => setOpenItem(openItem === `${categoryIdx}-${itemIdx}` ? null : `${categoryIdx}-${itemIdx}`)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                    >
                      <span className="text-left font-semibold text-slate-900">{item.q}</span>
                      <span
                        className={`material-symbols-outlined transition-transform duration-200 text-slate-600 ${
                          openItem === `${categoryIdx}-${itemIdx}` ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    {openItem === `${categoryIdx}-${itemIdx}` && (
                      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-600 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Check your personalized rates in under 3 minutes without impacting your credit score.
          </p>
          <Link
            to="/auto-loans"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-blue-600 font-bold hover:bg-slate-100 transition-all shadow-lg"
          >
            Check Your Eligibility Today
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
