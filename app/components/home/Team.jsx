'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { 
  Mail, 
  ArrowRight, 
  Briefcase,
  Users,
  Award,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sporia Deko',
      role: 'Marketing',
      image: '/home/md.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 2,
      name: 'Adhom Jonam',
      role: 'Project Manager',
      image: '/home/gm.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 3,
      name: 'Turka Pruda',
      role: 'CEO, Co-Founder',
      image: '/home/ceo.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    }
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '50+',
      label: 'Team Members'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '25+',
      label: 'Years Combined Experience'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '98%',
      label: 'Project Success Rate'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50/30 dark:bg-blue-900/5"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50/30 dark:bg-indigo-900/5"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Expert Team
            </span>
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our{' '}
            <span className="text-blue-600 dark:text-blue-400">Leadership</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Our experienced team is dedicated to delivering exceptional results for your business
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
            >

              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={350}
                  className="w-full h-[100%] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Social Icons - Appear on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.social.linkedin}
                      className="p-2.5 bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="p-2.5 bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <FaXTwitter  className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.social.facebook}`}
                      className="p-2.5 bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      aria-label="Email"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 relative">
                {/* Role Badge */}
                <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-semibold px-4 py-1">
                  {member.role}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                
                {/* Decorative Line */}
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-20 transition-all duration-300"></div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">✦</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t-2 border-b-2 border-blue-600/20 dark:border-blue-400/20 py-10 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-3">
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

        {/* CTA Section */}
        {/* <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 group"
          >
            <span>View All Team Members</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Team;