"use client";
import PageLayout from '@/components/layout/PageLayout';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import StaticPageSkeleton from '@/components/shared/StaticPageSkeleton';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const Desclimer = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tDisclaimerPage = useTranslations('DisclaimerPage');
    const tCommon = useTranslations('common');

    const { data, isLoading, isError } = useQuery({
        queryKey: ["disclaimer"],
        queryFn: () => api.get('/dashboard/disclaimer')
    })

    const disclaimer = data?.data?.data?.description

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
                {isLoading && <StaticPageSkeleton />}
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadFraud')} />}
                {!isLoading && !isError && disclaimer && disclaimer.length > 0 ?
                    <div dangerouslySetInnerHTML={{ __html: disclaimer }}></div> :
                    !isLoading && !isError && <p>{tDisclaimerPage('noFraudAvailable')}</p>
                }
            </PageLayout>
        </div>
    );
};

export default Desclimer;