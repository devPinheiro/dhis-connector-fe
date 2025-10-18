import React from 'react';
import { Star, Quote } from 'lucide-react';

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
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted by health leaders
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Join hundreds of health organizations using HealthFlow to transform 
            their data into life-saving insights and actions.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric highlight */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {testimonial.metrics.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.metrics.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case study CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              See how Nigeria reduced stockouts by 80%
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn how the Nigeria Ministry of Health used HealthFlow to transform 
              their national supply chain and save millions of dollars.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#case-study"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Case Study
              </a>
              <a
                href="#demo"
                className="px-8 py-4 rounded-xl text-lg font-semibold text-gray-700 hover:text-gray-900 border-2 border-gray-300 hover:border-gray-400 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}