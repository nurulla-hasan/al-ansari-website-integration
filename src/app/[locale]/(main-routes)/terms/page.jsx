"use client";
import PageLayout from '@/components/layout/PageLayout';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import StaticPageSkeleton from '@/components/shared/StaticPageSkeleton';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const Terms = () => {
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');
    const tTermsPage = useTranslations('TermsPage');
    const tCommon = useTranslations('common');

    const { data, isLoading, isError } = useQuery({
        queryKey: ["terms"],
        queryFn: () => api.get('/dashboard/terms')
    })

    const terms = data?.data?.data?.description

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('termsAndConditionsTitle')}
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" },
                    { name: tSimpleHero('termsAndConditionsTitle'), href: "/terms" }
                ]}
            />
            <PageLayout>

                {isLoading && <StaticPageSkeleton count={1}/>}
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadTerms')} />}
                {!isLoading && !isError && terms && terms.length > 0 ?
                    <div dangerouslySetInnerHTML={{ __html: terms }}></div> :
                    !isLoading && !isError && <p>{tTermsPage('noTermsAvailable')}</p>
                }
            </PageLayout>
        </div>
    );
};

export default Terms;