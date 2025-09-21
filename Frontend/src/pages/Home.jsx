import { useState } from 'react';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Home = () => {
  const [email, setEmail] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !consentChecked) {
      setError('Please fill in all required fields and accept the terms.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://stripe-integration-7p2f.onrender.com/api/create-checkout-session', {
        email: email
      });

      const { sessionId } = response.data;

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        setError('Failed to redirect to payment. Please try again.');
        console.error('Stripe error:', error);
      }
    } catch (err) {
      setError('Failed to process payment. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-teal mb-6">
          Enter the Contest
        </h1>
        <p className="text-xl text-gray-700 font-lora">
          Join our skill-based contest and showcase your talents!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-soft shadow-subtle p-6 border border-accent-gold border-opacity-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-soft focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="w-5 h-5 text-primary-teal bg-gray-100 border-gray-300 rounded focus:ring-primary-teal focus:ring-2 mt-1"
                  required
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  I confirm this is a skill-based contest. I am not using AI tools and will not use them during the contest. I understand that random checks may occur, and confirmed AI use may lead to disqualification and reversal of winnings.
                </span>
              </label>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-soft">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!consentChecked || !email || loading}
              className="bg-primary-teal bg-gray-600 cursor-po text-white px-6 py-4 rounded-soft font-medium hover:bg-opacity-90 transition-all duration-200 shadow-subtle w-full text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-opacity-100"
            >
              {loading ? 'Processing...' : 'Pay $10 to Enter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
