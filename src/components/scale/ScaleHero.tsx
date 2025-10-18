import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function ScaleHero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Now available: GPT-4 powered data labeling
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Powering the
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                Next Generation
              </span>
              <span className="block text-white">of AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              We help companies build and deploy high-quality AI models with 
              trusted data and scalable infrastructure. From data labeling to 
              model evaluation, we power AI at enterprise scale.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#"
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group flex items-center px-8 py-4 rounded-lg text-lg font-semibold text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-all duration-200">
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Social proof stats */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-sm text-gray-400">Data points labeled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Enterprise customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Data accuracy</div>
              </div>
            </div>
          </div>

          {/* Right column - 3D Visualization */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            
            {/* Main visualization container */}
            <div className="relative bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">Scale AI Platform</div>
              </div>

              {/* AI Visualization */}
              <div className="space-y-6">
                {/* Neural network visualization */}
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 rounded-full animate-pulse ${
                        i % 3 === 0 ? 'bg-blue-500/60' : 
                        i % 3 === 1 ? 'bg-purple-500/60' : 'bg-gray-600/60'
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>

                {/* Data flow animation */}
                <div className="relative h-32 bg-gray-800/50 rounded-lg p-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-lg animate-pulse"></div>
                  <div className="relative space-y-3">
                    <div className="h-2 bg-blue-500/40 rounded animate-pulse"></div>
                    <div className="h-2 bg-purple-500/40 rounded animate-pulse delay-300"></div>
                    <div className="h-2 bg-blue-500/40 rounded animate-pulse delay-700"></div>
                    <div className="h-2 bg-purple-500/40 rounded animate-pulse delay-1000"></div>
                  </div>
                </div>

                {/* Metrics display */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-blue-400 text-2xl font-bold">98.7%</div>
                    <div className="text-gray-400 text-xs">Model Accuracy</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-purple-400 text-2xl font-bold">2.3s</div>
                    <div className="text-gray-400 text-xs">Inference Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}