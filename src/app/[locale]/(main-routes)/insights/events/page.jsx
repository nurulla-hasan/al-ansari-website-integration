"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/utils/api';
import InsightsCardSkeletonLoader from '@/components/shared/InsightsCardSkeletonLoader';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import { useTranslations } from 'next-intl'; 


const Events = () => {
    const tEvents = useTranslations('EventsPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tCommon = useTranslations('common');

    const { data: eventsResponse, isLoading, isError } = useQuery({
        queryKey: ['allEvents'],
        queryFn: () => api.get('/dashboard/events'),
    });

    const eventsData = eventsResponse?.data?.data;

    const totalResults = eventsData?.length || 0;

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" },
        { name: tSimpleHero('eventsTitle'), href: "/insights/events" }
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('eventsTitle')}
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
                <p className='mb-4 text-text-muted'>{tEvents('showingResults', { totalResults })}</p>
                
                {isLoading && <InsightsCardSkeletonLoader count={4} />}
                
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadEvents')} />}
                
                {!isLoading && !isError && eventsData && eventsData.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {eventsData.map((item) => (
                            <InsightsCard key={item._id} data={item} pathname={"events"}/>
                        ))}
                    </div>
                ) : (
                    !isLoading && !isError && <p>{tEvents('noEventsAvailable')}</p>
                )}
            </PageLayout>

        </div>
    );
};

export default Events;