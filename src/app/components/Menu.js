'use client';

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Classic Avocado Smoothie",
      description: "Creamy avocado blended with fresh milk and a touch of honey",
      price: "₹180",
      category: "Smoothies",
      image: "🥑"
    },
    {
      id: 2,
      name: "Tropical Avocado Bowl",
      description: "Fresh avocado topped with tropical fruits and granola",
      price: "₹220",
      category: "Bowls",
      image: "🥥"
    },
    {
      id: 3,
      name: "Avocado Toast Deluxe",
      description: "Artisan bread with smashed avocado, cherry tomatoes, and herbs",
      price: "₹160",
      category: "Toast",
      image: "🍞"
    },
    {
      id: 4,
      name: "Green Goddess Juice",
      description: "Avocado, spinach, apple, and lime - the perfect green blend",
      price: "₹200",
      category: "Juices",
      image: "🍃"
    },
    {
      id: 5,
      name: "Chocolate Avocado Shake",
      description: "Rich chocolate meets creamy avocado for a guilt-free indulgence",
      price: "₹190",
      category: "Shakes",
      image: "🍫"
    },
    {
      id: 6,
      name: "Avocado Ice Cream",
      description: "Homemade avocado ice cream with natural sweeteners",
      price: "₹150",
      category: "Desserts",
      image: "🍦"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#4F7942' }}>
            Our Menu
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: '#4F7942' }}></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted avocado-based creations, made with the freshest ingredients
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className="p-6 text-center border-b border-gray-50">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#4F7942' }}>
                  {item.name}
                </h3>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: '#87A96B' }}
                >
                  {item.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#4F7942' }}>
                    {item.price}
                  </span>
                  <button 
                    className="text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 font-medium text-sm"
                    style={{ backgroundColor: '#4F7942' }}
                  >
                    Order Soon
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Location Map Section */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl p-8 max-w-4xl mx-auto" style={{ backgroundColor: '#F5FFFA' }}>
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#4F7942' }}>
              Visit Us
            </h3>
            <p className="text-gray-700 mb-6">
              Find us at Illathupady, Edavanakkad. We can't wait to serve you the freshest avocado creations!
            </p>
            
            {/* Embedded Google Map */}
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4686472!2d76.20641!3d9.97813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6d3%3A0x6c29c4d7e2c3a8b2!2sAl%20Avo%20-%20Illathupady%2C%20Edavanakkad!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin&markers=color:red%7Clabel:A%7C9.97813,76.20641"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Avo Location - Illathupady, Edavanakkad"
              ></iframe>
            </div>
            
            {/* Get Directions Button */}
            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/kCjxuKhSBPeye73fA?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors duration-200 font-semibold"
                style={{ backgroundColor: '#4F7942' }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 