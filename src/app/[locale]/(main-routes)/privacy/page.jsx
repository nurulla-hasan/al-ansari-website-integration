"use client";
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useTranslations } from 'next-intl';

const Privacy = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tPrivacyPage = useTranslations('PrivacyPage');

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('privacyPolicyTitle')} 
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" }, 
                    { name: tSimpleHero('privacyPolicyTitle'), href: "/privacy" }
                ]}
            />
            <PageLayout>
                {/* Introduction Section */}
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-title">
                    {tPrivacyPage('introHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tPrivacyPage('introPara1')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tPrivacyPage('introPara2')}
                </p>

                {/* Restrictions on Use of Materials Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tPrivacyPage('restrictionsHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tPrivacyPage('restrictionsPara')}
                </p>

                {/* Choice of Law and Jurisdiction Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tPrivacyPage('choiceOfLawHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tPrivacyPage('choiceOfLawPara')}
                </p>
            </PageLayout>
        </div>
    );
};

export default Privacy;