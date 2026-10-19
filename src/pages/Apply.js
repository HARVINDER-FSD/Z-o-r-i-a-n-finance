import React, { useState } from 'react';
import './Apply.css';

const LOAN_PURPOSES = [
  'Auto Loan',
  'Home Improvement',
  'Emergency Loan',
  'Debt Consolidation',
  'Personal Loan',
  'Other'
];

// Formspree endpoint (quickadvancecash@gmail.com account) — sara form data isi pe jata hai.
// Chaho to .env.local me REACT_APP_FORMSPREE_ENDPOINT se override kar sakte ho.
const FORMSPREE_ENDPOINT =
  process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xppqpkyj';

function Apply({ loanDraft }) {
  // Home page calculator se aayi values pehle se fill ho jati hain,
  // agar nahi aayi ho to user manually bhi daal sakta hai.
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    purpose: loanDraft?.purpose || '',
    amount: loanDraft?.amount ? String(loanDraft.amount) : '',
    term: loanDraft?.term ? String(loanDraft.term) : '',
    rate: loanDraft?.rate ? String(loanDraft.rate) : '',
    document: null
  });
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');
  // Home calculator se aaya hai ya nahi (summary dikhane ke liye)
  const [fromCalculator] = useState(Boolean(loanDraft));

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? (files[0] || null) : value
    }));
  };

  // Poora data (form + calculator ki details) company ke email pe bhejo
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const payload = new FormData();
    payload.append('_subject', `New Loan Application - ${form.fullName || 'Website Enquiry'}`);
    payload.append('Full Name', form.fullName || '-');
    payload.append('Email', form.email || '-');
    payload.append('Phone Number', form.phone || '-');
    payload.append('Loan Purpose', form.purpose || '-');
    payload.append(
      'Loan Amount',
      form.amount ? `$${Number(form.amount).toLocaleString('en-US')}` : '-'
    );
    payload.append('Loan Duration', form.term ? `${form.term} months` : '-');
    payload.append('Interest Rate', form.rate ? `${form.rate}% APR` : '-');
    if (form.document) {
      payload.append('Document', form.document);
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload
      });
      const result = await response.json();
      setStatus(result.ok ? 'sent' : 'error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="apply-page">
      <section className="apply-hero">
        <div className="container">
          <h1>Apply for a Loan</h1>
          <p>Fast, simple, and secure. Get approved in minutes.</p>
        </div>
      </section>

      <section className="apply-section">
        <div className="apply-container">
          <div className="form-card card">
            {status === 'sent' ? (
              <div className="form-success">
                <span className="material-symbols-outlined">check_circle</span>
                <h2>Thank you, {form.fullName || 'there'}!</h2>
                <p>Your application has been sent to our team. We will contact you shortly.</p>
              </div>
            ) : (
              <>
                {fromCalculator && (
                  <div className="estimate-summary">
                    <span className="material-symbols-outlined">calculate</span>
                    <div className="estimate-summary-body">
                      <span className="estimate-summary-label">Your selection from the home page calculator</span>
                      <div className="estimate-summary-values">
                        <span className="estimate-chip">{form.purpose || 'Loan Purpose'}</span>
                        <span className="estimate-chip">
                          ${form.amount ? Number(form.amount).toLocaleString('en-US') : '—'}
                        </span>
                        <span className="estimate-chip">
                          {form.term ? `${form.term} Months` : '— Months'}
                        </span>
                        <span className="estimate-chip">
                          {form.rate ? `${form.rate}% APR` : '— APR'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-error">
                    Something went wrong and your details could not be sent. Please try again.
                  </div>
                )}

                <form className="apply-form" onSubmit={handleSubmit}>
                  <h2>Your Details</h2>

                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                  />

                  <select name="purpose" value={form.purpose} onChange={handleChange}>
                    <option value="">Select Loan Purpose</option>
                    {LOAN_PURPOSES.map((purpose) => (
                      <option key={purpose} value={purpose}>{purpose}</option>
                    ))}
                  </select>

                  <input
                    name="amount"
                    type="number"
                    placeholder="Loan Amount"
                    value={form.amount}
                    onChange={handleChange}
                  />

                  <label className="upload-area">
                    <span className="material-symbols-outlined">upload_file</span>
                    <p>{form.document ? form.document.name : 'Upload Document (Optional)'}</p>
                    <input name="document" type="file" onChange={handleChange} />
                  </label>

                  <button
                    type="submit"
                    className="btn-primary submit-btn"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apply;
