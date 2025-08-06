'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        @keyframes fillUp {
          0% {
            y: 60px;
          }
          95% {
            y: 0px;
          }
          100% {
            y: 0px;
          }
        }
      `}</style>
      <nav className="fixed top-0 w-full z-50">
        {/* Light translucent background for top navbar */}
        <div className={`absolute top-0 w-full transition-all duration-700 ${
          !isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="w-full h-20 bg-black/20 backdrop-blur-sm border-b border-white/10"></div>
        </div>

        {/* Splash-shaped navbar container */}
        <div className={`absolute top-0 w-full transition-all duration-700 ${
          isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <svg 
            viewBox="0 0 1200 300" 
            className="w-full h-56" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="25%" stopColor="#4ade80" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="75%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Main splash shape */}
            <path 
              d="M0,25 C80,10 160,45 280,35 C400,25 520,50 640,40 C760,30 880,55 1000,45 C1120,35 1180,20 1200,25 
               C1190,70 1150,85 1050,90 C950,95 850,75 750,80 C650,85 550,70 450,75 C350,80 250,65 150,70 
               C50,75 20,60 0,65 Z" 
              fill="url(#splashGradient)" 
              filter="url(#glow)"
            />
            {/* Splash droplets */}
            <circle cx="150" cy="20" r="6" fill="#22c55e" opacity="0.8" />
            <circle cx="300" cy="40" r="4" fill="#16a34a" opacity="0.7" />
            <circle cx="600" cy="25" r="5" fill="#4ade80" opacity="0.6" />
            <circle cx="900" cy="45" r="7" fill="#22c55e" opacity="0.8" />
            <circle cx="1050" cy="30" r="4" fill="#86efac" opacity="0.7" />
            {/* Small droplets */}
            <circle cx="200" cy="15" r="2" fill="#86efac" opacity="0.9" />
            <circle cx="450" cy="35" r="3" fill="#22c55e" opacity="0.6" />
            <circle cx="750" cy="20" r="2" fill="#4ade80" opacity="0.8" />
          </svg>
        </div>

        {/* Single navbar content - works for both states */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="relative flex items-center transition-all duration-500 drop-shadow-lg group"
                >
                  <img 
                    src="/images/logo1.png" 
                    alt="al.avo logo" 
                    className="h-15 w-15 object-contain"
                  />
                  <div className="relative -ml-6">
                    {/* Main text with juice fill animation */}
                    <svg 
                      width="180" 
                      height="60" 
                      viewBox="0 0 180 60" 
                      className="overflow-visible"
                    >
                      <defs>
                        {/* Gradient for juice fill */}
                        <linearGradient id="juiceFill" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#16a34a" />
                          <stop offset="30%" stopColor="#22c55e" />
                          <stop offset="60%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="#86efac" />
                        </linearGradient>
                        
                        {/* Mask for fill animation */}
                        <mask id="fillMask">
                          <rect x="0" y="0" width="180" height="60" fill="black"/>
                          <rect 
                            x="0" 
                            y="60" 
                            width="180" 
                            height="60" 
                            fill="white"
                            className="animate-[fillUp_120s_linear_infinite]"
                          />
                        </mask>
                      </defs>
                      
                      {/* Background text */}
                      <text 
                        x="90" 
                        y="42" 
                        textAnchor="middle" 
                        className="text-4xl font-bold fill-white transition-colors duration-500"
                      >
                        al.avo
                      </text>
                      
                      {/* Filled text with juice gradient */}
                      <text 
                        x="90" 
                        y="42" 
                        textAnchor="middle" 
                        className="text-4xl font-bold"
                        fill="url(#juiceFill)"
                        mask="url(#fillMask)"
                      >
                        al.avo
                      </text>
                    </svg>
                  </div>
                </button>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-10">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-500 ${
                        isScrolled 
                          ? 'text-slate-800 hover:text-gray-700 hover:bg-white/30 drop-shadow-sm' 
                          : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-sm'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 transition-all duration-500 drop-shadow-sm ${
                    isScrolled 
                      ? 'text-white hover:text-green-100' 
                      : 'text-white hover:text-green-100'
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
          <div className={`mx-4 mt-3 px-6 pt-4 pb-6 space-y-2 transition-all duration-500 rounded-2xl ${
            isScrolled 
              ? 'bg-gradient-to-r from-green-400/90 to-green-500/90 backdrop-blur-md shadow-lg' 
              : 'bg-black/20 backdrop-blur-md border border-white/20'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-4 rounded-lg text-xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-800 hover:text-gray-700 hover:bg-white/30' 
                    : 'text-white hover:text-green-100 hover:bg-white/20'
                }`}
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