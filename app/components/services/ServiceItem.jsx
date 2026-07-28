'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaCode, 
  FaChartLine, 
  FaShieldAlt, 
  FaBriefcase, 
  FaNetworkWired, 
  FaFire,
  FaArrowRight,
  FaHeadset,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';

const ServiceItem = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: 'IT Design',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond attachment her partiality.',
      icon: <FaCode className="w-8 h-8" />,
      link: '/services/details'
    },
    {
      id: 2,
      title: 'Analytic Solutions',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond attachment her partiality.',
      icon: <FaChartLine className="w-8 h-8" />,
      link: '/services/details'
    },
    {
      id: 3,
      title: 'Risk Management',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond attachment her partiality.',
      icon: <FaShieldAlt className="w-8 h-8" />,
      link: '/services/details'
    },
    {
      id: 4,
      title: 'Business Planning',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond attachment her partiality.',
      icon: <FaBriefcase className="w-8 h-8" />,
      link: '/services/details'
    },
    {
      id: 5,
      title: 'Infrastructure Plan',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond attachment her partiality.',
      icon: <FaNetworkWired className="w-8 h-8" />,
      link: '/services/details'
    },
    {
      id: 6,
      title: 'Firewall Advance',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond attachment her partiality.',
      icon: <FaFire className="w-8 h-8" />,
      link: '/services/details'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Our Services
            </span>
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We <span className="text-blue-600 dark:text-blue-400">Provide</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            We offer comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-200 dark:text-gray-700 group-hover:text-blue-200 dark:group-hover:text-blue-800 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="p-6 md:p-8">
                {/* Icon with Background */}
                <div className="relative mb-5">
                  <div className="absolute -top-2 -left-2 w-14 h-14 bg-blue-600/10 dark:bg-blue-400/10 group-hover:bg-blue-600/20 transition-all duration-300"></div>
                  <div className="relative inline-flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Read More Link */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                >
                  <span>Read More</span>
                  <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceItem;