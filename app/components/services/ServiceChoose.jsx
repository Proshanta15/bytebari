'use client';
import Link from 'next/link';
import { 
  FaHeadset, 
  FaLightbulb, 
  FaRocket, 
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaChartLine,
  FaCogs
} from 'react-icons/fa';

const ServiceChoose = () => {
  const features = [
    {
      id: 1,
      title: '24/7 Customer Support',
      description: 'Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no.',
      icon: <FaHeadset className="w-6 h-6" />,
      highlight: 'Helpline +880 1705-944400'
    },
    {
      id: 2,
      title: 'Smart Solutions',
      description: 'Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no.',
      icon: <FaLightbulb className="w-6 h-6" />,
      highlight: 'Start Now'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: <FaRocket className="w-5 h-5" /> },
    { value: '100%', label: 'Client Satisfaction', icon: <FaUsers className="w-5 h-5" /> },
    { value: '24/7', label: 'Support Available', icon: <FaClock className="w-5 h-5" /> },
    { value: '50+', label: 'Expert Team', icon: <FaCogs className="w-5 h-5" /> }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900/10 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Why Choose Us */}
          <div>
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Why Choose Us
              </span>
              <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            </div>
            
            {/* Heading */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Serving Outsourced IT Services 
              <span className="block text-blue-600 dark:text-blue-400 mt-1">
                For Your Business
              </span>
            </h3>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket 
              season age her uneasy saw. Discourse unwilling am no described dejection incommode no.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="group">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-600 transition-all duration-300">
                      <span className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
                        {feature.icon}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {feature.title === '24/7 Customer Support' && (
                        <div className="mt-3 flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium">
                          <FaPhone className="w-4 h-4" />
                          <span>{feature.highlight}</span>
                        </div>
                      )}
                      
                      {feature.title === 'Smart Solutions' && (
                        <Link 
                          href="/contact" 
                          className="inline-flex items-center space-x-2 mt-3 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                        >
                          <span>{feature.highlight}</span>
                          <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats & Features Grid */}
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900/30">
                  <FaCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Quality Assurance
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We ensure top-notch quality in every project we deliver
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-purple-100 dark:bg-purple-900/30">
                  <FaChartLine className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Scalable Solutions
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our solutions grow with your business needs
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center space-x-2 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 group"
              >
                <span>Get Started Today</span>
                <FaRocket className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceChoose;