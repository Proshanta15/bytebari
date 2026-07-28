'use client';
import Link from 'next/link';
import { FaHome, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const ServiceBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30"></div>

      <div className="container-custom relative z-10 py-15 md:py-20 lg:py-25">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 mb-6 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 px-4 py-2">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300 tracking-wider">
              OUR SERVICES
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Our <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-3 text-sm md:text-base">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaHome className="w-4 h-4" />
              <span>HOME</span>
            </Link>
            <FaChevronRight className="w-3 h-3 text-gray-400 dark:text-gray-600" />
            <span className="text-gray-400 dark:text-gray-500">PAGES</span>
            <FaChevronRight className="w-3 h-3 text-gray-400 dark:text-gray-600" />
            <span className="font-semibold text-blue-600 dark:text-blue-400">SERVICES</span>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-16 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rotate-45"></div>
            <div className="w-16 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 group"
            >
              <span>Get Started</span>
              <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;