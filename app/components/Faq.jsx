'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Mail, Phone } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What Services Does ByteBari Offer?',
      answer: 'ByteBari provides comprehensive IT and digital solutions including custom web development, mobile app development, UI/UX design, cloud solutions, DevOps services, AI/ML integration, and digital transformation consulting. We help businesses leverage technology to achieve their goals and stay ahead of the competition.'
    },
    {
      id: 2,
      question: 'What Technologies Does ByteBari Specialize In?',
      answer: 'We specialize in modern technologies including React.js, Next.js, Node.js, Python, Java, MongoDB, PostgreSQL, AWS, Azure, Docker, Kubernetes, and more. Our team stays updated with the latest industry trends to deliver cutting-edge solutions that are scalable, secure, and high-performing.'
    },
    {
      id: 3,
      question: 'How Does ByteBari Ensure Project Quality And Security?',
      answer: 'Quality and security are at the core of our development process. We implement rigorous testing protocols including unit testing, integration testing, and security audits. Our team follows industry best practices, conducts code reviews, and ensures compliance with data protection regulations like GDPR to deliver secure and reliable solutions.'
    },
    {
      id: 4,
      question: "What Is ByteBari's Development Process?",
      answer: "Our development process follows an agile methodology: Discovery & Planning → Design & Prototyping → Development & Testing → Deployment & Launch → Maintenance & Support. We maintain transparent communication throughout the project lifecycle with regular updates, demos, and client feedback sessions to ensure the final product exceeds expectations."
    },
    {
      id: 5,
      question: 'How Long Does It Take To Build A Website Or Application?',
      answer: 'Project timelines vary based on complexity and requirements. A standard business website typically takes 4-8 weeks, while complex web applications or custom software solutions may take 3-6 months. We provide detailed project timelines during the discovery phase and work with clients to prioritize features for faster delivery.'
    },
    {
      id: 6,
      question: 'Does ByteBari Offer Post-Launch Support And Maintenance?',
      answer: 'Yes, we offer comprehensive post-launch support and maintenance packages including bug fixes, performance optimization, security updates, feature enhancements, and 24/7 technical support. Our team ensures your application remains secure, up-to-date, and performs optimally as your business grows.'
    },
    {
      id: 7,
      question: 'How Does ByteBari Handle Client Communication And Collaboration?',
      answer: 'We maintain transparent and effective communication through dedicated project managers, regular status updates, video conferences, and collaboration tools like Slack and Jira. Our team works closely with clients throughout the project, providing full visibility into progress and welcoming feedback at every stage.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              FAQ
            </span>
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our apparel sourcing, production capabilities, and global operations.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="group">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-base md:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    )}
                  </span>
                </button>
                
                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pl-16 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30">
                <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Still Have Questions?
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team is here to help you
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="mailto:info@bytebari.com"
                className="inline-flex items-center space-x-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;