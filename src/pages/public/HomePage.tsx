import { Link } from 'react-router-dom';
import { Sun, Zap, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ProjectsSection } from '../../components/ProjectsSection';

// HERO IMAGES
// import heroBg from '../../images/hero-bg.png';     // screenshot background
import modiImg from '../../images/modi.png';       // modi image
import sliderGif from '../../images/slider2.gif';   // slider gif

// SERVICE IMAGES
import annualMaintenance from '../../images/services/AMS_ihsufv.jpg';
import solarUpgradation from '../../images/services/Solar-Upgradation_zqb2mk.jpg';
import panelCleaning from '../../images/services/Solar-Panel-Cleaning_psz0u9.jpg';
import batteryMaintenance from '../../images/services/Battery-Maintenance_o9537u.jpg';
import inverterUpgrade from '../../images/services/Inverter-Upgrade_yoycho.jpg';
import installation from '../../images/services/Installation-solar_yly1qv.jpg';
import irrigation from '../../images/services/Solar-Irrigation-Pumping_zxg3pu.jpg';
import streetLight from '../../images/services/led-street-light-_m6bnnu.png';
// AFFILIATION IMAGES
import tpcodl from '../../images/affiliations/tpcodl.png';
import tpwodl from '../../images/affiliations/TPWODL.jpg';
import tpsodl from '../../images/affiliations/TPSODL-Logo-Eng.jpg';
import tpnodl from '../../images/affiliations/tpnodl.jpg';
import nsic from '../../images/affiliations/nsic-registration-services-550-x-366.jpg';
import msme from '../../images/affiliations/MSME-Certificate-Service.jpg';
import indiamart from '../../images/affiliations/Indiamart.png';
import googleRating from '../../images/affiliations/google-rating.png';
import iitLogo from '../../images/affiliations/iit-bhubneswar-01.jpg';

import workImg from '../../images/work/work5.jpeg';

export function HomePage() {
  const { t } = useLanguage();

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
                {t('hero_line1')}<br />{t('hero_line2')}
              </h1>

              <ul className="text-lg text-gray-700 space-y-2">
                <li>• {t('hero_bullet_1')}</li>
                <li>• {t('hero_bullet_2')}</li>
                <li>• {t('hero_bullet_3')}</li>
              </ul>

              <div className="flex gap-4 justify-center md:justify-start pt-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition shadow-md"
                >
                  {t('book_consult')}
                </Link>

                <Link
                  to="/gallery"
                  className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  {t('view_projects')}
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

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
            <p className="text-gray-600 mt-3">
              End-to-end solar services for residential & commercial needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: annualMaintenance, title: 'Annual Maintenance' },
              { img: solarUpgradation, title: 'Solar Upgradation' },
              { img: panelCleaning, title: 'Solar Panel Cleaning' },
              { img: batteryMaintenance, title: 'Battery Maintenance' },
              { img: inverterUpgrade, title: 'Inverter Upgrade' },
              { img: installation, title: 'Installation' },
              { img: irrigation, title: 'Solar Irrigation Pumping' },
              { img: streetLight, title: 'Solar Street Lighting' },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/35 flex items-end">
                  <div className="w-full bg-blue-900/90 text-white text-center py-3 text-lg font-bold">
                    {service.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center lg:text-left">
            How We Work
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* LEFT — STEPS */}
            <div className="relative pl-12 order-2 lg:order-1">

              {/* Vertical Line */}
              <div className="absolute left-4 top-2 bottom-2 w-[3px] bg-orange-200 rounded-full"></div>

              {[
                {
                  title: 'Contact Us',
                  desc: 'Easily reach out to our support team to inquire about our range of solar products.',
                },
                {
                  title: 'Estimation',
                  desc: 'Receive a comprehensive solar installation quote tailored to your needs.',
                },
                {
                  title: 'Execution',
                  desc: 'Ensuring perfect implementation of your solar system.',
                },
                {
                  title: 'Maintenance',
                  desc: 'Reliable maintenance services to keep your system running smoothly.',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 mb-16">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg z-10">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* RIGHT — IMAGE */}
            <div className="flex justify-center lg:justify-end items-end order-1 lg:order-2">
              <img
                src={workImg}
                alt="How We Work"
                className="h-[420px] sm:h-[460px] lg:h-[520px] w-auto object-contain bg-white"
              />
            </div>
            
          </div>
        </div>
      </section>
      

      {/* ================= OUR AFFILIATIONS ================= */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Affiliations
            </h2>

            {/* TPCODL TEXT (FROM IMAGE) */}
            <p className="mt-4 text-xl font-semibold text-gray-800">
              We are <span className="text-blue-700 font-extrabold">TPCODL empanelled vendor!</span>
            </p>

            <p className="mt-2 text-sm sm:text-base text-gray-600">
              (No : TPCODL/P&amp;S/23-23/Simplified/RTS/EO/6017)
            </p>
          </div>

          {/* LOGO GRID */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">

            {/* TPCODL */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
              <img src={tpcodl} alt="TPCODL" className="h-20 sm:h-24 md:h-28 object-contain" />
              <span className="mt-2 text-green-600 font-semibold text-sm">✔ Empanelled</span>
            </div>

            {/* GOOGLE RATING */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
              <img src={googleRating} alt="Google Rating" className="h-20 sm:h-24 md:h-28 object-contain" />
              <span className="mt-2 text-yellow-500 font-bold text-lg">⭐ 4.9</span>
            </div>

            {/* INDIAMART */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
              <img src={indiamart} alt="IndiaMART Verified" className="h-20 sm:h-24 md:h-28 object-contain" />
              <span className="mt-2 text-green-600 font-semibold text-sm">✔ Verified</span>
            </div>

            {/* NSIC */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex items-center justify-center">
              <img src={nsic} alt="NSIC" className="h-20 sm:h-24 md:h-28 object-contain" />
            </div>

            {/* TPWODL */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex items-center justify-center">
              <img src={tpwodl} alt="TPWODL" className="h-20 sm:h-24 md:h-28 object-contain" />
            </div>

            {/* IIT */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex items-center justify-center">
              <img src={iitLogo} alt="IIT" className="h-20 sm:h-24 md:h-28 object-contain" />
            </div>

            {/* TPSODL */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex items-center justify-center">
              <img src={tpsodl} alt="TPSODL" className="h-20 sm:h-24 md:h-28 object-contain" />
            </div>

            {/* TPNODL */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex items-center justify-center">
              <img src={tpnodl} alt="TPNODL" className="h-20 sm:h-24 md:h-28 object-contain" />
            </div>

            {/* MSME */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4 flex items-center justify-center">
              <img src={msme} alt="MSME" className="h-20 sm:h-24 md:h-28 object-contain" />
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
                <div className="text-4xl font-bold">25<span className="text-red-600 font-extrabold ml-1">*</span></div>
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

      {/* ================= PROJECTS PREVIEW (copied from Gallery) ================= */}
      <ProjectsSection limit={6} />

    </div>
  );
}
