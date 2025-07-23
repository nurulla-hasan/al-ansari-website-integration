"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/utils/api';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import { useTranslations } from 'next-intl';
import InsightsCardSkeletonLoader from '@/components/shared/InsightsCardSkeletonLoader';

const Updates = () => {
    const t = useTranslations('UpdatesPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tCommon = useTranslations('common');

    const { data: updatesResponse, isLoading, isError } = useQuery({
        queryKey: ['allUpdates'],
        queryFn: () => api.get('/dashboard/updates'),
    });

    const updates = updatesResponse?.data?.data;

    const totalResults = updates?.length || 0;

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" },
        { name: tSimpleHero('updatesTitle'), href: "/insights/updates" } 
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('updatesTitle')}
                breadcrumbs={breadcrumbs} 
            />

            <PageLayout>
                <p className='mb-4 text-text-muted'>{t('showingResults', { totalResults })}</p>
                {isLoading && <InsightsCardSkeletonLoader count={4} />}
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadUpdates')} />}
                {!isLoading && !isError && updates && updates.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {updates.map((item) => (
                            <InsightsCard key={item._id} data={item} pathname={"updates"}/>
                        ))}
                    </div>
                ) : (
                    !isLoading && !isError && <p>{t('noUpdatesAvailable')}</p>
                )}
            </PageLayout>

        </div>
    );
};

export default Updates;