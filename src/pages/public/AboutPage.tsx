import { Users, Award, Target, Heart } from 'lucide-react';
import kaashvi2 from '../../images/kaashvisolar2.jpeg';
import bgVideo from '../../images/background2.mp4';

export function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden w-full min-h-[350px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[600px]">
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" />
      </section>

      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-8 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">About Kaashvi Solar Enterprises</h1>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              ✔ ଖୋର୍ଦ୍ଧା ଓ ଓଡିଶାର ବିଶ୍ୱସନୀୟ ସୋଲାର ପ୍ରଦାନକାରୀ<br />
              ✔ ଘର ଓ ବ୍ୟବସାୟ ପାଇଁ ଶୁଭ ସୋଲାର ସମାଧାନ<br />
              ✔ ବିଦ୍ୟୁତ୍ ବିଲ୍ କମେଇବାରେ ସହାୟକ<br />
              ✔ ପ୍ରବୀଣ ସ୍ଥାପନା ଓ ସହାୟତା<br />
              ✔ ପରିବେଶ-ମେଳା ଦୀର୍ଘ ସେବା<br />
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded with a vision to transform how homes consume energy, Solar Enterprises
                  has been at the forefront of the renewable energy revolution for over a decade.
                </p>
                <p>
                  We started with a simple belief: every home deserves access to clean, affordable,
                  and reliable solar energy. Today, we've helped thousands of families reduce their
                  carbon footprint while significantly lowering their energy costs.
                </p>
                <p>
                  Our team of certified professionals brings expertise, passion, and dedication to
                  every project. From initial consultation to final installation and beyond, we're
                  committed to delivering excellence at every step.
                </p>
              </div>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 border-8 border-white transform hover:scale-105 transition-all duration-300">
              <img
                src={kaashvi2}
                alt="Kaashvi Solar installation"
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for perfection in every installation, ensuring the highest quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-600">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to protecting our planet through renewable energy solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-600">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. We're here to support you every step of the way.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing, honest advice, and reliable service you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 rounded-3xl p-8 sm:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto">
                To empower every household with sustainable, affordable solar energy solutions,
                creating a cleaner, brighter future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
