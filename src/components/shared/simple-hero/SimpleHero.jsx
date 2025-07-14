"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const SimpleHero = ({
  title = "pageTitleDefault",
  breadcrumbs = [{ name: "home", href: "/" }],
  children,
}) => {
  const tSimpleHero = useTranslations('SimpleHero');
  const displayTitle = (title === "pageTitleDefault") ? tSimpleHero('pageTitleDefault') : title;

  return (
    <section className="relative h-40 sm:h-56 md:h-60 flex items-center justify-center text-center md:text-left">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/simple-hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-grow">
            {/* Breadcrumb Navigation */}
            <nav className="mb-2" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center md:justify-start space-x-2 text-white text-xs sm:text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-300" />}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-300">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.href} className="hover:text-gray-300 transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Page Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{displayTitle}</h1>
          </div>
          {children && <div className="mt-4 md:mt-0 flex-shrink-0">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
