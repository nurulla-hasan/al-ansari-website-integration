"use client";
import PageLayout from '@/components/layout/PageLayout';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import StaticPageSkeleton from '@/components/shared/StaticPageSkeleton';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const Privacy = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tPrivacyPage = useTranslations('PrivacyPage');
    const tCommon = useTranslations('common');

    const { data, isLoading, isError } = useQuery({
        queryKey: ["privacy"],
        queryFn: () => api.get('/dashboard/privacy')
    })

    const privacy = data?.data?.data?.description

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('privacyPolicyTitle')} 
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" }, 
                    { name: tSimpleHero('privacyPolicyTitle'), href: "/privacy" }
                ]}
            />
            <PageLayout>
                {/* Introduction Section */}
                {isLoading && <StaticPageSkeleton />}
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadPrivacy')} />}
                {!isLoading && !isError && privacy && privacy.length > 0 ?
                    <div dangerouslySetInnerHTML={{ __html: privacy }}></div> :
                    !isLoading && !isError && <p>{tPrivacyPage('noPrivacyAvailable')}</p>
                }
            </PageLayout>
        </div>
    );
};

export default Privacy;