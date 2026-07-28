'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaArrowRight, 
  FaFire,
  FaShieldAlt,
  FaLock,
  FaCode
} from 'react-icons/fa';

const BlogItems = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogPosts = [
    {
      id: 1,
      category: 'TECHNOLOGY',
      categoryIcon: <FaCode className="w-3.5 h-3.5" />,
      date: '05 Dec, 2020',
      author: 'Park Lee',
      title: 'Lasting out and article demands own charmed',
      excerpt: 'Staring miracle towards his few country ask. You delighted two rapturous xix depending objection happens.',
      link: '/blog/details',
      categoryColor: 'bg-blue-600',
      image: '/blog/risk.jpg' // Add image path
    },
    {
      id: 2,
      category: 'SECURITY',
      categoryIcon: <FaShieldAlt className="w-3.5 h-3.5" />,
      date: '30 Dec, 2020',
      author: 'John',
      title: 'Inquietude simplicity compliment remarkably',
      excerpt: 'Staring miracle towards his few country ask. You delighted two rapturous xix depending objection happens.',
      link: '/blog/details',
      categoryColor: 'bg-green-600',
      image: '/blog/Firewall.jpg'
    },
    {
      id: 3,
      category: 'SECURITY',
      categoryIcon: <FaLock className="w-3.5 h-3.5" />,
      date: '18 Nov, 2020',
      author: 'Park Lee',
      title: 'Surprise steepest wandered amounted of.',
      excerpt: 'Staring miracle towards his few country ask. You delighted two rapturous xix depending objection happens.',
      link: '/blog/details',
      categoryColor: 'bg-green-600',
      image: '/blog/infrastruktura.png'
    },
    {
      id: 4,
      category: 'FREEWALL',
      categoryIcon: <FaFire className="w-3.5 h-3.5" />,
      date: '18 Nov, 2020',
      author: 'Park Lee',
      title: 'Old insipidity motionless continuing law partiality.',
      excerpt: 'Staring miracle towards his few country ask. You delighted two rapturous xix depending objection happens.',
      link: '/blog/details',
      categoryColor: 'bg-orange-600',
      image: '/blog/risk.jpg'
    },
    {
      id: 5,
      category: 'FREEWALL',
      categoryIcon: <FaFire className="w-3.5 h-3.5" />,
      date: '30 Dec, 2020',
      author: 'John',
      title: 'Simplicity terminated compliment remarkably',
      excerpt: 'Staring miracle towards his few country ask. You delighted two rapturous xix depending objection happens.',
      link: '/blog/details',
      categoryColor: 'bg-orange-600',
      image: '/blog/Firewall.jpg'
    },
    {
      id: 6,
      category: 'TECHNOLOGY',
      categoryIcon: <FaCode className="w-3.5 h-3.5" />,
      date: '15 Nov, 2020',
      author: 'Sarah',
      title: 'Innovation drives the future of IT',
      excerpt: 'Staring miracle towards his few country ask. You delighted two rapturous xix depending objection happens.',
      link: '/blog/details',
      categoryColor: 'bg-blue-600',
      image: '/blog/infrastruktura.png'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Our Blog
            </span>
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="text-blue-600 dark:text-blue-400">Articles</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Insights, updates, and stories from our team
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top Category Bar */}
              <div className={`h-1 ${post.categoryColor} transition-all duration-300 group-hover:h-1.5`}></div>

              {/* Blog Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-semibold text-white ${post.categoryColor}`}>
                    <span>{post.categoryIcon}</span>
                    <span>{post.category}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  <Link href={post.link}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="flex items-center space-x-1.5">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <FaUser className="w-3 h-3" />
                    <span>By {post.author}</span>
                  </span>
                </div>

                {/* Read More Link */}
                <Link 
                  href={post.link}
                  className="inline-flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                >
                  <span>Read More</span>
                  <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 group"
          >
            <span>View All Posts</span>
            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogItems;