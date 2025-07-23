"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useQuery } from '@tanstack/react-query'; 
import { api } from '@/utils/api';
import InsightsCardSkeletonLoader from '@/components/shared/InsightsCardSkeletonLoader'; 
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import { useTranslations } from 'next-intl';


const Newsletters = () => {
    const tNewsletters = useTranslations('NewslettersPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tCommon = useTranslations('common');

    const { data: newslettersResponse, isLoading, isError } = useQuery({
        queryKey: ['allNewsletters'],
        queryFn: () => api.get('/dashboard/newsletters'),
    });

    const newslettersData = newslettersResponse?.data?.data;

    const totalResults = newslettersData?.length || 0;

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" },
        { name: tSimpleHero('newslettersTitle'), href: "/insights/newsletters" }
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('newslettersTitle')}
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
                <p className='mb-4 text-text-muted'>{tNewsletters('showingResults', { totalResults })}</p>

                {isLoading && <InsightsCardSkeletonLoader count={4} />}

                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadNewsletters')} />}

                {!isLoading && !isError && newslettersData && newslettersData.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {newslettersData.map((item) => (
                            <InsightsCard key={item._id} data={item} pathname={"newsletters"}/>
                        ))}
                    </div>
                ) : (
                    !isLoading && !isError && <p>{tNewsletters('noNewslettersAvailable')}</p>
                )}
            </PageLayout>

        </div>
    );
};

export default Newsletters;