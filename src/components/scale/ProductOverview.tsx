import React from 'react';
import { Database, Brain, Cpu, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: Database,
    title: 'Data Labeling',
    description: 'High-quality human-annotated datasets for training your AI models with precision and scale.',
    features: ['Multi-modal data support', 'Expert annotation teams', 'Quality assurance built-in'],
    color: 'blue',
  },
  {
    icon: Brain,
    title: 'AI Model Evaluation',
    description: 'Comprehensive testing and evaluation frameworks to ensure your models perform reliably.',
    features: ['Automated testing suites', 'Performance benchmarking', 'Bias detection & mitigation'],
    color: 'purple',
  },
  {
    icon: Cpu,
    title: 'Synthetic Data Generation',
    description: 'Generate realistic synthetic datasets to augment training data and protect privacy.',
    features: ['Photorealistic generation', 'Privacy-preserving', 'Domain-specific models'],
    color: 'indigo',
  },
];

const capabilities = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy AI models 10x faster with our streamlined infrastructure and tooling.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type 2 compliant with end-to-end encryption and data governance.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Handle petabytes of data across multiple regions with 99.9% uptime.',
  },
];

export function ProductOverview() {
  return (
    <div className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From data preparation to model deployment, we provide the complete AI infrastructure 
            stack that powers the world's most advanced AI applications.
          </motion.p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${product.color}-100 text-${product.color}-600 mb-6`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a 
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Capabilities section */}
        <motion.div 
          className="bg-white rounded-3xl p-12 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Enterprise AI
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform is designed from the ground up to meet the demanding 
              requirements of enterprise AI applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-600 mb-4 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}