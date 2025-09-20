const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  entriesCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);


app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Contest Entry',
              description: 'Entry fee for skill-based contest',
            },
            unit_amount: 1000, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/`,
      customer_email: email,
      metadata: {
        email: email,
      },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.post('/api/payment-success', async (req, res) => {
  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID is required' });
    }

    console.log('payment-success called with sessionId:', sessionId);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log('Stripe session retrieved:', session.id, 'payment_status:', session.payment_status);

    if (session.payment_status === 'paid') {
      // Try metadata.email first, fall back to customer_email
      const email = (session.metadata && session.metadata.email) || session.customer_email;
      console.log('Resolved email from session:', email);

      if (!email) {
        console.error('No email found in session metadata or customer_email. Cannot record entry.');
        return res.status(400).json({ error: 'No email found for session' });
      }

      const user = await User.findOneAndUpdate(
        { email: email },
        { $inc: { entriesCount: 1 } },
        { upsert: true, new: true }
      );

      console.log('User updated/created:', user);

      res.json({ 
        success: true, 
        message: 'Payment successful and entry recorded',
        user: user 
      });
    } else {
      console.warn('Payment not completed for session:', sessionId, 'status:', session.payment_status);
      res.status(400).json({ error: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Error processing payment success:', error);
    res.status(500).json({ error: 'Failed to process payment success' });
  }
});

app.get('/api/user/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.json({ entriesCount: 0 });
    }
    
    res.json({ entriesCount: user.entriesCount });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
