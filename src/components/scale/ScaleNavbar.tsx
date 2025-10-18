import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export function ScaleNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: 'Products',
      href: '#',
      children: [
        { name: 'Data Labeling', href: '#' },
        { name: 'Model Evaluation', href: '#' },
        { name: 'Synthetic Data', href: '#' },
        { name: 'Foundation Models', href: '#' },
      ],
    },
    {
      name: 'Solutions',
      href: '#',
      children: [
        { name: 'Autonomous Vehicles', href: '#' },
        { name: 'Robotics', href: '#' },
        { name: 'Computer Vision', href: '#' },
        { name: 'Natural Language', href: '#' },
      ],
    },
    { name: 'Government', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Company', href: '#' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white tracking-tight">
                Scale AI
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    {item.name}
                    {item.children && (
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                    )}
                  </button>
                  
                  {item.children && (
                    <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
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
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  {item.name}
                </a>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-800 pt-4 pb-3">
              <div className="flex flex-col space-y-3 px-3">
                <a
                  href="#"
                  className="text-base font-medium text-gray-300 hover:text-white"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium text-center hover:bg-blue-700"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}