import { ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="py-24 bg-transparent relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 150, 0],
            y: [0, -100, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -120, 0],
            y: [0, 80, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-blue-500/5 via-stone-950/3 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to transform
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                your health data?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              Join 200+ health organizations using HealthFlow to save lives through 
              better data. Start your free trial today and see results in 24 hours.
            </motion.p>

            {/* Benefits */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-10 h-10 bg-stone-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 mt-1 border border-stone-700/50 group-hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(59, 130, 246, 0.2)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-5 w-5 text-blue-400" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {benefit.title}
                      </div>
                      <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/login"
                className="group bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg text-center relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-stone-800/20 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Start Free Trial</span>
                <motion.div
                  className="relative z-10 inline ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#demo"
                className="group px-8 py-4 rounded-xl text-lg font-semibold text-gray-300 hover:text-white border-2 border-stone-600/50 hover:border-blue-500/50 transition-all duration-300 text-center backdrop-blur-sm hover:bg-stone-800/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(31, 41, 55, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
              </motion.a>
            </motion.div>

            {/* Trust indicator */}
            <motion.div 
              className="mt-8 flex items-center text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              </motion.div>
              <span className="text-sm hover:text-gray-300 transition-colors">
                No credit card required • 14-day free trial • Cancel anytime
              </span>
            </motion.div>
          </motion.div>

          {/* Right column - Feature list */}
          <motion.div 
            className="bg-stone-900/60 backdrop-blur-lg rounded-3xl p-8 border border-stone-700/50 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            
            <div className="relative">
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Everything included in your trial:
              </motion.h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    </motion.div>
                    <span className="text-white group-hover:text-stone-300 transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 pt-6 border-t border-stone-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-white mb-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    $0
                  </motion.div>
                  <div className="text-gray-400 text-sm">
                    for your first 14 days
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export function FinalCTASection() {
  return (
    <div className="py-20 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start transforming
          </motion.span>
          <motion.span 
            className="block text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            health data today
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Join the health data revolution. No setup fees, no long-term contracts. 
          See the impact in your first week.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/login"
            className="group bg-white text-stone-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto hover:bg-stone-100"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started Free</span>
            <motion.div
              className="relative z-10 inline ml-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.a>
          
          <motion.a
            href="mailto:sales@healthflow.ai"
            className="group px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/50 hover:bg-white hover:text-stone-900 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05
            }}
            whileTap={{ scale: 0.98 }}
          >
            Talk to Sales
          </motion.a>
        </motion.div>

        <motion.div 
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          Questions? Email us at{' '}
          <motion.a 
            href="mailto:support@healthflow.ai" 
            className="text-white hover:text-stone-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            support@healthflow.ai
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}