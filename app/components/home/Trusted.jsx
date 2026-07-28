'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Trusted = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Trusted
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Trusted by{' '}
              <span className="text-blue-600 dark:text-blue-400">5,000+</span>
              <br />
              Happy Customers
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Jennings appetite disposed me an at subjects an. To no indulgence 
              diminution so discovered mr apartments. Are off under folly death 
              wrote cause her way spite. Plan upon yet way get cold spot its week. 
              Almost do am or limits hearts. Resolve parties but why she shewing. 
              She sang know now how nay cold real case.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  100% Client Satisfaction
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  World Class Worker
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center space-x-8 mb-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">875+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Completed Projects</p>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">5K+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            >
              <span>Talk To A Consultant</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/home/trusted.jpg"
                alt="Trusted by Happy Customers"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-blue-600 dark:bg-blue-500 px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-3xl font-bold text-white">875+</p>
                    <p className="text-xs text-blue-100">Completed Projects</p>
                  </div>
                  <div className="w-px h-12 bg-blue-400/50"></div>
                  <div>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                    </div>
                    <p className="text-xs text-blue-100">5.0 Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;