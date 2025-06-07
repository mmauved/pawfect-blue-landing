
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-pet-white shadow-sm border-b border-pet-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🐕</span>
              <h1 className="font-fredoka text-2xl text-pet-blue-dark">PawTreats</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-pet-blue-dark hover:text-pet-blue-medium font-nunito font-semibold transition-colors">Home</a>
              <a href="#products" className="text-pet-blue-dark hover:text-pet-blue-medium font-nunito font-semibold transition-colors">Products</a>
              <a href="#about" className="text-pet-blue-dark hover:text-pet-blue-medium font-nunito font-semibold transition-colors">About</a>
              <a href="#contact" className="text-pet-blue-dark hover:text-pet-blue-medium font-nunito font-semibold transition-colors">Contact</a>
            </nav>
            <button className="bg-pet-blue-medium text-white px-6 py-2 rounded-full font-nunito font-semibold hover:bg-pet-blue-dark transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="paw-print mb-6">
              <h1 className="font-fredoka text-5xl md:text-7xl text-pet-blue-dark mb-4">
                Delicious Treats for Your Best Friend
              </h1>
            </div>
            <p className="font-nunito text-xl md:text-2xl text-pet-gray-medium mb-8 max-w-3xl mx-auto">
              Premium, all-natural pet treats made with love. Your furry friends deserve the best! 🐾
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pet-blue-medium text-white px-8 py-4 rounded-full font-nunito font-bold text-lg hover:bg-pet-blue-dark transition-all hover:scale-105">
                🛒 Shop Treats
              </button>
              <button className="border-2 border-pet-blue-medium text-pet-blue-dark px-8 py-4 rounded-full font-nunito font-bold text-lg hover:bg-pet-blue-light transition-all">
                📖 Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-pet-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fredoka text-4xl text-pet-blue-dark mb-4">Why Choose PawTreats?</h2>
            <p className="font-nunito text-lg text-pet-gray-medium">We care about your pet's health and happiness</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="treat-card p-8 rounded-2xl text-center border border-pet-blue-light">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-fredoka text-2xl text-pet-blue-dark mb-3">All Natural</h3>
              <p className="font-nunito text-pet-gray-medium">Made with organic ingredients, no artificial preservatives or fillers.</p>
            </div>
            
            <div className="treat-card p-8 rounded-2xl text-center border border-pet-blue-light">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-fredoka text-2xl text-pet-blue-dark mb-3">Made with Love</h3>
              <p className="font-nunito text-pet-gray-medium">Each treat is carefully crafted in small batches with love and care.</p>
            </div>
            
            <div className="treat-card p-8 rounded-2xl text-center border border-pet-blue-light">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-fredoka text-2xl text-pet-blue-dark mb-3">Vet Approved</h3>
              <p className="font-nunito text-pet-gray-medium">Recommended by veterinarians for optimal pet health and nutrition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-pet-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fredoka text-4xl text-pet-blue-dark mb-4">Our Popular Treats</h2>
            <p className="font-nunito text-lg text-pet-gray-medium">Tail-wagging favorites that pets absolutely love!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pet-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-pet-blue-light to-pet-blue-medium flex items-center justify-center">
                <span className="text-6xl">🦴</span>
              </div>
              <div className="p-6">
                <h3 className="font-fredoka text-xl text-pet-blue-dark mb-2">Crunchy Bone Bites</h3>
                <p className="font-nunito text-pet-gray-medium mb-4">Perfect for dental health and hours of chewing fun.</p>
                <div className="flex justify-between items-center">
                  <span className="font-nunito font-bold text-pet-blue-dark text-lg">$12.99</span>
                  <button className="bg-pet-blue-medium text-white px-4 py-2 rounded-full font-nunito font-semibold hover:bg-pet-blue-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-pet-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-pet-blue-light to-pet-blue-medium flex items-center justify-center">
                <span className="text-6xl">🥨</span>
              </div>
              <div className="p-6">
                <h3 className="font-fredoka text-xl text-pet-blue-dark mb-2">Soft Training Treats</h3>
                <p className="font-nunito text-pet-gray-medium mb-4">Bite-sized rewards perfect for training sessions.</p>
                <div className="flex justify-between items-center">
                  <span className="font-nunito font-bold text-pet-blue-dark text-lg">$8.99</span>
                  <button className="bg-pet-blue-medium text-white px-4 py-2 rounded-full font-nunito font-semibold hover:bg-pet-blue-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-pet-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-pet-blue-light to-pet-blue-medium flex items-center justify-center">
                <span className="text-6xl">🍪</span>
              </div>
              <div className="p-6">
                <h3 className="font-fredoka text-xl text-pet-blue-dark mb-2">Gourmet Cookies</h3>
                <p className="font-nunito text-pet-gray-medium mb-4">Special occasion treats for your special furry friend.</p>
                <div className="flex justify-between items-center">
                  <span className="font-nunito font-bold text-pet-blue-dark text-lg">$15.99</span>
                  <button className="bg-pet-blue-medium text-white px-4 py-2 rounded-full font-nunito font-semibold hover:bg-pet-blue-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-pet-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fredoka text-4xl text-pet-blue-dark mb-4">Happy Customers</h2>
            <p className="font-nunito text-lg text-pet-gray-medium">See what pet parents are saying about us!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pet-blue-light p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🐕</span>
                <div>
                  <h4 className="font-nunito font-bold text-pet-blue-dark">Sarah & Max</h4>
                  <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="font-nunito text-pet-gray-medium italic">
                "Max goes absolutely crazy for these treats! I've never seen him so excited. 
                The quality is amazing and I love that they're all natural."
              </p>
            </div>
            
            <div className="bg-pet-blue-light p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🐱</span>
                <div>
                  <h4 className="font-nunito font-bold text-pet-blue-dark">Mike & Luna</h4>
                  <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="font-nunito text-pet-gray-medium italic">
                "Even my picky cat Luna loves these! Great for training and she's so much 
                healthier since we switched to PawTreats."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pet-blue-medium to-pet-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fredoka text-4xl text-white mb-4">Ready to Treat Your Pet?</h2>
          <p className="font-nunito text-xl text-pet-blue-light mb-8">
            Join thousands of happy pet parents who trust PawTreats
          </p>
          <button className="bg-white text-pet-blue-dark px-8 py-4 rounded-full font-nunito font-bold text-lg hover:bg-pet-blue-light transition-all hover:scale-105">
            🛍️ Start Shopping Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pet-blue-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🐕</span>
                <h3 className="font-fredoka text-xl">PawTreats</h3>
              </div>
              <p className="font-nunito text-pet-blue-light">
                Premium pet treats made with love and natural ingredients.
              </p>
            </div>
            
            <div>
              <h4 className="font-fredoka text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="font-nunito text-pet-blue-light hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="font-nunito text-pet-blue-light hover:text-white transition-colors">Products</a></li>
                <li><a href="#about" className="font-nunito text-pet-blue-light hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="font-nunito text-pet-blue-light hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-fredoka text-lg mb-4">Customer Care</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-nunito text-pet-blue-light hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="font-nunito text-pet-blue-light hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="font-nunito text-pet-blue-light hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="font-nunito text-pet-blue-light hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-fredoka text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:scale-110 transition-transform">📘</a>
                <a href="#" className="text-2xl hover:scale-110 transition-transform">📷</a>
                <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-pet-blue-medium mt-8 pt-8 text-center">
            <p className="font-nunito text-pet-blue-light">
              © 2024 PawTreats. All rights reserved. Made with ❤️ for pets everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
