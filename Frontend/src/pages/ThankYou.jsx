import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    
    if (!sessionId) {
      setError('No session ID found. Redirecting to home page.');
      setTimeout(() => navigate('/'), 3000);
      return;
    }

    // Process the successful payment
    const processPayment = async () => {
      try {
        await axios.post('https://stripe-integration-7p2f.onrender.com/api/payment-success', {
          sessionId: sessionId
        });
        setLoading(false);
      } catch (err) {
        console.error('Error processing payment:', err);
        setError('Failed to process payment. Please contact support.');
        setLoading(false);
      }
    };

    processPayment();
  }, [searchParams, navigate]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-teal mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-soft shadow-subtle p-6 border border-accent-gold border-opacity-20 text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-playfair font-semibold text-red-600 mb-4">
            Error
          </h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary-teal text-gray-800 cursor-pointer underline px-6 py-3 rounded-soft font-medium hover:bg-opacity-90 transition-all duration-200 shadow-subtle"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center">
        <div className="card max-w-2xl mx-auto">
          <div className="text-6xl text-green-500 mb-6">✓</div>
          <h1 className="text-4xl font-playfair font-bold text-primary-teal mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Your entry has been recorded.
          </p>
          <p className="text-gray-600 mb-8">
            You will receive a confirmation email shortly with further instructions.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary-teal text-gray-700 underline px-6 py-3 rounded-soft font-medium hover:bg-opacity-90 transition-all duration-200 shadow-subtle"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
