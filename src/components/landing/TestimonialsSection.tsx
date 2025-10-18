import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "HealthFlow transformed how we manage our national supply chain. We reduced stockouts by 80% and improved reporting efficiency by 300%. It's simply revolutionary.",
    author: "Dr. Sarah Okafor",
    title: "Director of Health Information Systems",
    organization: "Nigeria Ministry of Health",
    avatar: "SO",
    rating: 5,
    metrics: {
      label: "Stockout reduction",
      value: "80%"
    }
  },
  {
    quote: "The predictive analytics helped us prevent a critical shortage during the malaria season. The AI recommendations were spot-on and saved thousands of lives.",
    author: "Dr. James Mwangi",
    title: "Supply Chain Manager",
    organization: "Kenya Medical Supplies Authority",
    avatar: "JM",
    rating: 5,
    metrics: {
      label: "Cost savings",
      value: "$2.3M"
    }
  },
  {
    quote: "Implementation was incredibly smooth. In just 3 weeks, we had full visibility across 500+ facilities. The ROI was immediate and substantial.",
    author: "Dr. Priya Sharma",
    title: "Head of Digital Health",
    organization: "WHO Regional Office",
    avatar: "PS",
    rating: 5,
    metrics: {
      label: "Facilities connected",
      value: "500+"
    }
  },
];

const stats = [
  { label: "Health Organizations", value: "200+", description: "Trust HealthFlow globally" },
  { label: "Facilities Connected", value: "50K+", description: "Across 40+ countries" },
  { label: "Lives Impacted", value: "10M+", description: "Through better health data" },
  { label: "Stockouts Prevented", value: "95%", description: "Reduction in critical shortages" },
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="py-24 bg-transparent relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Trusted by health leaders
            </motion.span>
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              worldwide
            </motion.span>
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Join hundreds of health organizations using HealthFlow to transform 
            their data into life-saving insights and actions.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl sm:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {stat.value}
              </motion.div>
              <motion.div 
                className="text-lg font-semibold text-white mb-1 group-hover:text-stone-300 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
              <motion.div 
                className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main testimonial display */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-stone-900/60 backdrop-blur-lg rounded-3xl p-12 border border-stone-700/50 relative overflow-hidden"
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >

                {/* Quote icon */}
                <motion.div 
                  className="absolute top-8 right-8 text-white/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Quote className="h-12 w-12" />
                </motion.div>

                <div className="relative">
                  {/* Rating */}
                  <motion.div 
                    className="flex items-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                      >
                        <Star className="h-6 w-6 text-yellow-400 fill-current mr-1" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote 
                    className="text-white text-2xl leading-relaxed mb-8 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </motion.blockquote>

                  {/* Author and metrics */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    {/* Author info */}
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 border border-stone-700/50"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonials[currentTestimonial].avatar}
                      </motion.div>
                      <div>
                        <div className="font-semibold text-white text-lg">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-sm text-stone-300">
                          {testimonials[currentTestimonial].title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonials[currentTestimonial].organization}
                        </div>
                      </div>
                    </motion.div>

                    {/* Metric highlight */}
                    <motion.div 
                      className="bg-stone-800/50 backdrop-blur-sm rounded-xl p-6 border border-stone-700/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                          {testimonials[currentTestimonial].metrics.value}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          {testimonials[currentTestimonial].metrics.label}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            {/* <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-stone-800/80 backdrop-blur-sm rounded-full border border-stone-700/50 text-white hover:border-white/50 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-stone-800/80 backdrop-blur-sm rounded-full border border-stone-700/50 text-white hover:border-white/50 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.button> */}
          </div>

          {/* Carousel indicators */}
          <motion.div 
            className="flex justify-center space-x-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-white w-8'
                    : 'bg-stone-600 hover:bg-stone-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Case study CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-stone-900/60 backdrop-blur-lg rounded-3xl p-12 border border-stone-700/50 max-w-4xl mx-auto relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            
            <div className="relative">
              <motion.h3 
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                See how Nigeria reduced stockouts by 80%
              </motion.h3>
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Learn how the Nigeria Ministry of Health used HealthFlow to transform 
                their national supply chain and save millions of dollars.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#case-study"
                  className="group bg-white text-stone-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:bg-stone-100"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Read Case Study</span>
                </motion.a>
                <motion.a
                  href="#demo"
                  className="group px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/50 hover:bg-white hover:text-stone-900 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Demo
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}