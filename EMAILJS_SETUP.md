# EmailJS Setup Guide

## Complete Setup Instructions

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up and verify your email
3. Login to dashboard

### Step 2: Get Your Public Key
1. Go to **Dashboard** → **Settings** (top right)
2. Copy your **Public Key** (starts with `pk_`)
3. Example: `pk_test1234567890abcdef`

### Step 3: Create Email Service
1. Go to **Email Services** (left sidebar)
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Connect your email account
5. Copy the **Service ID** (looks like: `service_xxxxx`)
6. Example: `service_test1234567890`

### Step 4: Create Email Template
1. Go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Copy this template:

```
Subject: New Loan Application from {{from_name}}

Hello,

New loan inquiry received:

NAME: {{from_name}}
EMAIL: {{from_email}}
PHONE: {{phone}}
REASON: {{reason}}
MESSAGE: {{message}}

LOAN DETAILS:
Purpose: {{loan_purpose}}
Amount: {{loan_amount}}
Term: {{loan_term}} months
APR: {{apr}}%
Monthly Payment: {{monthly_payment}}

---
Please review and follow up accordingly.
```

4. Save the template
5. Copy the **Template ID** (looks like: `template_xxxxx`)
6. Example: `template_test1234567890`

### Step 5: Update Your React App

**Option A: Using .env file (Recommended)**

1. Open `.env` file in project root:
```
VITE_EMAILJS_PUBLIC_KEY=pk_YOUR_PUBLIC_KEY_HERE
VITE_EMAILJS_SERVICE_ID=service_YOUR_SERVICE_ID_HERE
VITE_EMAILJS_TEMPLATE_ID=template_YOUR_TEMPLATE_ID_HERE
```

2. Replace with YOUR actual values:
```
VITE_EMAILJS_PUBLIC_KEY=pk_test1234567890abcdef
VITE_EMAILJS_SERVICE_ID=service_test1234567890
VITE_EMAILJS_TEMPLATE_ID=template_test1234567890
```

3. In your code, use:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
```

**Option B: Direct in Code**

Update files:
- `src/pages/ContactPage.jsx` - Line with `emailjs.init()`
- `src/pages/AutoLoansPage.jsx` - Line with `emailjs.init()`

Replace:
- `pk_YOUR_PUBLIC_KEY_HERE` → Your Public Key
- `service_YOUR_SERVICE_ID_HERE` → Your Service ID
- `template_YOUR_TEMPLATE_ID_HERE` → Your Template ID

### Step 6: Test Email Sending

1. Run: `npm run dev`
2. Go to Contact page or any loan page
3. Fill the form and click "Submit" or "Apply Now"
4. Check your email to verify it worked

### Step 7: Verify Email Receiving

1. Go back to EmailJS Dashboard
2. Click **Email Services** → Your Gmail service
3. Check "Email Activity" tab
4. You should see "Sent" emails listed

---

## Troubleshooting

### "Email not sending"
- Check if Public Key is correct
- Verify Service ID exists in your account
- Verify Template ID exists in your account
- Check browser console for errors (F12)

### "Invalid Service ID"
- Make sure you copied the full Service ID (includes "service_" prefix)
- Service must be enabled (check in Email Services)

### "Gmail not receiving emails"
- Check Spam/Promotions folder
- Add noreply@emailjs.com to contacts
- Check Gmail "Less secure app access" setting

### "CORS Error"
- This is normal, EmailJS handles it
- Check Network tab in DevTools
- Should show 200 OK response

---

## Email Template Variables (Available in forms)

When you send emails through the form, these variables are available:

**Contact Form:**
- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email
- `{{phone}}` - Phone number
- `{{reason}}` - Reason for contact
- `{{message}}` - Additional message
- `{{loan_purpose}}` - Loan type (if applicable)
- `{{loan_amount}}` - Loan amount (if applicable)
- `{{loan_term}}` - Loan term in months (if applicable)
- `{{apr}}` - APR rate (if applicable)
- `{{monthly_payment}}` - Monthly payment (if applicable)

---

## Security Notes

✅ **Good practices:**
- Store credentials in `.env` file
- Add `.env` to `.gitignore`
- Never commit `.env` to git
- Use environment variables for deployment

❌ **Avoid:**
- Hardcoding credentials in code
- Committing `.env` to repository
- Sharing your Public Key publicly

---

## Deployment to Vercel

1. Push code to GitHub (without `.env`)
2. Go to Vercel → New Project
3. Connect GitHub repo
4. Go to **Settings** → **Environment Variables**
5. Add these 3 variables:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
6. Deploy!

---

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
