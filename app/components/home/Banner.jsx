'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, ChevronRight, CheckCircle } from 'lucide-react';

const Banner = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[90vh] pt-7 md:pt-0 flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
     

      {/* Decorative Orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/10 blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium">Innovating Tomorrow's Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Creating a better
              <span className="block text-blue-600 dark:text-blue-400 mt-1">
                IT solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Affixed pretend account ten natural. Need eat week even yet that. 
              Incommode delighted he resolving sportsmen do in listening.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium  transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium  border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-green-100 dark:bg-green-900/30">
                  <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    (+880) 1705-944400
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Call for any question
                  </p>
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
              
              {/* Trust Badge */}
              <div className="hidden sm:flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 border-2 border-white dark:border-gray-800 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Trusted by 500+ companies
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Image Container with Shadow and Border */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/home/banner.png" // Replace with your image path
                  alt="IT Solutions Banner"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                 {/* Badge - Top Right (Inside Image Container) */}
                <div className="absolute top-4 right-4 animate-float bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm  px-4 py-2.5 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      100% Satisfaction
                    </span>
                  </div>
                </div>

                {/* Badge - Bottom Left (Inside Image Container) */}
                <div className="absolute bottom-4 left-4 animate-float bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm  px-4 py-2.5 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-7 h-7 border-2 border-white dark:border-gray-800 bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0"
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      +500 Clients
                    </span>
                  </div>
                </div>

                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative Elements Around Image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 dark:bg-blue-400/10 blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/20 dark:bg-purple-400/10 blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;