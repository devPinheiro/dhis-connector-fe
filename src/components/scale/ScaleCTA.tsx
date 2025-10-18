import React from 'react';
import { ArrowRight, CheckCircle, Zap, Users, Shield } from 'lucide-react';

const features = [
  'Enterprise-grade security and compliance',
  'Dedicated customer success team',
  'Custom SLAs and support agreements',
  'Advanced analytics and reporting',
  'Priority access to new features',
  'Global scale with local expertise'
];

const benefits = [
  {
    icon: Zap,
    title: "Get started in minutes",
    description: "Quick onboarding with our intuitive platform"
  },
  {
    icon: Users,
    title: "Expert support",
    description: "24/7 assistance from our AI specialists"
  },
  {
    icon: Shield,
    title: "Enterprise ready",
    description: "SOC 2 Type 2 certified with robust security"
  }
];

export function ScaleCTA() {
  return (
    <div className="bg-black py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to scale your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI operations?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of companies already using Scale AI to build the next 
              generation of intelligent applications. Get started today with our 
              enterprise-ready platform.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Icon className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">
                        {benefit.title}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Request Demo
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#"
                className="px-8 py-4 rounded-lg text-lg font-semibold text-white border border-gray-600 hover:border-gray-500 hover:bg-white/5 transition-all duration-200 text-center"
              >
                Talk to Sales
              </a>
            </div>

            {/* Trust indicator */}
            <div className="mt-8 flex items-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm">
                Free consultation • Custom pricing • Enterprise support
              </span>
            </div>
          </div>

          {/* Right column - Feature list */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Enterprise features included:
            </h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    99.9%
                  </div>
                  <div className="text-gray-400 text-sm">
                    Uptime SLA
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    24/7
                  </div>
                  <div className="text-gray-400 text-sm">
                    Expert Support
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-500/20">
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-1">
                  Custom Pricing Available
                </div>
                <div className="text-gray-300 text-sm">
                  Volume discounts for enterprise customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScaleFooter() {
  const navigation = {
    platform: [
      { name: 'Data Labeling', href: '#' },
      { name: 'Model Evaluation', href: '#' },
      { name: 'Synthetic Data', href: '#' },
      { name: 'API Documentation', href: '#' },
    ],
    solutions: [
      { name: 'Autonomous Vehicles', href: '#' },
      { name: 'Robotics', href: '#' },
      { name: 'Computer Vision', href: '#' },
      { name: 'Natural Language', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Research', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">
                Scale AI
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Powering the next generation of AI with trusted data and scalable 
              infrastructure for enterprise applications.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-sm">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex flex-wrap space-x-6">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <p className="mt-4 lg:mt-0 text-sm text-gray-400">
              © 2024 Scale AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}