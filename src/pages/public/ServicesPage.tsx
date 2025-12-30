import {
  Home,
  Building2,
  Wrench,
  LineChart,
  Battery,
  Sun,
} from 'lucide-react';

import bgVideo from '../../images/background3.mp4';

// Service images
import annualMaintenance from '../../images/services/AMS_ihsufv.jpg';
import solarUpgradation from '../../images/services/Solar-Upgradation_zqb2mk.jpg';
import panelCleaning from '../../images/services/Solar-Panel-Cleaning_psz0u9.jpg';
import batteryMaintenance from '../../images/services/Battery-Maintenance_o9537u.jpg';
import inverterUpgrade from '../../images/services/Inverter-Upgrade_yoycho.jpg';
import installation from '../../images/services/Installation-solar_yly1qv.jpg';
import irrigation from '../../images/services/Solar-Irrigation-Pumping_zxg3pu.jpg';
import streetLight from '../../images/services/led-street-light-_m6bnnu.png';

export function ServicesPage() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[420px] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Comprehensive solar solutions from consultation to installation and long-term maintenance.
          </p>
        </div>
      </section>

      {/* ================= IMAGE SERVICES GRID ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
            <p className="text-gray-600 mt-3">
              End-to-end solar services for residential & commercial needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="w-full bg-pink-600/90 text-white text-center py-3 text-lg font-bold">
                    {service.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">

          {/* Residential */}
          <ServiceCard
            icon={<Home className="h-10 w-10 text-white" />}
            title="Residential Solar"
            color="blue"
            items={[
              'Free home energy assessment',
              'Custom system design',
              'Professional installation',
              '25-year warranty',
            ]}
          />

          {/* Commercial */}
          <ServiceCard
            icon={<Building2 className="h-10 w-10 text-white" />}
            title="Commercial Solar"
            color="green"
            items={[
              'ROI analysis',
              'Scalable design',
              'Minimal disruption',
              'Maintenance support',
            ]}
          />

          {/* Design */}
          <ServiceCard
            icon={<Sun className="h-10 w-10 text-white" />}
            title="System Design"
            color="yellow"
            items={[
              'Site assessment',
              'Energy analysis',
              '3D visualization',
              'Production guarantee',
            ]}
          />

          {/* Maintenance */}
          <ServiceCard
            icon={<Wrench className="h-10 w-10 text-white" />}
            title="Maintenance & Support"
            color="red"
            items={[
              'Annual inspection',
              'Panel cleaning',
              'Monitoring',
              '24/7 support',
            ]}
          />

          {/* Battery */}
          <ServiceCard
            icon={<Battery className="h-10 w-10 text-white" />}
            title="Battery Storage"
            color="purple"
            items={[
              'Latest batteries',
              'Backup power',
              'Smart management',
              '10-year warranty',
            ]}
          />

          {/* Monitoring */}
          <ServiceCard
            icon={<LineChart className="h-10 w-10 text-white" />}
            title="Energy Monitoring"
            color="teal"
            items={[
              'Real-time tracking',
              'Alerts',
              'Usage analytics',
              'Performance reports',
            ]}
          />

        </div>
      </section>
    </div>
  );
}

/* ================= REUSABLE CARD ================= */
function ServiceCard({
  icon,
  title,
  color,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  items: string[];
}) {
  return (
    <div className={`bg-${color}-50 border-l-4 border-${color}-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition`}>
      <div className={`bg-${color}-600 w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex">
            <span className={`text-${color}-600 mr-2 font-bold`}>✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
