"use client"; 

import Image from "next/image";
import { newsData } from "@/data/data";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import { useTranslations } from "next-intl"; 
import React from "react"; 

export default function NewsletterDetails({ params }) {
    const tNewslettersPage = useTranslations('NewslettersPage'); 
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const { id } = React.use(params); 

    const item = newsData.find((item) => item._id === id);

    if (!item) {
        return (
            <div className="min-h-minus-header flex items-center justify-center">
                <p className="text-lg text-red-500">{tNewslettersPage('newsletterNotFound')}</p>
            </div>
        );
    }

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" }, 
        { name: tSimpleHero('insightsTitle'), href: "/insights" }, 
        { name: tSimpleHero('newslettersTitle'), href: "/insights/newsletters" },
        { name: tSimpleHero('detailsTitle'), href: `/insights/newsletters/${item._id}` }
    ];

    return (
        <div>
            <SimpleHero
                title={tSimpleHero('detailsTitle')} 
                breadcrumbs={breadcrumbs}
            />
            <PageLayout>
                <p className="text-lg md:text-2xl text-text-muted mb-2 md:mb-4">{item.date}</p>
                <h1 className="font-poltawski text-2xl md:text-5xl font-bold mb-8 md:mb-12 text-text-title">
                    {item.title}
                </h1>

                <div className="relative w-full aspect-[16/5] rounded-xl overflow-hidden mb-8">
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <p className="md:text-xl text-sm px-2 text-gray-700 leading-relaxed">
                    {item.summary}
                </p>
            </PageLayout>
        </div>
    );
}