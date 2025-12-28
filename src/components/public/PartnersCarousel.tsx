import logo1 from '../../images/CRI.png';
import logo2 from '../../images/eastman.png';
import logo3 from '../../images/HR solar.jpg';
import logo4 from '../../images/ksb-logo.png';
import logo5 from '../../images/Microtek-Logo-Vector.svg-.png';
import logo6 from '../../images/okaya.png';

export function PartnersCarousel() {
  const logos = [
    { src: logo1, name: 'CRI' },
    { src: logo2, name: 'Eastman' },
    { src: logo3, name: 'HR Solar' },
    { src: logo4, name: 'KSB' },
    { src: logo5, name: 'Microtek' },
    { src: logo6, name: 'OKAYA' },
  ];

  // Duplicate logos for seamless infinite scroll
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
          <p className="text-gray-600 text-lg">We partner with the best brands in the solar industry</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll">
            {repeatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4 sm:px-6 py-8 flex items-center justify-center"
              >
                <div className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }

          .animate-scroll {
            animation: scroll 10s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
