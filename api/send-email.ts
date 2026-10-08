import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'Email service is not configured. Please contact support.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { to, from, subject, html } = req.body;

  // Validate required fields
  if (!subject || !html) {
    return res.status(400).json({ error: 'Missing required fields: subject and html' });
  }

  try {
    const data = await resend.emails.send({
      from: from || 'Zorian Loans <onboarding@resend.dev>',
      to: to || 'support@zorianloanfinance.com',
      subject: subject,
      html: html,
    });

    res.status(200).json(data);
  } catch (error: any) {
    console.error('Resend error:', error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
