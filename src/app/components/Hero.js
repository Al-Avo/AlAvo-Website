'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Fresh avocados - al.avo premium ingredients"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Green overlay to maintain brand colors and text readability */}
        <div 
          className="absolute inset-0 opacity-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(79, 121, 66, 0.9), rgba(135, 169, 107, 0.8), rgba(79, 121, 66, 0.9))'
          }}
        />
      </div>

      {/* Organic shapes overlay for extra texture */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <circle cx="200" cy="150" r="80" fill="white" />
          <circle cx="1000" cy="200" r="120" fill="white" />
          <circle cx="300" cy="600" r="60" fill="white" />
          <circle cx="900" cy="650" r="90" fill="white" />
          <ellipse cx="600" cy="100" rx="150" ry="80" fill="white" />
          <ellipse cx="150" cy="400" rx="100" ry="60" fill="white" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full mx-auto mt-50">
        {/* Logo/Brand name */}
        {/* <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            al.avo
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
        </div> */}
        
        {/* Main heading */}
        <div className="mb-8 overflow-x-auto">
          <h2 className="text-6xl sm:text-6xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md text-center whitespace-nowrap">
            Something New is Coming
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/95 mb-8 font-light drop-shadow-sm">
          Premium avocado-based juices & more
        </p>

        {/* CTA Button - moved down with increased top margin */}
        <div className="space-y-4 mt-55">
          <button 
            className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            Follow Us for Updates
          </button>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 text-white/80 mx-auto drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating avocado elements - reduced opacity to not compete with background image */}
      <div className="absolute top-20 left-10 opacity-10 animate-pulse">
        <div className="w-16 h-20 bg-white rounded-full transform rotate-12"></div>
      </div>
      <div className="absolute bottom-32 right-16 opacity-8 animate-pulse delay-1000">
        <div className="w-12 h-16 bg-white rounded-full transform -rotate-12"></div>
      </div>
      <div className="absolute top-1/3 right-10 opacity-5 animate-pulse delay-500">
        <div className="w-20 h-24 bg-white rounded-full transform rotate-6"></div>
      </div>
    </section>
  );
} 