'use client';

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Classic Avocado Smoothie",
      description: "Creamy avocado blended with milk, honey, and a touch of vanilla",
      price: "₹180",
      category: "Smoothies",
      isPopular: true
    },
    {
      id: 2,
      name: "Avocado Mint Cooler",
      description: "Refreshing blend of avocado, fresh mint, lime, and coconut water",
      price: "₹160",
      category: "Coolers",
      isPopular: false
    },
    {
      id: 3,
      name: "Chocolate Avocado Shake",
      description: "Rich chocolate meets creamy avocado with a hint of coffee",
      price: "₹200",
      category: "Shakes",
      isPopular: true
    },
    {
      id: 4,
      name: "Tropical Avocado Fusion",
      description: "Avocado with mango, pineapple, and coconut cream",
      price: "₹220",
      category: "Fusion",
      isPopular: false
    },
    {
      id: 5,
      name: "Green Goddess Bowl",
      description: "Avocado smoothie bowl topped with granola, berries, and seeds",
      price: "₹250",
      category: "Bowls",
      isPopular: true
    },
    {
      id: 6,
      name: "Avocado Energy Booster",
      description: "Protein-packed blend with avocado, banana, spinach, and almond milk",
      price: "₹190",
      category: "Energy",
      isPopular: false
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#4F7942' }}>
            Our Menu
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto mb-8" style={{ backgroundColor: '#87A96B' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted selection of avocado-based beverages and treats, 
            each made with the finest ingredients and a whole lot of love.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:scale-105"
            >
              {/* Card Header */}
              <div 
                className="relative p-6"
                style={{
                  background: 'linear-gradient(to bottom right, #4F7942, #87A96B)'
                }}
              >
                {item.isPopular && (
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: 'white', color: '#4F7942' }}
                  >
                    Popular
                  </div>
                )}
                <div className="text-center text-white">
                  <div className="text-4xl mb-3">🥑</div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{ color: '#4F7942' }}>
                    {item.price}
                  </div>
                  <button 
                    className="text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 font-medium"
                    style={{ backgroundColor: '#4F7942' }}
                  >
                    Order Soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#F5FFFA' }}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#4F7942' }}>
              Coming Soon!
            </h3>
            <p className="text-gray-700 mb-6">
              We're putting the finishing touches on our recipes and getting ready to serve you 
              the most delicious avocado creations. Stay tuned for our grand opening!
            </p>
            <button 
              className="text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors duration-200 font-semibold"
              style={{ backgroundColor: '#4F7942' }}
            >
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 