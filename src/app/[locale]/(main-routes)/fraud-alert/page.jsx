"use client";
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useTranslations } from 'next-intl';

const FroudAlert = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tFraudAlertPage = useTranslations('FraudAlertPage');

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('fraudAlertTitle')}
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" }, 
                    { name: tSimpleHero('fraudAlertTitle'), href: "/fraud-alert" } 
                ]}
            />
            <PageLayout>
                {/* Fraud Alert Content */}
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-title">
                    {tFraudAlertPage('mainHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tFraudAlertPage('para1')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tFraudAlertPage('para2')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tFraudAlertPage('para3')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tFraudAlertPage('para4')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tFraudAlertPage('para5')}
                </p>
            </PageLayout>
        </div>
    );
};

export default FroudAlert;