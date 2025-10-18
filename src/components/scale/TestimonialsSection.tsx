
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Scale AI has been instrumental in helping us achieve production-ready autonomous driving capabilities. Their data quality and annotation speed are unmatched in the industry.",
    author: "Dr. Sarah Chen",
    title: "VP of AI Engineering",
    company: "AutoTech Dynamics",
    avatar: "SC",
    rating: 5,
    logo: "AUTOTECH",
    metrics: {
      improvement: "90% faster",
      metric: "model training"
    }
  },
  {
    quote: "The quality of their human-in-the-loop annotation services has been game-changing for our computer vision models. We've seen a 40% improvement in model accuracy.",
    author: "Marcus Rodriguez",
    title: "Head of Machine Learning",
    company: "Vision Labs",
    avatar: "MR",
    rating: 5,
    logo: "VISION",
    metrics: {
      improvement: "40% better",
      metric: "model accuracy"
    }
  },
  {
    quote: "Scale AI's platform allows us to focus on what we do best - building AI products - while they handle the complex data infrastructure. It's been a true partnership.",
    author: "Dr. Emily Watson",
    title: "Chief Technology Officer",
    company: "RoboTech Industries",
    avatar: "EW",
    rating: 5,
    logo: "ROBOTECH",
    metrics: {
      improvement: "60% reduction",
      metric: "development time"
    }
  },
];

const logoStrip = [
  'TOYOTA', 'GENERAL MOTORS', 'SAMSUNG', 'META', 'MICROSOFT', 'NVIDIA', 'TESLA', 'UBER'
];

export function TestimonialsSection() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What our customers say
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Hear from the AI teams and executives who rely on Scale AI to power 
            their most critical applications and drive breakthrough innovations.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gray-200">
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
              <div className="flex items-center justify-between mb-6">
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
                    <div className="text-sm font-medium text-gray-800">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-gray-400 tracking-wider">
                  {testimonial.logo}
                </div>
              </div>

              {/* Metric highlight */}
              <div className="pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {testimonial.metrics.improvement}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.metrics.metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer logos */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by industry leaders
            </h3>
            <p className="text-gray-600">
              Join hundreds of companies using Scale AI to build the future
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {logoStrip.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="text-gray-400 hover:text-gray-800 font-bold text-xs tracking-wider transition-colors">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case study CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              See how Toyota accelerated autonomous driving with Scale AI
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Learn how Toyota reduced their model training time by 90% and 
              achieved production-ready autonomous driving capabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Case Study
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg text-lg font-semibold text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-200"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}