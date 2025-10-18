import React from 'react';
import { Car, Bot, Eye, MessageSquare, Camera, Cpu, ArrowRight } from 'lucide-react';

const useCases = [
  {
    icon: Car,
    title: 'Autonomous Vehicles',
    description: 'Power self-driving cars with precision-labeled sensor data from LiDAR, cameras, and radar systems.',
    industries: ['Automotive', 'Transportation', 'Logistics'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bot,
    title: 'Robotics',
    description: 'Train robots to understand and interact with the physical world through advanced computer vision.',
    industries: ['Manufacturing', 'Healthcare', 'Consumer'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Build AI systems that can see and understand images and video with human-level accuracy.',
    industries: ['Retail', 'Security', 'Healthcare'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language',
    description: 'Create conversational AI and language models that understand context and nuance.',
    industries: ['Customer Service', 'Content', 'Education'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Camera,
    title: 'Content Moderation',
    description: 'Automatically detect and filter harmful content across text, image, and video platforms.',
    industries: ['Social Media', 'Gaming', 'E-commerce'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Cpu,
    title: 'Edge AI',
    description: 'Deploy AI models on edge devices with optimized performance and minimal latency.',
    industries: ['IoT', 'Mobile', 'Industrial'],
    gradient: 'from-teal-500 to-blue-500',
  },
];

export function UseCases() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built for every AI application
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            From autonomous vehicles to conversational AI, our platform provides 
            the data infrastructure that powers breakthrough AI applications across industries.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden"
              >
                {/* Background gradient (subtle) */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.gradient} opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${useCase.gradient} text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                {/* Industries */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {useCase.industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-gray-200 transition-colors"
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                {/* Learn more link */}
                <a 
                  href="#"
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-sm group-hover:translate-x-1 transition-all"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Don't see your use case?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our platform is flexible enough to handle any AI application. 
              Talk to our team about your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Discuss Your Project
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg text-lg font-semibold text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 transition-all duration-200"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}