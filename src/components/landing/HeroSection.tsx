import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          {/* Announcement badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            New: Real-time DHIS2 & OpenLMIS integration
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Transform</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Health Data
            </span>
            <span className="block">Into Action</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            Unify DHIS2 and OpenLMIS data streams into actionable insights. 
            Monitor supply chains, predict stockouts, and ensure every facility 
            has what it needs to save lives.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              'Real-time monitoring',
              'Predictive analytics',
              'Automated alerts'
            ].map((benefit) => (
              <div key={benefit} className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/login"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-gray-700 hover:text-gray-900 border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 w-full sm:w-auto">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-6">Trusted by health organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                'WHO', 'UNICEF', 'CDC', 'Gates Foundation', 'USAID'
              ].map((org) => (
                <div key={org} className="text-gray-400 font-semibold text-lg">
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          
          {/* Dashboard mockup */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-500 font-mono">
                  healthflow.ai/dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard content placeholder */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Total Facilities', value: '1,247', color: 'blue' },
                  { label: 'Stock Alerts', value: '23', color: 'red' },
                  { label: 'Reporting Rate', value: '94.2%', color: 'green' },
                  { label: 'Commodities', value: '156', color: 'purple' },
                ].map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                    <div className={`text-2xl font-bold text-${metric.color}-600`}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chart placeholder */}
              <div className="bg-gray-50 rounded-xl h-64 flex items-center justify-center">
                <div className="text-gray-400 text-lg font-medium">
                  Interactive Analytics Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}