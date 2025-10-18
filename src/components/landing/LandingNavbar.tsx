import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HealthFlow
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    {item.name}
                    {item.children && (
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                    )}
                  </button>
                  
                  {item.children && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sign in
            </a>
            <a
              href="/login"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </a>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex flex-col space-y-3 px-3">
                <a
                  href="/login"
                  className="text-base font-medium text-gray-700 hover:text-gray-900"
                >
                  Sign in
                </a>
                <a
                  href="/login"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-base font-medium text-center"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}