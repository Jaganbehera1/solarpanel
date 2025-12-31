import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import KSELogo from '../../images/KSE.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { t, lang, setLang } = useLanguage();

  const links = [
    { to: '/', label: t('nav_home') },
    { to: '/about', label: t('nav_about') },
    { to: '/services', label: t('nav_services') },
    { to: '/gallery', label: t('nav_projects') },
    { to: '/contact', label: t('nav_contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-green-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={KSELogo} alt="Kaashvi Solar Enterprises" className="h-9 w-9 object-cover rounded-full" />
              <span className="text-1.5xl md:text-3xl font-extrabold text-white tracking-wide">
                Kaashvi Solar Enterprises
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  isActive(link.to)
                    ? 'text-yellow-300 border-b-2 border-yellow-300'
                    : 'text-white hover:text-yellow-300'
                } transition-colors duration-200 font-medium pb-1`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Single language toggle button */}
            <div className="flex items-center ml-4">
              <button
                onClick={() => setLang(lang === 'od' ? 'en' : 'od')}
                className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 text-white"
                aria-label="Toggle language"
              >
                {lang === 'od' ? t('language_short_en') : t('language_short_od')}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 border-t border-green-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.to)
                    ? 'bg-yellow-300 text-green-700'
                    : 'text-white hover:bg-green-600'
                } block px-3 py-2 rounded-md font-medium transition`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
