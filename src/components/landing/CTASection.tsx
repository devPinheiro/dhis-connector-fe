import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Go live in days",
    description: "Quick deployment with pre-built integrations"
  },
  {
    icon: Shield,
    title: "Enterprise security", 
    description: "HIPAA compliant with end-to-end encryption"
  },
  {
    icon: Globe,
    title: "Global support",
    description: "24/7 expert support in multiple languages"
  }
];

const features = [
  "Real-time DHIS2 & OpenLMIS integration",
  "AI-powered predictive analytics", 
  "Automated alert system",
  "Custom dashboards & reports",
  "Role-based access controls",
  "API-first architecture"
];

export function CTASection() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to transform your health data?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join 200+ health organizations using HealthFlow to save lives through 
              better data. Start your free trial today and see results in 24 hours.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">
                        {benefit.title}
                      </div>
                      <div className="text-blue-100 text-sm">
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
                href="/login"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#demo"
                className="px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Schedule Demo
              </a>
            </div>

            {/* Trust indicator */}
            <div className="mt-8 flex items-center text-blue-100">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm">
                No credit card required • 14-day free trial • Cancel anytime
              </span>
            </div>
          </div>

          {/* Right column - Feature list */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Everything included in your trial:
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  $0
                </div>
                <div className="text-blue-100 text-sm">
                  for your first 14 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinalCTASection() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Start transforming health data today
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the health data revolution. No setup fees, no long-term contracts. 
          See the impact in your first week.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="/login"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Get Started Free
            <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="mailto:sales@healthflow.ai"
            className="px-8 py-4 rounded-xl text-lg font-semibold text-gray-300 hover:text-white border-2 border-gray-600 hover:border-gray-500 transition-all duration-200 w-full sm:w-auto"
          >
            Talk to Sales
          </a>
        </div>

        <div className="text-gray-400 text-sm">
          Questions? Email us at{' '}
          <a href="mailto:support@healthflow.ai" className="text-blue-400 hover:text-blue-300">
            support@healthflow.ai
          </a>
        </div>
      </div>
    </div>
  );
}