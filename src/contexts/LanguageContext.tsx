import React, { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'en' | 'od';

const translations: Record<Lang, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    language_od: 'Odia (Default)',
    language_en: 'English',
    language_short_od: 'OD',
    language_short_en: 'EN',
    hero_line1: 'Start your solar journey today',
    hero_line2: 'Reliable, affordable solar installations',
    hero_bullet_1: 'Free Consultation',
    hero_bullet_2: 'Skilled Installation',
    hero_bullet_3: 'Trusted Service',
    book_consult: 'Book Free Consultation',
    view_projects: 'View Our Projects',
    residential_heading: 'Residential Solar Installation',
    residential_text: 'High-efficiency panels and professional installation tailored to your home.',
    ready_to_go: 'Ready to Go Solar?',
    contact_us_now: 'Contact Us Now',
  },
  od: {
    nav_home: 'ହୋମ୍',
    nav_about: 'ଆମ ବିଷୟରେ',
    nav_services: 'ସେବାଗୁଡିକ',
    nav_projects: 'ପ୍ରକଳ୍ପ',
    nav_contact: 'ସଂପର୍କ',
    language_od: 'ଓଡ଼ିଆ (ଡିଫଲ୍ଟ)',
    language_en: 'ଇଂରାଜୀ',
    language_short_od: 'ଓଡ଼ିଆ',
    language_short_en: 'EN',
    hero_line1: 'ଆଜି ହିଁ ଆରମ୍ଭ କରନ୍ତୁ',
    hero_line2: 'ଭରସା ଯୋଗ୍ୟ, ସସ୍ତା ସୋଲାର ସ୍ଥାପନା',
    hero_bullet_1: 'ମୁକ୍ତ ପରାମର୍ଶ',
    hero_bullet_2: 'କୌଶଳ ଥିବା ସ୍ଥାପନା',
    hero_bullet_3: 'ଭରସାଯୋଗ୍ୟ ସେବା',
    book_consult: 'ମୁକ୍ତ ପରାମର୍ଶ ବୁକ୍ କରନ୍ତୁ',
    view_projects: 'ଆମର ପ୍ରକଳ୍ପ ଦେଖନ୍ତୁ',
    residential_heading: 'ଘରୋଇ ସୋଲାର ଇନ୍‌ସ୍ଟଲେସନ୍',
    residential_text: 'ଉଚ୍ଚ କାର୍ଯ୍ୟକ୍ଷମ ପ୍ୟାନେଲ ଏବଂ ପ୍ରଫେସିନାଲ୍ ଇନ୍‌ସ୍ଟଲେସନ୍ ।',
    ready_to_go: 'ସୋଲାର ଆରମ୍ଭ କରିବାକୁ ପ୍ରସ୍ତୁତ?',
    contact_us_now: 'ଏବେ ସଂପର୍କ କରନ୍ତୁ',
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: 'od', setLang: () => {}, t: (k) => k });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('kse_lang');
      return (stored as Lang) || 'od';
    } catch {
      return 'od';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kse_lang', lang);
    } catch {}
  }, [lang]);

  const t = (key: string) => translations[lang][key] || translations['en'][key] || key;

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
