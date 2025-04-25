"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  // State for animation
  const [animationOffset, setAnimationOffset] = useState(0);
  
  // Animate the cobweb
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => (prev + 0.5) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-96 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-800 text-white py-24">
      {/* Animated Cobweb Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <pattern id="cobweb" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform={`rotate(${animationOffset / 10})`}>
              <line x1="0" y1="0" x2="200" y2="200" stroke="white" strokeWidth="0.5" />
              <line x1="200" y1="0" x2="0" y2="200" stroke="white" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="100" cy="100" r="100" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="100" cy="100" r="25" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cobweb)" />
        </svg>
      </div>
      
      {/* Light Rays Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-blue-500 to-transparent opacity-10 transform -skew-x-12"></div>
        <div className="absolute top-0 right-1/3 w-1/3 h-full bg-gradient-to-b from-purple-500 to-transparent opacity-10 transform skew-x-12"></div>
      </div>
      
      {/* Content */}
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 transform hover:scale-105 transition duration-300">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              Find Your Dream Job in the UK
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Browse through our extensive list of job opportunities across various industries
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/jobs">
              <Button size="lg" className="bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600 shadow-lg transform hover:-translate-y-1 transition-all duration-300 px-8 py-6 text-lg">
                Browse All Jobs
              </Button>
            </a>
            
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-blue-300 hover:bg-white hover:bg-opacity-10 shadow-lg transform hover:-translate-y-1 transition-all duration-300 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.16,77.81,113.34,55.55,175.33,42.92Z"></path>
        </svg>
      </div>
    </section>
  );
}