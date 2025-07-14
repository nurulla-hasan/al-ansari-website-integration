"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import InsightsHeader from '@/components/insights-components/InsightsHeader';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { eventsData, newsData, updateData } from '@/data/data';
import { useTranslations } from 'next-intl';

const InsightsPage = () => {
    const tInsights = useTranslations('InsightsPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" } 
    ];

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
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                            {
                                updateData.slice(0, 2).map((item) => (
                                    <InsightsCard key={item._id} data={item} pathname={"updates"} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <InsightsHeader title={tInsights('eventsSectionTitle')} link="/insights/events" />
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                            {
                                eventsData.slice(0, 2).map((item) => (
                                    <InsightsCard key={item._id} data={item} pathname={"events"} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <InsightsHeader title={tInsights('newslettersSectionTitle')} link="/insights/newsletters" />
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                            {
                                newsData.slice(0, 2).map((item) => (
                                    <InsightsCard key={item._id} data={item} pathname={"newsletters"}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default InsightsPage;