"use client";

import { useTranslations } from 'next-intl';
const AboutHeader = () => {
    const t = useTranslations('AboutPage'); 

    return (
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poltawski text-text-title font-semibold mb-4 tracking-wide">
                {t('headerTitle')}
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl">
                {t('headerDescription')}
            </p>
        </div>
    );
};

export default AboutHeader;