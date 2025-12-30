import { Link } from 'react-router-dom';
import { Sun, Zap, Shield, TrendingUp } from 'lucide-react';

// HERO IMAGES
// import heroBg from '../../images/hero-bg.png';     // screenshot background
import modiImg from '../../images/modi.png';       // modi image
import sliderGif from '../../images/slider2.gif';   // slider gif

export function HomePage() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-center">

            {/* LEFT – MODI IMAGE */}
            <div className="flex justify-center md:justify-start">
              <img
                src={modiImg}
                alt="PM Surya Ghar Yojana"
                className="max-h-[460px] object-contain"
              />
            </div>

            {/* CENTER – TEXT */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                “ଆଜିହିଁ ଆପଣଙ୍କ <br /> ସୋଲାର ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ”
              </h1>

              <ul className="text-lg text-gray-700 space-y-2">
                <li>• ମୁକ୍ତ ପରାମର୍ଶ</li>
                <li>• ଦକ୍ଷ ସ୍ଥାପନା</li>
                <li>• ଭରସାଯୋଗ୍ୟ ସେବା</li>
              </ul>

              <div className="flex gap-4 justify-center md:justify-start pt-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition shadow-md"
                >
                  Book Free Consultation
                </Link>

                <Link
                  to="/gallery"
                  className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  View Our Projects
                </Link>
              </div>
            </div>

            {/* RIGHT – PM SURYA GHAR CARD */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white border rounded-2xl shadow-xl p-6 w-full max-w-[680px]">

                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-yellow-500 mb-6">
                  PM SURYA GHAR YOJANA
                </h2>

                <img
                  src={sliderGif}
                  alt="PM Surya Ghar Solar Scheme"
                  className="w-full h-auto max-h-[520px] object-contain mx-auto"
                />

              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ================= RESIDENTIAL SECTION ================= */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
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

      {/* ================= WHY SOLAR ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solar Energy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of switching to clean, renewable solar power
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Save Money</h3>
              <p className="text-gray-600">
                Reduce electricity bills up to 90% with long-term solar savings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eco Friendly</h3>
              <p className="text-gray-600">
                Clean, renewable energy that protects our environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliable Power</h3>
              <p className="text-gray-600">
                25-year warranty ensures peace of mind and durability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of homeowners switching to affordable solar energy.
            </p>

            <div className="flex space-x-8">
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm">Installations</div>
              </div>
              <div>
                <div className="text-4xl font-bold">25</div>
                <div className="text-sm">Years Warranty</div>
              </div>
              <div>
                <div className="text-4xl font-bold">90%</div>
                <div className="text-sm">Savings</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl text-gray-900">
            <Zap className="h-14 w-14 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
            <p className="mb-6">
              Contact us for a free consultation and custom quote.
            </p>
            <Link
              to="/contact"
              className="block bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Contact Us Now
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
