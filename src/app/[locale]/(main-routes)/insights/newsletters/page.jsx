"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { newsData } from '@/data/data';
import { useTranslations } from 'next-intl'; // useTranslations ইম্পোর্ট করা হয়েছে


const Newsletters = () => {
    const tNewsletters = useTranslations('NewslettersPage'); // এই পেজের নিজস্ব অনুবাদের জন্য
    const tNavbar = useTranslations('Navbar'); // 'Home' এর জন্য
    const tSimpleHero = useTranslations('SimpleHero'); // Hero টাইটেল এবং breadcrumbs এর জন্য

    const totalResults = newsData.length;

    // SimpleHero কে পাঠানোর আগে breadcrumb এর নামগুলো অনুবাদ করা হয়েছে
    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" }, // 'home' Navbar namespace এ আছে
        { name: tSimpleHero('insightsTitle'), href: "/insights" }, // 'insightsTitle' SimpleHero namespace এ থাকা উচিত
        { name: tSimpleHero('newslettersTitle'), href: "/insights/newsletters" } // 'newslettersTitle' SimpleHero namespace এ থাকা উচিত
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('newslettersTitle')} // 'newslettersTitle' কীটি অনুবাদ করে শিরোনাম হিসাবে পাঠানো হয়েছে
                breadcrumbs={breadcrumbs} // ইতিমধ্যেই অনূদিত breadcrumbs পাঠানো হয়েছে
            />

            <PageLayout>
                {/* 'showingResults' কীটি ব্যবহার করে অনুবাদ করা হয়েছে */}
                <p className='mb-4 text-text-muted'>{tNewsletters('showingResults', { totalResults })}</p>
                <div className='space-y-18'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {newsData && newsData.length > 0 ? (
                            newsData.map((item) => (
                                <InsightsCard key={item._id} data={item} pathname={"newsletters"}/>
                            ))
                        ) : (
                            // 'noNewslettersAvailable' কীটি ব্যবহার করে অনুবাদ করা হয়েছে
                            <p>{tNewsletters('noNewslettersAvailable')}</p>
                        )}
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default Newsletters;