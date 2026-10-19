import React, { useState } from 'react';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Your name is required.';
    } else if (form.name.trim().length < 2) {
      nextErrors.name = 'Please enter a valid name.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Your email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.subject.trim()) {
      nextErrors.subject = 'Subject is required.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (form.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build a clean, formatted payload for submission.
    const payload = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    setSubmitted(payload);
  };

  const restart = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(null);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have questions? Our team is here to help 24/7.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid grid-3">
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>✉️</div>
              <h3 style={{color: '#111827', marginBottom: '8px'}}>Email</h3>
              <a href="mailto:support@zorianloanfinance.com" style={{color: '#667eea', textDecoration: 'none'}}>
                support@zorianloanfinance.com
              </a>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>📞</div>
              <h3 style={{color: '#111827', marginBottom: '8px'}}>Phone</h3>
              <a href="tel:+1234567890" style={{color: '#667eea', textDecoration: 'none'}}>
                1-800-LOANS-NOW
              </a>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>📍</div>
              <h3 style={{color: '#111827', marginBottom: '8px'}}>Office</h3>
              <p style={{color: '#6b7280', fontSize: '14px', margin: 0}}>
                8326 Jamieson Ave<br/>
                Northridge, CA 91325
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-card card">
            <h2 style={{fontSize: '28px', marginBottom: '24px', color: '#111827'}}>Send us a Message</h2>

            {submitted ? (
              <div className="contact-success">
                <p>
                  Thanks, <strong>{submitted.name}</strong>! Your message has been sent successfully.
                  We&apos;ll get back to you at <strong>{submitted.email}</strong>.
                </p>
                <div className="review-row">
                  <span>Subject</span>
                  <strong>{submitted.subject}</strong>
                </div>
                <div className="review-row">
                  <span>Message</span>
                  <strong>{submitted.message}</strong>
                </div>
                <button className="btn-primary" onClick={restart} style={{width: '100%', marginTop: '16px'}}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-row">
                  <div className="field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="field" style={{marginBottom: '16px'}}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'input-error' : ''}
                    style={{width: '100%'}}
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="field" style={{marginBottom: '16px'}}>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                    style={{width: '100%'}}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
