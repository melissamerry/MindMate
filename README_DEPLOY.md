## Quick deploy checklist (today)
- Create MongoDB Atlas cluster and copy connection string to MONGO_URI.
- Create Stripe account and get SECRET key; paste into STRIPE_SECRET_KEY.
- Configure CLIENT_URL to your frontend URL.
- Build Docker image: `docker build -t mindmate-api .`
- Run: `docker run -p 5000:5000 --env-file .env mindmate-api`
