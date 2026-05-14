'use client';

import Image from 'next/image';

export default function Hero() {
  // Generate random bubble properties
  const generateBubbles = () => {
    const bubbles = [];
    // Responsive bubble count: fewer on mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const bubbleCount = isMobile ? 12 : 18; // 12 on mobile, 18 on desktop

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        id: i,
        size: Math.random() * 40 + 20, // 20-60px
        left: Math.random() * 100, // Even distribution across full width (0-100%)
        delay: Math.random() * 4, // 0-4s delay for good spacing
        duration: Math.random() * 4 + 6, // 6-10s duration
        opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7 opacity
      });
    }
    return bubbles;
  };

  const bubbles = generateBubbles();

  return (
    <>
      <style jsx>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: var(--bubble-opacity);
            transform: translateY(-10vh) translateX(5px) scale(1);
          }
          25% {
            transform: translateY(-25vh) translateX(15px) scale(1);
          }
          50% {
            transform: translateY(-50vh) translateX(-10px) scale(1);
          }
          75% {
            transform: translateY(-75vh) translateX(8px) scale(1);
          }
          90% {
            opacity: var(--bubble-opacity);
            transform: translateY(-90vh) translateX(-5px) scale(1);
          }
          100% {
            transform: translateY(-100vh) translateX(0px) scale(0);
            opacity: 0;
          }
        }

        .bubble {
          position: absolute;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(200, 255, 200, 0.9), rgba(79, 121, 66, 0.8), rgba(34, 79, 34, 0.7));
          border-radius: 50%;
          animation: bubble-rise var(--duration) linear var(--delay) infinite;
          pointer-events: none;
          --bubble-opacity: var(--opacity);
          --duration: var(--bubble-duration);
          --delay: var(--bubble-delay);
          box-shadow: inset 0 0 15px rgba(150, 255, 150, 0.4), 0 0 25px rgba(79, 121, 66, 0.3);
        }

        @keyframes float-btn {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-4px) scale(1.05); }
        }

        .hover-float:hover {
          animation: float-btn 1.5s ease-in-out infinite;
        }
      `}</style>

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
          {/* Green overlay to enhance juice glass effect */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(to bottom, rgba(79, 121, 66, 0.7), rgba(135, 169, 107, 0.5), rgba(79, 121, 66, 0.8))'
            }}
          />
        </div>

        {/* Animated Juice Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="bubble"
              style={{
                left: `${bubble.left}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                '--bubble-duration': `${bubble.duration}s`,
                '--bubble-delay': `${bubble.delay}s`,
                '--opacity': bubble.opacity,
              }}
            />
          ))}
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
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md text-center">
              Something New is Here!
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/95 mb-8 font-light drop-shadow-sm">
            Premium avocado-based juices & more
          </p>

          {/* CTA Button - moved down with increased top margin */}
          <div className="space-y-4 mt-55">
            {/* <button
              className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Follow Us for Updates
            </button> */}
            <a
              href="https://www.instagram.com/al.avo?igsh=MW5lbm9udGlxcnBjdg=="
              target="_blank"
              rel="noopener noreferrer"
              // className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              className="group inline-flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-900/20 backdrop-blur-sm hover-float"

            >
              <span>Follow Us for Updates</span>
              <svg 
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <svg className="w-6 h-6 text-white/80 mx-auto drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 