import React from 'react';
import { Users, Layers, Lock, Headphones, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Human-in-the-loop quality assurance',
    description: 'Expert human annotators work alongside AI to ensure the highest data quality and accuracy for your models.',
  },
  {
    icon: Layers,
    title: 'Scalable infrastructure for enterprise workloads',
    description: 'Handle petabytes of data and millions of annotations with our globally distributed, auto-scaling platform.',
  },
  {
    icon: Lock,
    title: 'World-class data privacy and security',
    description: 'SOC 2 Type 2 certified with end-to-end encryption, data residency controls, and enterprise-grade security.',
  },
  {
    icon: Headphones,
    title: 'Dedicated AI expertise and support',
    description: '24/7 support from our team of AI specialists, data scientists, and machine learning engineers.',
  },
];

const features = [
  'Multi-modal data processing (text, image, video, audio)',
  'Real-time quality monitoring and feedback loops',
  'Custom annotation workflows and guidelines',
  'Advanced privacy controls and data governance',
  'Seamless integration with popular ML frameworks',
  'Dedicated customer success and technical support',
];

export function ValueProposition() {
  return (
    <div className="bg-gray-900 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why teams choose us
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            We combine cutting-edge AI technology with human expertise to deliver 
            the most reliable and scalable data infrastructure for enterprise AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Value props */}
          <div className="space-y-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start space-x-6 p-6 rounded-2xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column - Feature list */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-8">
              Everything you need for enterprise AI
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-12 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to accelerate your AI development?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using Scale AI to build the next 
              generation of intelligent applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg text-lg font-semibold text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-all duration-200"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}