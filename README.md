# MindMate Backend

Quick backend scaffold for MindMate (Express + MongoDB).

Features:
- User auth (register/login) with JWT + bcrypt
- Package model (price as cents)
- Stripe Checkout session endpoint + webhook stub
- Security: helmet, rate limiter, cors
- Dockerfile + docker-compose for local testing

## Setup (local)
1. Copy `.env.example` to `.env` and set values.
2. Install dependencies:
   ```
   npm install
   ```
3. Run locally:
   ```
   npm run dev
   ```

## Deploy
- Build Docker image and run with your cloud provider or use the supplied docker-compose for local testing.
- Provide MONGO_URI (MongoDB Atlas recommended) and STRIPE_SECRET_KEY in production.

## Notes & next steps I can do for you (pick what you want, bro):
- Add email verification flow with Nodemailer.
- Add password reset (OTP via email).
- Hook frontend register form to `/api/auth/register`.
- Add admin dashboard routes and role-based permissions.
- Integrate webhook verification and record payments in DB.
- Connect to a real SMTP (SendGrid/Mailgun) and Stripe keys.
- Harden security (CSP, helmet fine-tuning, CORS whitelist).
