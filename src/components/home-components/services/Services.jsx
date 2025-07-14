"use client";
import PageLayout from '@/components/layout/PageLayout';
import { servicesItems } from '@/data/data';
import { ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Services = () => {
    const t = useTranslations('Services');
    return (
        <PageLayout>
            <div className="py-16 md:py-24">
                <div className='flex flex-col justify-center items-center text-center mb-10 md:mb-16'>
                    <h1 className="font-poltawski text-3xl md:text-4xl text-text-title font-bold">
                        {t('title')}
                    </h1>
                    <p className="mt-4 text-sm md:text-lg text-text-muted max-w-2xl">
                        {t('description')}
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        servicesItems.map((service) => (
                            <div
                                key={service?._id}
                                className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <div className="w-full h-52 relative">
                                    <Image
                                        src={service?.image}
                                        alt={service?.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-t-xl"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="p-6 flex flex-col items-center text-left flex-1 *:flex-grow">
                                    <h2 className="text-xl text-center md:text-2xl font-semibold text-text-title mb-2 leading-tight">
                                        {service?.title}
                                    </h2>
                                    <p className="text-text-muted text-center text-base">
                                        {service?.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center flex-col gap-3 mt-8'>
                    <h3 className='text-text-title'>{t("contactUs")}</h3>
                    <ArrowDown className='text-text-muted' size={26} />
                </div>
            </div>
        </PageLayout>
    );
};

export default Services;