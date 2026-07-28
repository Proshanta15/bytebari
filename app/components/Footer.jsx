'use client';
import Link from 'next/link';
import { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaSend,
  FaArrowRight
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t border-gray-800 dark:border-gray-800">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center text-2xl font-bold mb-4">
              <span className="text-blue-500">Byte</span>
              <span className="text-white">Bari</span>
            </Link>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Crafting the future of digital experiences with innovation and precision. 
              Turning complex ideas into intuitive interfaces. Focused on performance, 
              scalability, and pixel-perfect design.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2.5 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigate */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">_</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Pages
            </h4>
            <ul className="space-y-3">
              {['Terms', 'Privacy', 'Blogs', 'Documentation'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">_</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Let's Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Let's Connect
            </h4>
            
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:info@bytebari.com"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="p-1.5 bg-gray-800 group-hover:bg-blue-600 transition-colors">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </span>
                <span>info@bytebari.com</span>
              </a>
              <a 
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="p-1.5 bg-gray-800 group-hover:bg-blue-600 transition-colors">
                  <FaPhone className="w-3.5 h-3.5" />
                </span>
                <span>(+880) 1705-944400</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <span className="p-1.5 bg-gray-800">
                  <FaMapMarkerAlt className="w-3.5 h-3.5" />
                </span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-1">
                Subscribe to our newsletter
              </h4>
              <p className="text-sm text-gray-500">
                Get the latest updates and insights
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
          {isSubscribed && (
            <p className="text-sm text-green-400 mt-3 text-center md:text-left">
              ✅ Thanks for subscribing! We'll keep you updated.
            </p>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} ByteBari. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-gray-500 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;