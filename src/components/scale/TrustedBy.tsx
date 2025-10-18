import React from 'react';

const companies = [
  { name: 'Toyota', logo: 'TOYOTA' },
  { name: 'General Motors', logo: 'GM' },
  { name: 'Samsung', logo: 'SAMSUNG' },
  { name: 'Meta', logo: 'META' },
  { name: 'Microsoft', logo: 'MICROSOFT' },
  { name: 'OpenAI', logo: 'OPENAI' },
  { name: 'Tesla', logo: 'TESLA' },
  { name: 'Uber', logo: 'UBER' },
];

export function TrustedBy() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600 mb-8">
            Trusted by world-leading AI teams
          </h2>
        </div>

        {/* Company logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="text-gray-400 hover:text-gray-800 font-bold text-sm tracking-wider transition-colors">
                {company.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Enterprise customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10B+</div>
              <div className="text-gray-600 font-medium">Data points processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">40+</div>
              <div className="text-gray-600 font-medium">Countries served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}