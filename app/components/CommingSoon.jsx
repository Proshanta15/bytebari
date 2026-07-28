'use client';
import { Construction, Clock, Send, Mail } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full mb-8">
          <Construction className="w-4 h-4" />
          <span className="text-sm font-medium">Under Construction</span>
        </div>

        {/* Logo */}
        <div className="text-5xl font-bold mb-4">
          <span className="text-blue-600 dark:text-blue-400">Byte</span>
          <span className="text-gray-900 dark:text-white">Bari</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          We're Coming Soon!
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Our website is currently under construction. 
          We're building something amazing for you.
        </p>

        {/* Status */}
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-8">
          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            Launching Soon
          </span>
        </div>

        {/* Subscribe */}
        <form className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <span>Notify Me</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} ByteBari. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;