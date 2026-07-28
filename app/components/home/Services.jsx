"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Database,
  Cloud,
  Code,
  Settings,
  BarChart,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Business Reform",
      description:
        "Extremity now strangers contained breakfast him discourse additions. Sincerity collected forfeted.",
      icon: <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      image: "/home/business.png",
      link: "/services",
      features: [
        "Digital Transformation",
        "Process Automation",
        "Strategic Planning",
      ],
    },
    {
      id: 2,
      title: "Firewall Advance",
      description:
        "Extremity now strangers contained breakfast him discourse additions. Sincerity collected forfeted.",
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      image: "/home/firewall.png",
      link: "/services",
      features: ["Network Security", "Threat Protection", "Data Encryption"],
    },
    {
      id: 3,
      title: "IT Management",
      description:
        "Extremity now strangers contained breakfast him discourse additions. Sincerity collected forfeted.",
      icon: <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      image: "/home/it.png",
      link: "/services",
      features: [
        "Infrastructure Management",
        "Cloud Solutions",
        "24/7 Support",
      ],
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description:
        "Extremity now strangers contained breakfast him discourse additions. Sincerity collected forfeted.",
      icon: <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      image: "/home/cloud.png",
      link: "/services",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps"],
    },
    {
      id: 5,
      title: "Software Development",
      description:
        "Extremity now strangers contained breakfast him discourse additions. Sincerity collected forfeted.",
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      image: "/home/it.png",
      link: "/services",
      features: ["Custom Development", "Mobile Apps", "Web Applications"],
    },
    {
      id: 6,
      title: "Data Analytics",
      description:
        "Extremity now strangers contained breakfast him discourse additions. Sincerity collected forfeted.",
      icon: <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      image: "/home/firewall.png",
      link: "/services",
      features: [
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
      ],
    },
  ];

  const totalSlides = Math.ceil(services.length / 3);
  const itemsPerSlide = 3;

  const getVisibleServices = () => {
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return services.slice(start, end);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentServices = getVisibleServices();

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* Label */}
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Services
            </span>
            <span className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Do
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Delivering innovative IT solutions to help your business thrive in
            the digital age
          </p>
        </div>

        {/* Services Slider */}
        <div className="relative">
          <div ref={containerRef} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
              {currentServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>

                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-4 p-3 bg-white/95 dark:bg-gray-800/95 shadow-lg backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                      <span>Discover More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-blue-600 dark:bg-blue-400"
                  : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
