import { Link } from 'react-router-dom';
import { Sun, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import bgVideo from '../../images/background2.mp4';
import kaashvisolar1 from '../../images/kaashvisolar1.jpeg';

export function HomePage() {2
  return (
    <div className="bg-white">
      <section className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <h3 className="text-1.5xl sm:text-5xl md:text-4xl font-bold leading-tight">
                “ଆଜିହିଁ ଆପଣଙ୍କ ସୋଲାର ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ”<br />
                <span className="text-green-300"> <br />• ମୁକ୍ତ ପରାମର୍ଶ <br />• ଦକ୍ଷ ସ୍ଥାପନା <br />• ଭରସାଯୋଗ୍ୟ ସେବା</span>
              </h3>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                ବିଦ୍ୟୁତ୍ ବିଲ୍‌ର ଚିନ୍ତା ନାହିଁ
                <br />
                ଏକଥର ନିବେଶ – ଦୀର୍ଘକାଳୀନ ଲାଭ
                <br />
                ପରିବେଶ-ବନ୍ଧୁ ଓ ଭବିଷ୍ୟତ-ପ୍ରସ୍ତୁତ ଶକ୍ତି
                <br />
                ଭାରତୀୟ ଘର ଓ ବ୍ୟବସାୟ ପାଇଁ ଡିଜାଇନ୍
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  {/* <span>Get Free Quote</span> */}
                  {/* <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/gallery"
                  className="bg-white/90 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-200 border-2 border-white/30"
                > */}
                  View Our Projects
                </Link>
              </div>
            </div>

            <div className="relative">
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black flex items-center justify-center overflow-hidden">
        <div className="w-full max-h-[80vh] md:max-h-[90vh] flex items-center justify-center">
          <img
            src={kaashvisolar1}
            alt="Kaashvi Solar installation"
            className="w-full h-auto max-h-[80vh] md:max-h-[90vh] object-contain"
          />
        </div>
      </section>

      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Residential Solar Installation
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            High-efficiency panels and professional installation tailored to your home.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 shadow-lg transition"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/gallery"
              className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              View Our Projects
            </Link>
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
