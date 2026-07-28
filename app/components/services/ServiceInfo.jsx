'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaCode, 
  FaChartLine, 
  FaShieldAlt, 
  FaBriefcase, 
  FaNetworkWired, 
  FaFire,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaClipboardList,
  FaPencilRuler,
  FaCodeBranch,
  FaRocket as FaLaunch
} from 'react-icons/fa';

const ServiceDetails = () => {
  const [activeService, setActiveService] = useState(1);

  // Sidebar services list with icons
  const services = [
    { id: 1, title: 'IT Design', icon: <FaCode className="w-4 h-4" /> },
    { id: 2, title: 'Analytic Solutions', icon: <FaChartLine className="w-4 h-4" /> },
    { id: 3, title: 'Risk Management', icon: <FaShieldAlt className="w-4 h-4" /> },
    { id: 4, title: 'Business Planning', icon: <FaBriefcase className="w-4 h-4" /> },
    { id: 5, title: 'Infrastructure Plan', icon: <FaNetworkWired className="w-4 h-4" /> },
    { id: 6, title: 'Firewall Advance', icon: <FaFire className="w-4 h-4" /> }
  ];

  // Complete service details for each service
  const serviceDetailsMap = {
    1: {
      title: 'IT Design',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond attachment her partiality. As extremity apartments of everything on conviction. Mimis own continue journey entirely. Bed biggest journals quickly do. That shy am an on walking. One knew formal view my. Greatly hearted has who believe. Drift allow green. Them used blush event had fifty.',
      features: [
        'Custom IT solutions tailored to your business',
        'User-centric design and seamless integration',
        'Scalable architecture for future growth',
        '24/7 support and maintenance'
      ],
      image: '/home/IT.webp'
    },
    2: {
      title: 'Analytic Solutions',
      description: 'Discover data-driven insights that transform decision-making. Our analytic solutions harness the power of big data, machine learning, and predictive modeling to uncover opportunities and optimize performance. From dashboard design to advanced analytics, we empower your business with actionable intelligence.',
      features: [
        'Real-time data processing and visualization',
        'Predictive analytics and trend forecasting',
        'Custom dashboards and reporting tools',
        'Integration with existing business systems'
      ],
      image: '/home/Analytic.jpg'
    },
    3: {
      title: 'Risk Management',
      description: 'Proactively identify, assess, and mitigate risks with our comprehensive risk management solutions. We combine industry best practices with cutting-edge technology to protect your assets, ensure compliance, and build resilience against uncertainties.',
      features: [
        'Risk assessment and mitigation strategies',
        'Compliance monitoring and reporting',
        'Incident response and recovery planning',
        'Continuous monitoring and improvement'
      ],
      image: '/home/risk.jpg'
    },
    4: {
      title: 'Business Planning',
      description: 'Strategic business planning is the foundation of sustainable growth. We help you define clear goals, align resources, and create actionable roadmaps that drive success. Our experts collaborate with you to develop plans that are both ambitious and achievable.',
      features: [
        'Market analysis and opportunity identification',
        'Strategic goal setting and KPI definition',
        'Resource allocation and budgeting',
        'Performance tracking and adjustment'
      ],
      image: '/home/business.jpg'
    },
    5: {
      title: 'Infrastructure Plan',
      description: 'Build a robust, scalable, and secure IT infrastructure that supports your business now and in the future. Our infrastructure planning services cover network design, cloud migration, data center optimization, and disaster recovery.',
      features: [
        'Network architecture and security design',
        'Cloud migration strategy and execution',
        'Data center optimization and management',
        'Business continuity and disaster recovery'
      ],
      image: '/home/infrastruktura.png'
    },
    6: {
      title: 'Firewall Advance',
      description: 'Protect your network with advanced firewall solutions that go beyond traditional perimeter defenses. We deploy next-generation firewalls with intrusion prevention, application control, and threat intelligence to keep your data safe from evolving cyber threats.',
      features: [
        'Next-generation firewall deployment',
        'Intrusion prevention and detection',
        'Application control and visibility',
        'Threat intelligence integration'
      ],
      image: '/home/Firewall.jpg'
    }
  };

  // Process steps (same for all services)
  const processSteps = [
    { icon: <FaClipboardList className="w-5 h-5" />, title: 'Discovery', description: 'Understand your requirements' },
    { icon: <FaPencilRuler className="w-5 h-5" />, title: 'Planning', description: 'Design the solution' },
    { icon: <FaCodeBranch className="w-5 h-5" />, title: 'Development', description: 'Build and test' },
    { icon: <FaLaunch className="w-5 h-5" />, title: 'Launch', description: 'Deploy and support' }
  ];

  // Get current service details
  const currentService = serviceDetailsMap[activeService] || serviceDetailsMap[1];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span>Our Services</span>
              </h4>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => setActiveService(service.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 group ${
                        activeService === service.id
                          ? 'bg-blue-600 text-white border-l-4 border-blue-600'
                          : 'hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border-l-4 border-transparent'
                      }`}
                    >
                      <span className={activeService === service.id ? 'text-white' : 'text-blue-600 dark:text-blue-400 group-hover:text-blue-600'}>
                        {service.icon}
                      </span>
                      <span className="text-sm font-medium">{service.title}</span>
                      {activeService === service.id && (
                        <span className="ml-auto">
                          <FaArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-600 dark:bg-blue-700 border border-blue-700 p-6 text-white">
              <h4 className="text-lg font-bold mb-4">Quick Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 flex-shrink-0" />
                  <span>(+880) 1705-944400</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 flex-shrink-0" />
                  <span>info@bytebari.com</span>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
              >
                <span>Contact Us</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Image */}
            <div className="relative w-full h-[300px] bg-gray-200 dark:bg-gray-700 mb-8 overflow-hidden">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {currentService.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                  Service Overview
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {currentService.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 mt-1 p-1 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-600 transition-colors">
                      <FaCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                  <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                  <span>Our Process</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-3">
                        {step.icon}
                      </div>
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 bg-blue-600 dark:bg-blue-700 border border-blue-700 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white">Ready to transform your business?</h4>
                <p className="text-sm text-blue-100">Get a free consultation today</p>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors group"
              >
                <span>Start Now</span>
                <FaRocket className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;