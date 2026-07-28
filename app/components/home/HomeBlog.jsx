'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaArrowRight,
  FaShieldAlt,
  FaFire,
  FaLock,
  FaCode,
  FaCloud,
  FaDatabase
} from 'react-icons/fa';

const HomeBlog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Additions in conveying or collected objection',
      excerpt: 'Discourse ye continued pronounce we abilities extended delicate of',
      category: 'TECHNOLOGY',
      date: '12 Aug, 2020',
      author: 'Admin',
      image: '/home/blog-1.jpg',
      icon: <FaCode className="w-4 h-4" />,
      tags: ['Technology', 'Innovation']
    },
    {
      id: 2,
      title: 'Discourse ye continued pronounce we abilities',
      excerpt: 'Additions in conveying or collected objection extended delicate of',
      category: 'FIREWALL',
      date: '05 Oct, 2020',
      author: 'Admin',
      image: '/home/blog-2.jpg',
      icon: <FaFire className="w-4 h-4" />,
      tags: ['Security', 'Firewall']
    },
    {
      id: 3,
      title: 'Children greatest online extended delicate of',
      excerpt: 'Additions in conveying or collected objection discourse ye continued',
      category: 'SECURITY',
      date: '27 Dec, 2020',
      author: 'Admin',
      image: '/home/blog-3.jpg',
      icon: <FaLock className="w-4 h-4" />,
      tags: ['Security', 'Privacy']
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Popular News
              </span>
              <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Latest From Our <span className="text-blue-600 dark:text-blue-400">Blog</span>
            </h2>
          </div>
          
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group mt-4 md:mt-0"
          >
            <span>View All Posts</span>
            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-[100%] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 flex items-center space-x-2">
                  <span>{post.icon}</span>
                  <span>{post.category}</span>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center space-x-1.5">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <FaUser className="w-3 h-3" />
                    <span>{post.author}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link 
                  href={`/blog/details`}
                  className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                >
                  <span>Read More</span>
                  <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 group"
          >
            <span>Explore All Articles</span>
            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;