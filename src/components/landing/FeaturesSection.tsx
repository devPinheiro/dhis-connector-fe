import React from 'react';
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Brain, 
  Clock,
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Unified Analytics',
    description: 'Combine DHIS2 health data with OpenLMIS supply chain metrics in real-time dashboards.',
    highlights: ['Cross-platform integration', 'Real-time synchronization', 'Custom visualizations'],
    color: 'blue',
  },
  {
    icon: Brain,
    title: 'Predictive Intelligence',
    description: 'AI-powered forecasting prevents stockouts and optimizes resource allocation across facilities.',
    highlights: ['ML-driven predictions', 'Risk assessment', 'Automated recommendations'],
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'Data Security & Compliance',
    description: 'Enterprise-grade security with HIPAA compliance and role-based access controls.',
    highlights: ['End-to-end encryption', 'Audit trails', 'Compliance reporting'],
    color: 'green',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Automated notifications for critical events, stockouts, and reporting anomalies.',
    highlights: ['Smart alerting', 'Multi-channel delivery', 'Escalation workflows'],
    color: 'yellow',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Built to handle national health systems with millions of transactions per day.',
    highlights: ['Infinite scalability', 'Global deployment', '99.9% uptime'],
    color: 'indigo',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Go live in days, not months, with our pre-built integrations and configuration tools.',
    highlights: ['Quick setup', 'Pre-built connectors', 'Expert support'],
    color: 'pink',
  },
];

const integrations = [
  { name: 'DHIS2', description: 'Health management information system' },
  { name: 'OpenLMIS', description: 'Logistics management information system' },
  { name: 'CommTrack', description: 'Supply chain tracking platform' },
  { name: 'iHRIS', description: 'Human resources information system' },
  { name: 'OpenMRS', description: 'Medical record system' },
  { name: 'Custom APIs', description: 'Connect any system via REST/GraphQL' },
];

export function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Health Data
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Our platform unifies disparate health systems into a single source of truth, 
            enabling data-driven decisions that save lives and optimize resources.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrations section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with existing health information systems and data sources 
              through our extensive library of pre-built integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {integration.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#integrations"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors border border-gray-200"
            >
              View all integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}