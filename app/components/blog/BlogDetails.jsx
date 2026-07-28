'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
  FaComment,
  FaReply,
  FaHeart,
  FaShareAlt,
  FaBookmark
} from 'react-icons/fa';

const BlogDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  // Blog post data
  const blogPost = {
    title: 'Common so wicket appear to sudden Give lady',
    excerpt: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an.',
    content: `
      Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. 
      Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy 
      you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as 
      difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir 
      motionless she end literature. Gay direction neglected but supported yet her. New had happen unable 
      uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See 
      general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched 
      remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for 
      domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age 
      from. Comparison new ham melancholy son themselves.
    `,
    author: 'Park Lee',
    date: '05 Dec, 2020',
    category: 'TECHNOLOGY',
    image: '/blog/infrastruktura.png',
    tags: ['Technology', 'Innovation', 'Digital', 'Future'],
    readTime: '5 min read'
  };

  // Sidebar data
  const categories = [
    { name: 'Technology', count: 12 },
    { name: 'Security', count: 8 },
    { name: 'Firewall', count: 6 },
    { name: 'Development', count: 10 },
    { name: 'Cloud Computing', count: 5 }
  ];

  const recentPosts = [
    { title: 'Lasting out and article demands own charmed', date: '05 Dec, 2020' },
    { title: 'Inquietude simplicity compliment remarkably', date: '30 Dec, 2020' },
    { title: 'Surprise steepest wandered amounted of', date: '18 Nov, 2020' },
    { title: 'Old insipidity motionless continuing law', date: '18 Nov, 2020' }
  ];

  const tags = ['Technology', 'Security', 'Firewall', 'Development', 'Cloud', 'AI', 'Data', 'Innovation'];

  const comments = [
    {
      id: 1,
      name: 'Jonathom Doe',
      date: '28 Aug, 2020',
      text: 'Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.',
      avatar: '/avatar-1.jpg'
    },
    {
      id: 2,
      name: 'Spart Lee',
      date: '17 Feb, 2020',
      text: 'Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.',
      avatar: '/avatar-2.jpg'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content - Takes 2/3 */}
          <div className="lg:col-span-2">
            {/* Blog Post */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Featured Image */}
              <div className="relative w-full h-[300px] md:h-[400px] bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
                    <span className="flex items-center space-x-1.5">
                      <FaCalendarAlt className="w-3.5 h-3.5" />
                      <span>{blogPost.date}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <FaUser className="w-3.5 h-3.5" />
                      <span>By {blogPost.author}</span>
                    </span>
                    <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold">
                      {blogPost.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {blogPost.title}
                </h1>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center space-x-1.5">
                      <FaCalendarAlt className="w-3.5 h-3.5" />
                      <span>{blogPost.date}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <FaUser className="w-3.5 h-3.5" />
                      <span>By {blogPost.author}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <FaComment className="w-3.5 h-3.5" />
                      <span>{comments.length} Comments</span>
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {blogPost.readTime}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 transition-colors ${isBookmarked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                    >
                      <FaBookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <FaShareAlt className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                  {blogPost.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">
                    Tags:
                  </span>
                  {blogPost.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-300 dark:bg-gray-600 overflow-hidden">
                      <Image
                        src="/author-avatar.jpg"
                        alt={blogPost.author}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{blogPost.author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Technology enthusiast and writer passionate about IT solutions and digital innovation.
                      </p>
                      <div className="flex items-center space-x-3 mt-2">
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                          <FaFacebookF className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                          <FaTwitter className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                          <FaLinkedinIn className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Comments Section */}
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                    <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                    <span>{comments.length} Comments</span>
                  </h3>

                  {comments.map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-4 p-4 mb-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-300 dark:bg-gray-600 overflow-hidden">
                        <Image
                          src={comment.avatar}
                          alt={comment.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{comment.name}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</p>
                          </div>
                          <button 
                            onClick={() => setReplyTo(comment.id)}
                            className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                          >
                            <FaReply className="w-3 h-3" />
                            <span>Reply</span>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Comment Form */}
                  <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                      {replyTo ? 'Reply to Comment' : 'Leave a Comment'}
                    </h4>
                    {replyTo && (
                      <button 
                        onClick={() => setReplyTo(null)}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 mb-3"
                      >
                        Cancel Reply
                      </button>
                    )}
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name *"
                            className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Your Email *"
                            className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <textarea
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          rows="4"
                          placeholder="Your Comment *"
                          className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-y"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                      >
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar - Takes 1/3 */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span>Search</span>
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors pr-10"
                />
                <button className="absolute right-0 top-0 bottom-0 px-3 text-gray-400 hover:text-blue-600 transition-colors">
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span>Categories</span>
              </h4>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      href={`/blog/category/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span>Recent Posts</span>
              </h4>
              <ul className="space-y-4">
                {recentPosts.map((post, index) => (
                  <li key={index}>
                    <Link 
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group block"
                    >
                      <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center space-x-1.5">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{post.date}</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span>Tags</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Link 
                    key={index}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-600 dark:bg-blue-700 border border-blue-700 p-6 text-white">
              <h4 className="font-bold text-lg mb-3">Newsletter</h4>
              <p className="text-sm text-blue-100 mb-4">
                Subscribe to get the latest articles and updates.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 bg-white/10 border border-blue-500 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full mt-3 px-4 py-2.5 bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Social Follow */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                <span>Follow Us</span>
              </h4>
              <div className="flex space-x-3">
                <a href="#" className="p-2.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;