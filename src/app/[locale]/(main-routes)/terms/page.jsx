"use client";
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useTranslations } from 'next-intl';

const Terms = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tTermsPage = useTranslations('TermsPage');

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('termsAndConditionsTitle')}
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" },
                    { name: tSimpleHero('termsAndConditionsTitle'), href: "/terms" }
                ]}
            />
            <PageLayout>
                {/* Introduction Section */}
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-title">
                    {tTermsPage('introHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('introPara1')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('introPara2')}
                </p>

                {/* Use of Website Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tTermsPage('useOfWebsiteHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('useOfWebsitePara')}
                </p>

                {/* Confidential Information Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tTermsPage('confidentialInfoHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('confidentialInfoPara')}
                </p>

                {/* Copyright Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tTermsPage('copyrightHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('copyrightPara')}
                </p>

                {/* Privacy Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tTermsPage('privacyHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('privacyPara1')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('privacyPara2')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('privacyPara3')}
                </p>

                {/* Third Party Links Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tTermsPage('thirdPartyLinksHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('thirdPartyLinksPara')}
                </p>

                {/* Limitation of Liability Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tTermsPage('limitationOfLiabilityHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('limitationOfLiabilityPara')}
                </p>

                {/* Jurisdiction Section */}
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text-title">
                    {tTermsPage('jurisdictionHeading')}
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('jurisdictionPara1')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('jurisdictionPara2')}
                </p>

                {/* Thank You Section */}
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('thankYouPara1')}
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    {tTermsPage('thankYouPara2')}
                </p>
            </PageLayout>
        </div>
    );
};

export default Terms;