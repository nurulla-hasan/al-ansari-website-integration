"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import InsightsHeader from '@/components/insights-components/InsightsHeader';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/utils/api';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import { useTranslations } from 'next-intl';
import InsightsCardSkeletonLoader from '@/components/shared/InsightsCardSkeletonLoader'; 

const InsightsPage = () => {
    const tInsights = useTranslations('InsightsPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tCommon = useTranslations('common');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" } 
    ];

    const { data: updatesResponse, isLoading: isLoadingUpdates, isError: isErrorUpdates } = useQuery({
        queryKey: ['updates'],
        queryFn: () => api.get('/dashboard/updates'),
    });

    const updates = updatesResponse?.data?.data;

    const { data: eventsResponse, isLoading: isLoadingEvents, isError: isErrorEvents } = useQuery({
        queryKey: ['events'],
        queryFn: () => api.get('/dashboard/events'),
    });

    const events = eventsResponse?.data?.data;

    const { data: newslettersResponse, isLoading: isLoadingNewsletters, isError: isErrorNewsletters } = useQuery({
        queryKey: ['newsletters'],
        queryFn: () => api.get('/dashboard/newsletters'),
    });

    const newsletters = newslettersResponse?.data?.data;

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('insightsTitle')}
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
                <div className='flex flex-col gap-12 md:gap-20'>
                    <div>
                        <InsightsHeader title={tInsights('updatesSectionTitle')} link="/insights/updates" />
                        {isLoadingUpdates && <InsightsCardSkeletonLoader count={2} />}
                        {!isLoadingUpdates && isErrorUpdates && <ErrorDisplay message={tCommon('failedToLoadUpdates')} />}
                        {!isLoadingUpdates && !isErrorUpdates && updates && updates.length > 0 ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                                {
                                    updates.slice(0, 2).map((item) => (
                                        <InsightsCard key={item._id} data={item} pathname={"updates"} />
                                    ))
                                }
                            </div>
                        ) : (
                            !isLoadingUpdates && !isErrorUpdates && <p>{tInsights('noUpdatesAvailable')}</p>
                        )}
                    </div>
                    <div>
                        <InsightsHeader title={tInsights('eventsSectionTitle')} link="/insights/events" />
                        {isLoadingEvents && <InsightsCardSkeletonLoader count={2} />}
                        {!isLoadingEvents && isErrorEvents && <ErrorDisplay message={tCommon('failedToLoadEvents')} />}
                        {!isLoadingEvents && !isErrorEvents && events && events.length > 0 ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                                {
                                    events.slice(0, 2).map((item) => (
                                        <InsightsCard key={item._id} data={item} pathname={"events"} />
                                    ))
                                }
                            </div>
                        ) : (
                            !isLoadingEvents && !isErrorEvents && <p>{tInsights('noEventsAvailable')}</p>
                        )}
                    </div>
                    <div>
                        <InsightsHeader title={tInsights('newslettersSectionTitle')} link="/insights/newsletters" />
                        {isLoadingNewsletters && <InsightsCardSkeletonLoader count={2} />}
                        {!isLoadingNewsletters && isErrorNewsletters && <ErrorDisplay message={tCommon('failedToLoadNewsletters')} />}
                        {!isLoadingNewsletters && !isErrorNewsletters && newsletters && newsletters.length > 0 ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                                {
                                    newsletters.slice(0, 2).map((item) => (
                                        <InsightsCard key={item._id} data={item} pathname={"newsletters"}/>
                                    ))
                                }
                            </div>
                        ) : (
                            !isLoadingNewsletters && !isErrorNewsletters && <p>{tInsights('noNewslettersAvailable')}</p>
                        )}
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default InsightsPage;