import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-subtle border-b border-accent-gold border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl sm:text-2xl font-playfair font-bold text-primary-teal">
              Contest Platform
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:text-primary-teal focus:outline-none focus:ring-2 focus:ring-primary-teal"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className={`hidden sm:flex space-x-4 sm:space-x-8`}> 
            <Link
              to="/"
              className={`px-2 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-primary-teal border-b-2 border-primary-teal'
                  : 'text-gray-700 hover:text-primary-teal'
              }`}
            >
              Home
            </Link>
            <Link
              to="/rules"
              className={`px-2 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 ${
                location.pathname === '/rules'
                  ? 'text-primary-teal border-b-2 border-primary-teal'
                  : 'text-gray-700 hover:text-primary-teal'
              }`}
            >
              Contest Rules
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={`px-2 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/'
                    ? 'text-primary-teal'
                    : 'text-gray-700 hover:text-primary-teal'
                }`}
              >
                Home
              </Link>
              <Link
                to="/rules"
                onClick={() => setOpen(false)}
                className={`px-2 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/rules'
                    ? 'text-primary-teal'
                    : 'text-gray-700 hover:text-primary-teal'
                }`}
              >
                Contest Rules
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
