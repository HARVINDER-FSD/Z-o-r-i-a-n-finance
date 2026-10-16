import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: 'How long does it take to get approved?', a: 'Most applications are approved in minutes. Funds can arrive as soon as the next business day.' },
    { q: 'What credit score do I need?', a: 'We work with a wide range of credit profiles. We consider all applicants.' },
    { q: 'What documents do I need?', a: 'You\'ll need a photo ID, proof of income, and proof of address.' },
    { q: 'Can I pay off my loan early?', a: 'Yes! There are no prepayment penalties. Pay anytime without extra charges.' },
    { q: 'How much can I borrow?', a: 'Loan amounts vary by type. Auto loans up to $75K, Home improvement up to $100K.' },
    { q: 'Are there hidden fees?', a: 'No. We believe in complete transparency. All fees are disclosed upfront.' },
    { q: 'How is interest rate determined?', a: 'Your rate is based on credit score, income, and loan type. Rates start at 5.99% APR.' },
    { q: 'Can I apply online?', a: 'Yes! Our entire application process is online and mobile-friendly.' },
  ];

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our loans and application.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item card">
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our support team is available 24/7.</p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px'}}>
            <a href="mailto:support@zorianloanfinance.com" className="btn-secondary">Email Us</a>
            <a href="tel:+1234567890" className="btn-secondary">Call Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
