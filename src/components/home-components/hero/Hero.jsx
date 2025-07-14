
"use client"; 

import { useTranslations } from "next-intl";

const Hero = () => { 
  const t = useTranslations('Hero'); 

  const stats = [
    {
      number: "20K",
      labelKey: "totalProBonoHours",
    },
    {
      number: "3.8K+",
      labelKey: "clients",
    },
    {
      number: "10k+",
      labelKey: "cases",
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-88px)] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-16 sm:mb-20 lg:mb-24 leading-tight">
          <i className="block font-poltawski">{t('mainHeading')}</i>
        </h1>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center rounded-xl backdrop-blur-lg bg-white/10 py-8 px-3">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#C9B164] mb-2 sm:mb-4">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-[#C9B164] font-medium">
                {t(`stats.${stat.labelKey}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;