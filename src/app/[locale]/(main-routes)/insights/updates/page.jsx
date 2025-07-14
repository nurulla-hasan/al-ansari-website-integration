"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { updateData } from '@/data/data';
import { useTranslations } from 'next-intl';


const Updates = () => {
    const t = useTranslations('UpdatesPage');
    // Navbar এবং SimpleHero নামেরস্পেস থেকে অনুবাদ ফাংশনগুলো আনা হয়েছে
    // কারণ তাদের কীগুলো Hero এবং breadcrumbs এর জন্য ব্যবহার করা হয়েছে।
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const totalResults = updateData.length;

    // SimpleHero কে পাঠানোর আগে breadcrumb এর নামগুলো অনুবাদ করা হয়েছে
    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" }, // 'home' Navbar namespace এ আছে
        { name: tSimpleHero('insightsTitle'), href: "/insights" }, // 'insightsTitle' SimpleHero namespace এ থাকা উচিত
        { name: tSimpleHero('updatesTitle'), href: "/insights/updates" } // 'updatesTitle' SimpleHero namespace এ থাকা উচিত
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('updatesTitle')} // 'updatesTitle' কীটি অনুবাদ করে শিরোনাম হিসাবে পাঠানো হয়েছে
                breadcrumbs={breadcrumbs} // ইতিমধ্যেই অনূদিত breadcrumbs পাঠানো হয়েছে
            />

            <PageLayout>
                <p className='mb-4 text-text-muted'>{t('showingResults', { totalResults })}</p>
                <div className='space-y-18'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {updateData && updateData.length > 0 ? (
                            updateData.map((item) => (
                                <InsightsCard key={item._id} data={item} pathname={"updates"}/>
                            ))
                        ) : (
                            <p>{t('noUpdatesAvailable')}</p>
                        )}
                    </div>
                </div>
            </PageLayout>

        </div>
    );
};

export default Updates;