import { Users, Award, Target, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Solar Enterprises</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the solar revolution with innovative solutions and exceptional service.
              Committed to making clean energy accessible to every home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
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
            <div className="bg-gradient-to-br from-green-400 to-blue-500 h-96 rounded-2xl shadow-xl"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every installation, ensuring the highest quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Committed to protecting our planet through renewable energy solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to support you every step of the way.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Transparent pricing, honest advice, and reliable service you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl leading-relaxed max-w-4xl mx-auto">
              To empower every household with sustainable, affordable solar energy solutions,
              creating a cleaner, brighter future for generations to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
