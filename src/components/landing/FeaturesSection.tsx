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
import { motion } from 'framer-motion';

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
              Everything you need to
            </motion.span>
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              Transform Health Data
            </motion.span>
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Our platform unifies disparate health systems into a single source of truth, 
            enabling data-driven decisions that save lives and optimize resources.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="group relative bg-stone-900/40 backdrop-blur-lg rounded-2xl p-8 border border-stone-700/50 hover:border-stone-600/50 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Enhanced glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-stone-800/50 text-white mb-6 backdrop-blur-sm border border-stone-700/50"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold text-white mb-3 group-hover:text-stone-300 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
                
                <motion.ul 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {feature.highlights.map((highlight, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div 
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Integrations section */}
        <motion.div 
          className="bg-stone-900/60 backdrop-blur-lg rounded-3xl p-12 border border-stone-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          
          <motion.div 
            className="relative text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Seamless Integrations
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Connect with existing health information systems and data sources 
              through our extensive library of pre-built integrations.
            </motion.p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div 
                key={index}
                className="group bg-stone-800/50 backdrop-blur-sm rounded-xl p-6 border border-stone-700/30 hover:border-white/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.1)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  initial={false}
                />
                <div className="relative">
                  <motion.h4 
                    className="font-semibold text-white mb-2 group-hover:text-stone-300 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {integration.name}
                  </motion.h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="relative text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#integrations"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-stone-900 font-medium hover:bg-stone-100 transition-all duration-300 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={false}
              />
              <span className="relative z-10">View all integrations</span>
              <motion.div
                className="relative z-10 ml-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}