import React, { useState } from 'react';
import './Apply.css';

function Apply() {
  const [step, setStep] = useState(1);

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
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Loan Information</h2>
                <select>
                  <option>Select Loan Type</option>
                  <option>Auto Loans</option>
                  <option>Personal Loans</option>
                  <option>Home Improvement</option>
                </select>
                <input type="number" placeholder="Loan Amount" />
                <input type="number" placeholder="Loan Term (Months)" />
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
                  <p>Please review your information before submitting.</p>
                </div>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>I agree to the terms and conditions</span>
                </label>
              </div>
            )}

            {/* Buttons */}
            <div className="form-buttons">
              <button
                className="btn-secondary"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                Back
              </button>
              <button
                className="btn-primary"
                onClick={() => step < 4 ? setStep(step + 1) : alert('Application Submitted!')}
              >
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
