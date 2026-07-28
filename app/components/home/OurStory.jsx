"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, Code } from "lucide-react";

const OurStory = () => {
  const stats = [
    {
      icon: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      label: "Projects Delivered",
      value: "500+",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      label: "Happy Clients",
      value: "300+",
    },
    {
      icon: <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      label: "Years Experience",
      value: "25+",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Image Grid */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Main Image with Animation */}
              <div className="relative  shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <Image
                  src="/home/our-story.jpg"
                  alt="Our Story - ByteBari"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none"></div>

                {/* Experience Badge */}
                <div className="absolute animate-float -bottom-4 -right-4 bg-blue-600 dark:bg-blue-500  px-6 py-4 shadow-xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">25+</p>
                    <p className="text-xs text-blue-100">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Decorative Orbs */}
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-200/30 dark:bg-blue-900/20 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-indigo-200/30 dark:bg-indigo-900/20 blur-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side - Content (Same as above) */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              We Help IT Companies
              <span className="block text-blue-600 dark:text-blue-400 mt-1">
                Scale Engineering Capacity
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Dissaude ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on. By offer scale
              an stuff. Blush be sorry no sight sang lose.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-4 text-center border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
