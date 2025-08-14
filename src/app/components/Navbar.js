'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes waveMotion {
          0% {
            d: path("M0,15 C150,5 300,25 450,20 C600,10 750,30 900,25 C1050,15 1150,5 1200,10 L1200,90 C1150,85 1050,95 900,90 C750,85 600,100 450,95 C300,90 150,85 0,90 Z");
          }
          25% {
            d: path("M0,20 C150,10 300,20 450,15 C600,25 750,20 900,30 C1050,20 1150,10 1200,15 L1200,85 C1150,90 1050,85 900,95 C750,90 600,85 450,90 C300,95 150,90 0,85 Z");
          }
          50% {
            d: path("M0,10 C150,20 300,15 450,25 C600,20 750,10 900,20 C1050,25 1150,20 1200,25 L1200,95 C1150,85 1050,90 900,85 C750,95 600,90 450,85 C300,85 150,95 0,95 Z");
          }
          75% {
            d: path("M0,25 C150,15 300,30 450,25 C600,15 750,25 900,15 C1050,25 1150,15 1200,20 L1200,80 C1150,95 1050,80 900,90 C750,80 600,95 450,90 C300,80 150,85 0,80 Z");
          }
          100% {
            d: path("M0,15 C150,5 300,25 450,20 C600,10 750,30 900,25 C1050,15 1150,5 1200,10 L1200,90 C1150,85 1050,95 900,90 C750,85 600,100 450,95 C300,90 150,85 0,90 Z");
          }
        }
        
        .wave {
          animation: waveMotion 8s ease-in-out infinite;
        }
      `}</style>
      
      <nav className="fixed top-0 w-full z-50">
        {/* Single wave background */}
        <div className="absolute top-0 w-full">
          <svg 
            viewBox="0 0 1200 100" 
            className="w-full h-20" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="30%" stopColor="#166534" />
                <stop offset="60%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
              
              <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25"/>
              </filter>
            </defs>
            
            {/* Single animated wave with top and bottom movement */}
            <path 
              className="wave"
              d="M0,15 C150,5 300,25 450,20 C600,10 750,30 900,25 C1050,15 1150,5 1200,10 L1200,90 C1150,85 1050,95 900,90 C750,85 600,100 450,95 C300,90 150,85 0,90 Z"
              fill="url(#waveGradient)" 
              filter="url(#waveGlow)"
            />
          </svg>
        </div>

        {/* Navbar content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 pt-2">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="relative flex items-center transition-all duration-300"
                >
                  <img 
                    src="/images/logo1.png" 
                    alt="al.avo logo" 
                    className="h-12 w-12 object-contain drop-shadow-lg"
                  />
                  <img src="/images/alavo_curvy.png" alt="al.avo logo" className="h-12 w-24 object-contain drop-shadow-lg" />
                </button>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="px-4 py-2 text-lg font-bold transition-all duration-300 text-white hover:text-green-100 hover:scale-105 drop-shadow-lg"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 transition-all duration-300 text-white hover:text-green-100 hover:scale-105 drop-shadow-lg"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="mx-4 px-6 pt-4 pb-6 space-y-2 bg-gradient-to-br from-green-700/95 to-green-800/95 backdrop-blur-lg shadow-xl rounded-2xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-xl font-bold transition-all duration-300 text-white hover:text-green-50 hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
} 