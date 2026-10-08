import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load env variables FIRST
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Resend - check API key exists
if (!process.env.RESEND_API_KEY) {
  console.error('❌ ERROR: RESEND_API_KEY not found in environment variables');
  console.error('Make sure RESEND_API_KEY is set in .env or .env.local');
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', apiKeyConfigured: !!process.env.RESEND_API_KEY });
});

// Forward to Formspree endpoint
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    
    console.log(`📧 Forwarding form submission to Formspree`);
    console.log(`📧 Form data:`, { 
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone
    });

    // Create FormData to send to Formspree
    const params = new URLSearchParams();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        params.append(key, formData[key]);
      }
    });

    const response = await fetch('https://formspree.io/f/xppqpkyj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (response.ok) {
      console.log('✅ Form submitted to Formspree successfully');
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      console.error('❌ Formspree error:', response.status);
      res.status(500).json({ error: 'Failed to submit form' });
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Submit form endpoint: http://localhost:${PORT}/api/submit-form`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});
