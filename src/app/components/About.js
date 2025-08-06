'use client';

export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#F5FFFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#4F7942' }}>
                Our Story
              </h2>
              <div className="w-20 h-1 rounded-full mb-8" style={{ backgroundColor: '#87A96B' }}></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Born in the heart of <span className="font-semibold" style={{ color: '#4F7942' }}>Illathupady, Edavanakkad</span>, 
                al.avo represents a passion for bringing you the finest avocado-based beverages and treats.
              </p>
              
              <p className="text-lg">
                We believe in the power of nature's green gold - the avocado. Rich in nutrients, 
                creamy in texture, and incredibly versatile, avocados form the foundation of our 
                carefully crafted menu.
              </p>
              
              <p className="text-lg">
                Our journey began with a simple vision: to create healthy, delicious, and 
                Instagram-worthy drinks that not only taste amazing but also nourish your body 
                and soul.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#4F7942' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold" style={{ color: '#4F7942' }}>Fresh</h3>
                <p className="text-sm text-gray-600">Daily sourced</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#87A96B' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold" style={{ color: '#4F7942' }}>Healthy</h3>
                <p className="text-sm text-gray-600">Nutrient rich</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#4F7942' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold" style={{ color: '#4F7942' }}>Energizing</h3>
                <p className="text-sm text-gray-600">Natural boost</p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/images/about.png" 
                  alt="About al.avo - Premium avocado beverages" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#87A96B' }}></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-15" style={{ backgroundColor: '#4F7942' }}></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 rounded-full opacity-25" style={{ backgroundColor: '#87A96B' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
} 