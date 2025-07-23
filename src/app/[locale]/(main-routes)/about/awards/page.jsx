"use client"

import AboutPageButtons from "@/components/about-components/AboutPageButtons";
import AwardCard from "@/components/about-components/awards-components/AwardCard";
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";
import CardSkeletonLoader from "@/components/shared/CardSkeletonLoader";
import ErrorDisplay from "@/components/shared/ErrorDisplay";

const AwardsPage = () => {
    const tSimpleHero = useTranslations('SimpleHero');
    const tNavbar = useTranslations('Navbar');
    const tAwards = useTranslations('AwardsPage');
    const tCommon = useTranslations('common');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('aboutUsTitle'), href: "/about" },
        { name: tSimpleHero('awardsTitle'), href: "/about/awards" }
    ];

    const { data: responseData, isLoading, isError } = useQuery({
        queryKey: ['awards'],
        queryFn: () => api.get('/dashboard/award'),
    });

    const awardsData = responseData?.data?.data;

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={tSimpleHero('awardsTitle')}
                breadcrumbs={breadcrumbs}
            >

                <AboutPageButtons />
            </SimpleHero>
            <PageLayout>
                {isLoading && <CardSkeletonLoader count={3} />}
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadAwards')} />}
                {!isLoading && !isError && awardsData && awardsData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {awardsData.map((award) => (
                            <AwardCard
                                key={award._id}
                                data={award}
                            />
                        ))}
                    </div>
                ) : (
                    !isLoading && !isError && <p>{tAwards('noAwardsAvailable')}</p>
                )}
            </PageLayout>
        </div>
    );
};

export default AwardsPage;