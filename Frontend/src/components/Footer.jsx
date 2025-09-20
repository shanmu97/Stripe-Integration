import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const socials = [
  { name: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
  { name: 'Meta', href: '#', icon: <FaFacebook /> },
  { name: 'Instagram', href: '#', icon: <FaInstagram /> },
  { name: 'Twitter/X', href: '#', icon: <FaTwitter /> },
  { name: 'TikTok', href: '#', icon: <SiTiktok /> },
  { name: 'YouTube', href: '#', icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="footer bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-3.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="text-base sm:text-lg font-playfair font-bold text-primary-teal">
              Contest Platform
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">© {new Date().getFullYear()} Contest Platform. All rights reserved.</p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex items-center justify-center space-x-3 md:space-x-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="social-icon inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-neutral-light-gray text-gray-700 hover:bg-primary-teal hover:text-white transition-colors duration-150 rounded-full"
                >
                  <span className="sr-only">{s.name}</span>
                  <span className="text-lg">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
