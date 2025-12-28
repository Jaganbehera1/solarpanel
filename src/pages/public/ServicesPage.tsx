import { Home, Building2, Wrench, LineChart, Battery, Sun } from 'lucide-react';
import bgVideo from '../../images/background3.mp4';

export function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-green-600 to-blue-600 py-32 relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Our Services</h1> */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solar solutions tailored to your unique energy needs.
              From consultation to installation and maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-600">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <Home className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Residential Solar</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Transform your home with our premium residential solar panel installations.
                We design custom systems that maximize energy production while seamlessly
                integrating with your home's architecture.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>Free home energy assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>Custom system design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>Professional installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>25-year warranty included</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-600">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Commercial Solar</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Power your business with sustainable energy solutions. Our commercial solar
                systems help businesses reduce operational costs while demonstrating
                environmental responsibility.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">✓</span>
                  <span>ROI analysis and projections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">✓</span>
                  <span>Scalable system design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">✓</span>
                  <span>Minimal business disruption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">✓</span>
                  <span>Ongoing maintenance support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-600">
              <div className="bg-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <Sun className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">System Design</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Expert solar system design optimized for your location, roof structure,
                and energy consumption patterns. We ensure maximum efficiency and return
                on investment.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 font-bold">✓</span>
                  <span>Site assessment and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 font-bold">✓</span>
                  <span>Energy consumption analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 font-bold">✓</span>
                  <span>3D system visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 font-bold">✓</span>
                  <span>Production guarantees</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-600">
              <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Keep your solar system running at peak performance with our comprehensive
                maintenance services. We provide regular inspections, cleaning, and repairs
                to ensure optimal energy production.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✓</span>
                  <span>Annual system inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✓</span>
                  <span>Panel cleaning services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✓</span>
                  <span>Performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-600">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <Battery className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Battery Storage</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Maximize your energy independence with advanced battery storage solutions.
                Store excess solar energy for use during peak hours or power outages,
                ensuring continuous power supply.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>Latest battery technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>Backup power capability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>Smart energy management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>10-year warranty</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-teal-600">
              <div className="bg-teal-600 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <LineChart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Energy Monitoring</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Track your energy production and consumption in real-time with our advanced
                monitoring systems. Get detailed insights and optimize your energy usage
                for maximum savings.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Real-time monitoring app</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Production alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Usage analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Performance reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how solar energy
            can transform your home or business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
