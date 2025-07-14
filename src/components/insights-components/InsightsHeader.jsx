"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const InsightsHeader = ({title, link}) => {
    const t = useTranslations('InsightsHeader');
    return (
        <div>
            <div className='flex items-end justify-between'>
                <h1 className='font-poltawski text-3xl md:text-4xl text-text-title font-bold'>{title}</h1>
                <Link href={link} className="text-btn-bg text-sm md:text-base hover:underline font-semibold">{t('viewAll')}</Link>
            </div>

            <div className='border-t border-gray-200 my-4 md:my-8'></div>
        </div>
    );
};

export default InsightsHeader;