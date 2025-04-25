"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-blue-500 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="bg-white p-2 rounded-full transform group-hover:rotate-12 transition-all duration-300">
              <Briefcase className="h-7 w-7 text-blue-800" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">RECRUITER</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <a href="/" className="px-4 py-2 rounded-md text-blue-400 hover:bg-white hover:bg-opacity-10 transition-colors">
              Home
            </a>
            <a href="/jobs" className="px-4 py-2 rounded-md text-blue-400 hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
              Jobs
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="/about" className="px-4 py-2 rounded-md text-blue-400 hover:bg-white hover:bg-opacity-10 transition-colors">
              About
            </a>
            <a href="/contact" className="px-4 py-2 rounded-md text-blue-400 hover:bg-white hover:bg-opacity-10 transition-colors">
              Contact
            </a>
          </nav>

          {/* Join Button (Desktop) */}
          <div className="hidden md:block">
            <a href="/signup">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 shadow-md transform hover:-translate-y-1 transition-all duration-300" disabled>
                Support
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-10" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              <a href="/" className="px-4 py-3 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors">
                Home
              </a>
              <a href="/jobs" className="px-4 py-3 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-between">
                Jobs
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="/about" className="px-4 py-3 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors">
                About
              </a>
              <a href="/contact" className="px-4 py-3 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors">
                Contact
              </a>
              <div className="pt-2">
                <a href="/signup" className="block">
                  <Button className="w-full bg-white text-blue-800 hover:bg-blue-50">
                    Join Now
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"></div>
    </header>
  );
}