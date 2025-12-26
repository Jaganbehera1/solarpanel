import { Link } from 'react-router-dom';
import { Sun, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Power Your Home with
                <span className="text-green-600"> Clean Solar Energy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your energy consumption with professional solar panel installation.
                Save money, reduce carbon footprint, and embrace sustainable living.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/gallery"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 border-2 border-green-600"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <Sun className="h-48 w-48 text-white opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Solar Energy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of switching to clean, renewable solar power for your home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save Money</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce your electricity bills by up to 90% with solar energy.
                Enjoy long-term savings and excellent return on investment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce your carbon footprint and contribute to a cleaner environment.
                Solar energy is 100% renewable and sustainable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable Power</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy consistent, reliable energy with minimal maintenance.
                Our panels come with 25-year warranties for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of homeowners who have already made the switch to clean,
                affordable solar energy. Get your free consultation today.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-5xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold">25</div>
                  <div className="text-sm opacity-90">Years Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold">90%</div>
                  <div className="text-sm opacity-90">Savings</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
                <Zap className="h-16 w-16 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h3>
                <p className="text-gray-600 mb-6">
                  Contact us for a free consultation and custom quote for your home.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
