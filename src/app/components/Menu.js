'use client';

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Avo Classic",
      description: "Creamy avocado blended with fresh milk",
      price: "₹70",
      category: "Avo Specials",
      image: "/images/avo_classic.jpg"
    },
    {
      id: 2,
      name: "Avo Cashew",
      description: "Fresh avocado blended with cashew and fresh milk",
      price: "₹99",
      category: "Avo Specials",
      image: "/images/avo_cashew.png"
    },
    {
      id: 3,
      name: "Avo Badam",
      description: "Fresh avocado blended with rich badam and topped with crunchy almond bits",
      price: "₹99",
      category: "Avo Specials",
      image: "/images/avo_badam.png"
    },
    {
      id: 4,
      name: "Avo Dates",
      description: "Fresh avocado blended with sweet dates and fresh milk for a rich and creamy shake",
      price: "₹89",
      category: "Avo Specials",
      image: "/images/avo_dates.png"
    },
    {
      id: 5,
      name: "AL AVO",
      description: "Our signature avocado blend loaded with mixed dry fruits and our special signature mix",
      price: "₹90",
      category: "Avo Specials",
      image: "/images/al_avo.png"
    },
    {
      id: 6,
      name: "ROYAL AVO",
      description: "A rich avocado delight with raw nuts, ice cream toppings, and creamy layers that make every sip a hunger killer",
      price: "₹130",
      category: "Avo Specials",
      image: "/images/royal_avo.png"
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
              <div className="p-6 text-center border-b border-gray-50 flex flex-col items-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center w-full">
                  {item.image.startsWith('/') ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full h-auto shadow-sm"
                    />
                  ) : (
                    item.image
                  )}
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
                  {/* <button
                    className="text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 font-medium text-sm"
                    style={{ backgroundColor: '#4F7942' }}
                  > */}
                  <a
                    href="https://wa.me/918590079110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 font-medium text-sm"
                    style={{ backgroundColor: '#4F7942' }}
                  >
                    Order Now
                  </a>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.9891426241998!2d76.2052411!3d10.0999739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08110ded5ea7d3%3A0x881561f2772d73d7!2sAL%20Avo!5e0!3m2!1sen!2ssg!4v1755191192471!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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