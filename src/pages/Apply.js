import React, { useState } from 'react';
import './Apply.css';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  loanType: '',
  loanAmount: '',
  loanTerm: '',
  agreeTerms: false,
};

function Apply() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = (currentStep) => {
    const nextErrors = {};

    if (currentStep === 1) {
      if (!form.fullName.trim()) {
        nextErrors.fullName = 'Full name is required.';
      } else if (form.fullName.trim().length < 2) {
        nextErrors.fullName = 'Please enter a valid full name.';
      }

      if (!form.email.trim()) {
        nextErrors.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        nextErrors.email = 'Please enter a valid email address.';
      }

      const digits = form.phone.replace(/\D/g, '');
      if (!form.phone.trim()) {
        nextErrors.phone = 'Phone number is required.';
      } else if (digits.length < 10) {
        nextErrors.phone = 'Please enter a valid phone number (min 10 digits).';
      }
    }

    if (currentStep === 2) {
      if (!form.loanType) {
        nextErrors.loanType = 'Please select a loan type.';
      }
      if (!form.loanAmount) {
        nextErrors.loanAmount = 'Loan amount is required.';
      } else if (Number(form.loanAmount) <= 0) {
        nextErrors.loanAmount = 'Loan amount must be greater than 0.';
      }
      if (!form.loanTerm) {
        nextErrors.loanTerm = 'Loan term is required.';
      } else if (Number(form.loanTerm) <= 0) {
        nextErrors.loanTerm = 'Loan term must be greater than 0.';
      }
    }

    if (currentStep === 4 && !form.agreeTerms) {
      nextErrors.agreeTerms = 'You must agree to the terms and conditions.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;

    if (step < 4) {
      setStep(step + 1);
      return;
    }

    // Build a clean, formatted payload for submission.
    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      loanType: form.loanType,
      loanAmount: Number(form.loanAmount),
      loanAmountFormatted: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(Number(form.loanAmount)),
      loanTerm: Number(form.loanTerm),
      loanTermFormatted: `${Number(form.loanTerm)} months`,
      agreedToTerms: form.agreeTerms,
      submittedAt: new Date().toISOString(),
    };

    setSubmitted(payload);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const restart = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(null);
    setStep(1);
  };

  if (submitted) {
    return (
      <div className="apply-page">
        <section className="apply-hero">
          <div className="container">
            <h1>Application Submitted</h1>
            <p>Thank you, {submitted.fullName}. We have received your application.</p>
          </div>
        </section>
        <section className="apply-section">
          <div className="apply-container">
            <div className="form-card card">
              <h2>Submitted Details</h2>
              <div className="review-box">
                <div className="review-row">
                  <span>Full Name</span>
                  <strong>{submitted.fullName}</strong>
                </div>
                <div className="review-row">
                  <span>Email</span>
                  <strong>{submitted.email}</strong>
                </div>
                <div className="review-row">
                  <span>Phone</span>
                  <strong>{submitted.phone}</strong>
                </div>
                <div className="review-row">
                  <span>Loan Type</span>
                  <strong>{submitted.loanType}</strong>
                </div>
                <div className="review-row">
                  <span>Loan Amount</span>
                  <strong>{submitted.loanAmountFormatted}</strong>
                </div>
                <div className="review-row">
                  <span>Loan Term</span>
                  <strong>{submitted.loanTermFormatted}</strong>
                </div>
              </div>
              <div className="form-buttons">
                <button className="btn-primary" onClick={restart}>
                  Start New Application
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
          {/* Progress */}
          <div className="progress-bar">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`progress-step ${s <= step ? 'active' : ''}`}>
                <div className="step-number">{s < step ? '✓' : s}</div>
                <span className="step-label">
                  {s === 1 && 'Personal'}
                  {s === 2 && 'Loan'}
                  {s === 3 && 'Docs'}
                  {s === 4 && 'Review'}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="form-card card">
            {step === 1 && (
              <div className="form-step">
                <h2>Personal Information</h2>

                <label className="field">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'input-error' : ''}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </label>

                <label className="field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </label>

                <label className="field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Loan Information</h2>

                <label className="field">
                  <select
                    name="loanType"
                    value={form.loanType}
                    onChange={handleChange}
                    className={errors.loanType ? 'input-error' : ''}
                  >
                    <option value="">Select Loan Type</option>
                    <option>Auto Loans</option>
                    <option>Personal Loans</option>
                    <option>Home Improvement</option>
                  </select>
                  {errors.loanType && <span className="error-text">{errors.loanType}</span>}
                </label>

                <label className="field">
                  <input
                    type="number"
                    name="loanAmount"
                    placeholder="Loan Amount"
                    min="0"
                    value={form.loanAmount}
                    onChange={handleChange}
                    className={errors.loanAmount ? 'input-error' : ''}
                  />
                  {errors.loanAmount && <span className="error-text">{errors.loanAmount}</span>}
                </label>

                <label className="field">
                  <input
                    type="number"
                    name="loanTerm"
                    placeholder="Loan Term (Months)"
                    min="0"
                    value={form.loanTerm}
                    onChange={handleChange}
                    className={errors.loanTerm ? 'input-error' : ''}
                  />
                  {errors.loanTerm && <span className="error-text">{errors.loanTerm}</span>}
                </label>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Documents</h2>
                <div className="upload-area">
                  <p>📄 Upload Photo ID</p>
                </div>
                <div className="upload-area">
                  <p>📄 Upload Proof of Income</p>
                </div>
                <div className="upload-area">
                  <p>📄 Upload Proof of Address</p>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="form-step">
                <h2>Review & Submit</h2>
                <div className="review-box">
                  <div className="review-row">
                    <span>Full Name</span>
                    <strong>{form.fullName}</strong>
                  </div>
                  <div className="review-row">
                    <span>Email</span>
                    <strong>{form.email}</strong>
                  </div>
                  <div className="review-row">
                    <span>Phone</span>
                    <strong>{form.phone}</strong>
                  </div>
                  <div className="review-row">
                    <span>Loan Type</span>
                    <strong>{form.loanType}</strong>
                  </div>
                  <div className="review-row">
                    <span>Loan Amount</span>
                    <strong>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 2,
                      }).format(Number(form.loanAmount) || 0)}
                    </strong>
                  </div>
                  <div className="review-row">
                    <span>Loan Term</span>
                    <strong>{Number(form.loanTerm) || 0} months</strong>
                  </div>
                </div>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={form.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>I agree to the terms and conditions</span>
                </label>
                {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}
              </div>
            )}

            {/* Buttons */}
            <div className="form-buttons">
              <button className="btn-secondary" onClick={handleBack} disabled={step === 1}>
                Back
              </button>
              <button className="btn-primary" onClick={handleNext}>
                {step === 4 ? 'Submit Application' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apply;
