'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaUser, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaComment,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    email: '',
    phone: '',
    message: '',
    hours: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    // Reset form after submission logic would go here
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      detail: '1234 IT Park, Floor 5'
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: 'Email',
      value: 'info@bytebari.com',
      detail: 'support@bytebari.com'
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      label: 'Phone',
      value: '(+880) 1705-944400',
      detail: 'Available 24/7'
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      label: 'Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      detail: 'Sat - Sun: Closed'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/10 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Contact Us
            </span>
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work with us? Fill out the form below and we'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form - Takes 2/3 of space */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span>Send Us a Message</span>
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <FaUser className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <FaMapMarkerAlt className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country"
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <FaEnvelope className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <FaPhone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1700-00000"
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Comment or Message - Full Width */}
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Comment or Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400 dark:text-gray-500">
                      <FaComment className="w-4 h-4" />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project..."
                      className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-y"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Hours - Optional */}
                <div className="mt-4">
                  <label htmlFor="hours" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Hours (Preferred contact time)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                      <FaClock className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      id="hours"
                      name="hours"
                      value={formData.hours}
                      onChange={handleChange}
                      placeholder="e.g., Morning, Afternoon"
                      className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 group w-full sm:w-auto"
                  >
                    <span>Submit</span>
                    <FaPaperPlane className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  {isSubmitted && (
                    <div className="mt-3 text-green-600 dark:text-green-400 flex items-center space-x-2">
                      <FaCheckCircle className="w-4 h-4" />
                      <span>Thank you! Your message has been sent.</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar - Takes 1/3 of space */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {info.label}
                      </h5>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                      {info.detail && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional CTA */}
              <div className="bg-blue-600 dark:bg-blue-700 border border-blue-700 px-5 py-4.5 text-white">
                <h4 className="font-bold">Let's Work Together</h4>
                <p className="text-sm text-blue-100 mb-1">
                  We're here to help you with your IT needs.
                </p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-blue-200 transition-colors group"
                >
                  <span>Explore Services</span>
                  <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;