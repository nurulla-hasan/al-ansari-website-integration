"use client";
import PageLayout from '@/components/layout/PageLayout';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import StaticPageSkeleton from '@/components/shared/StaticPageSkeleton';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const FroudAlert = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tFraudAlertPage = useTranslations('FraudAlertPage');
    const tCommon = useTranslations('common');

    const { data, isLoading, isError } = useQuery({
        queryKey: ["fraud"],
        queryFn: () => api.get('/dashboard/fraud')
    })

    const fraud = data?.data?.data?.description

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
                {isLoading && <StaticPageSkeleton />}
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadFraud')} />}
                {!isLoading && !isError && fraud && fraud.length > 0 ?
                    <div dangerouslySetInnerHTML={{ __html: fraud }}></div> :
                    !isLoading && !isError && <p>{tFraudAlertPage('noFraudAvailable')}</p>
                }
            </PageLayout>
        </div>
    );
};

export default FroudAlert;