"use client";
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useTranslations } from 'next-intl';

const Desclimer = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tDisclaimerPage = useTranslations('DisclaimerPage'); 

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('disclaimerTitle')}
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" },
                    { name: tSimpleHero('disclaimerTitle'), href: "/disclaimer" } 
                ]}
            />
            <PageLayout>
                {/* Disclaimer Content */}
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tDisclaimerPage('para1')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tDisclaimerPage('para2')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tDisclaimerPage('para3')}
                </p>
            </PageLayout>
        </div>
    );
};

export default Desclimer;