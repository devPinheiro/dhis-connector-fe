import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: 'Platform',
      href: '#platform',
      children: [
        { name: 'Dashboard', href: '#dashboard' },
        { name: 'Analytics', href: '#analytics' },
        { name: 'Reporting', href: '#reporting' },
        { name: 'Alerts', href: '#alerts' },
      ],
    },
    {
      name: 'Solutions',
      href: '#solutions',
      children: [
        { name: 'Supply Chain', href: '#supply-chain' },
        { name: 'Health Systems', href: '#health-systems' },
        { name: 'Emergency Response', href: '#emergency' },
      ],
    },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50  backdrop-blur-lg  "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white tracking-tight">
                HealthFlow AI
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.button 
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </motion.button>
                  {item.children && (
                    <motion.div 
                      className="absolute left-0 mt-2 w-48 rounded-lg bg-stone-900/95 backdrop-blur-lg border border-stone-700/50 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      initial={false}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-stone-800/50 transition-colors"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/login"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="/login"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">Get Started</span>
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-stone-800/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-stone-900/95 backdrop-blur-lg border-t border-stone-800/50">
          {navigation.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-stone-800/50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
              {item.children && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.href}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-stone-800/30 rounded-lg transition-colors"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-stone-800/50">
            <a
              href="/login"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-stone-800/50 rounded-lg transition-colors"
            >
              Sign In
            </a>
            <a
              href="/login"
              className="block px-3 py-2 mt-2 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}