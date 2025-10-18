import React from 'react';
import { TrendingUp, Users, Database, Globe, Award, Zap } from 'lucide-react';

const metrics = [
  {
    icon: Database,
    value: '10M+',
    label: 'Labeled data points',
    description: 'High-quality annotations across all modalities',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Enterprise customers',
    description: 'Fortune 500 companies trust our platform',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Data accuracy',
    description: 'Verified through rigorous quality assurance',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    value: '40+',
    label: 'Countries served',
    description: 'Global scale with local expertise',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    value: '10x',
    label: 'Faster deployment',
    description: 'Accelerate time-to-market for AI models',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Uptime guarantee',
    description: 'Enterprise-grade reliability and performance',
    gradient: 'from-teal-500 to-blue-500',
  },
];

const achievements = [
  {
    title: 'SOC 2 Type 2 Certified',
    description: 'Enterprise-grade security and compliance',
  },
  {
    title: 'ISO 27001 Compliant',
    description: 'International information security standards',
  },
  {
    title: 'GDPR & CCPA Ready',
    description: 'Privacy-first data handling practices',
  },
];

export function MetricsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted by innovators to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              accelerate AI development
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Our platform powers the world's most advanced AI applications with 
            unmatched scale, quality, and reliability.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${metric.gradient} opacity-5 rounded-full -mr-10 -mt-10 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${metric.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Metric value */}
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                
                {/* Label and description */}
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {metric.label}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievements section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Security & Compliance You Can Trust
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with enterprise-grade security from day one, ensuring your 
              data is protected and your business stays compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </div>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">$2B+</div>
              <div className="text-gray-600 text-sm">AI investments powered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">1M+</div>
              <div className="text-gray-600 text-sm">Hours of expert annotation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">200+</div>
              <div className="text-gray-600 text-sm">Data scientists on team</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">5 years</div>
              <div className="text-gray-600 text-sm">Average customer relationship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}