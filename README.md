# Contest Platform — Run & Setup Guide

This README explains how to run the project locally (Frontend + Backend), what environment variables are required, and common troubleshooting steps (Stripe, MongoDB, CSP, fonts). It complements the shorter project README already in the repo.

## Quick overview
- Frontend: React + Vite (located in `Frontend/`)
- Backend: Node.js + Express (located in `Backend/`)
- Database: MongoDB (Atlas or local)
- Payments: Stripe Checkout (test mode)

---

## Prerequisites
- Node.js (LTS v18+ recommended)
- npm (comes with Node)
- MongoDB (either local `mongod` or a MongoDB Atlas cluster)
- A Stripe account (for test keys)

---

## Environment variables
Create `.env` files in the `Backend/` and `Frontend/` directories (not committed to git). Below are the variables the app expects and example values.

### Backend (`Backend/.env`)

```
# Stripe secret key (server-side). Must start with sk_test_... for test mode
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Stripe publishable key (server-side). Must start with pk_test_... for test mode
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# MongoDB connection string. Example (Atlas):
# mongodb+srv://<user>:<password>@cluster0.mongodb.net/<Mention Your Collections name>?retryWrites=true&w=majority
MONGODB_URI=mongodb+srv://username:password@yourcluster.mongodb.net/contest?retryWrites=true&w=majority

# Frontend URL for success/cancel redirects (default: http://localhost:5173)
FRONTEND_URL=http://localhost:5173

# Server port (default 5000)
PORT=5000
```

Notes:
- Use the production/test key appropriate for your Stripe account environment. For local testing, `sk_test_...` keys are required.
- The MongoDB database used by this project in examples and README is `contest`. If your URI refers to a different DB name (for example `Todo`), update it or accept that the data will be stored in that database name.

### Frontend (`Frontend/.env`)

```
# Stripe publishable key (client-side). Must start with pk_test_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# API URL for backend
VITE_API_URL=http://localhost:5000
```

Notes:
- Vite only exposes env variables prefixed with `VITE_` to client code.
- After creating or changing Frontend/.env you must restart the Vite dev server for values to take effect.

---



## Development: run the app locally

1) Clone the repository (only needed once):

```powershell
git clone <your-repo-url> 
cd Stripe-Integration
```

2) Open two PowerShell terminals. In the first terminal start the backend server:

```powershell
cd Backend
npm install
npm run start
```

- This uses the start script to run the server (in development you may prefer `npm run dev` to use nodemon).
- Watch the console: you should see `MongoDB connected successfully` and `Server is running on port 5000` if env vars are correct.

3) In the second terminal install frontend dependencies (first time only) and start the Vite dev server:

```powershell
cd Frontend
npm install
npm run dev
```

- Open http://localhost:5173 in your browser to view the app.

Notes:
- If you change `Frontend/.env`, restart the Vite server so `import.meta.env` picks up updates.
- For local development you can use test Stripe keys (pk_test_/sk_test_...). Ensure publishable and secret keys are from the same Stripe account.

---

## Test the Stripe checkout flow (local)
1. On the Home page, enter an email and accept the consent checkbox.
2. Click "Pay $10 to Enter". That posts to `POST /api/create-checkout-session` on the backend.
3. Backend creates a Stripe Checkout session using the server secret key and returns a session id (starts with `cs_test_...`).
4. Frontend will call Stripe.js redirect to the hosted Checkout page.
5. Use Stripe test card `4242 4242 4242 4242` with any future expiry and CVC.
6. After payment, Stripe redirects to `/thank-you?session_id=...`. The frontend then POSTs `/api/payment-success` with the session id so the backend can finalize and increment the user's entry count in Mongo.

Important:
- Backend must use the secret key (`STRIPE_SECRET_KEY`) to create sessions. The public key on the frontend is only used by Stripe.js.
- Both secret/publishable keys must belong to the same Stripe account (test keys for local flow).

---

## Troubleshooting common issues

1) "401 Unauthorized" from Stripe on the payment_pages/init request
- Typically caused by using a wrong publishable key in the client or key/account mismatch.
- Verify `Frontend/.env` `VITE_STRIPE_PUBLISHABLE_KEY` is present and starts with `pk_test_...`.
- Ensure you restarted the Vite dev server after editing `Frontend/.env`.
- Confirm the backend used the correct secret key when creating the session (`STRIPE_SECRET_KEY` starting with `sk_test_...`).
- Check Stripe Dashboard → Developers → Logs to see the exact error message from Stripe.

2) Session id returned, but `payment-success` does not increment entries
- The backend logs the Stripe session retrieval and the fields used. Check backend console for messages such as `Resolved email from session:` and `User updated/created:`.
- If `session.metadata.email` is missing, the backend attempts `session.customer_email` as a fallback. If both are missing, the backend logs an error and does not increment.
- Ensure `create-checkout-session` sets `customer_email` and/or `metadata.email` (the code does set both).
- Check MongoDB logs for write errors or unique constraint conflicts.

3) MongoDB connection issues
- Ensure `MONGODB_URI` is correct and reachable. If using Atlas, allow your IP or use `0.0.0.0/0` for testing (not recommended for production).
- Check backend console for `MongoDB connection error:` details.

4) CSP errors blocking Google Fonts or Stripe resources
- The project was modified to use local fonts. If you still see CSP errors for Stripe, ensure your Content-Security-Policy allows `https://js.stripe.com` for scripts and resources used by Stripe.

5) "Cannot find module './en'" in Stripe client bundle
- Typically caused by the Stripe client script being partially blocked by CSP or a network error. Confirm `https://js.stripe.com` is allowed and fully loads.

6) Vite env variable not available in client (undefined)
- Make sure the variable name begins with `VITE_` and restart the Vite server after changing `.env`.
- You can log `import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY` in `src/main.jsx` to verify it's available at app startup.

---

## Production notes
- Never store `STRIPE_SECRET_KEY` in client code or commit .env to source control.
- Use Stripe webhooks in production to securely confirm payments server-side (webhook verifies events using webhook secret and is the recommended way to react to payment events).
- For production, use environment variables provided by your hosting provider or a secret manager.

---

## Optional: Add webhook handler (recommended for production)
- Stripe webhooks are more reliable than redirect-based confirmation because some flows (e.g., asynchronous payment methods) may not finalize immediately.
- Typical flow: create checkout session → customer completes payment → Stripe sends `checkout.session.completed` to your webhook URL → your server verifies the event using the webhook signing secret and updates DB.

---
