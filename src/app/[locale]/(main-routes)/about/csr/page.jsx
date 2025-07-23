"use client"

import AboutPageButtons from "@/components/about-components/AboutPageButtons";
import CsrCard from "@/components/about-components/csr-components/CsrCard";
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";
import CardSkeletonLoader from "@/components/shared/CardSkeletonLoader";
import ErrorDisplay from "@/components/shared/ErrorDisplay";

const CsrPage = () => {
    const tSimpleHero = useTranslations('SimpleHero');
    const tNavbar = useTranslations('Navbar');
    const tCsr = useTranslations('CsrPage');
    const tCommon = useTranslations('common');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('aboutUsTitle'), href: "/about" },
        { name: tSimpleHero('csrTitle'), href: "/about/csr" }
    ];

    const { data: responseData, isLoading, isError } = useQuery({
        queryKey: ['csr'],
        queryFn: () => api.get('/dashboard/csr'),
    });

    const csrData = responseData?.data?.data;

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={tSimpleHero('csrTitle')}
                breadcrumbs={breadcrumbs}
            >
                <AboutPageButtons />
            </SimpleHero>
            <PageLayout>
                {isLoading && <CardSkeletonLoader count={6} />}
                {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadCsr')} />}
                {!isLoading && !isError && csrData && csrData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {csrData.map((csr) => (
                            <CsrCard
                                key={csr._id}
                                data={csr}
                            />
                        ))}
                    </div>
                ) : (
                    !isLoading && !isError && <p>{tCsr('noCsrAvailable')}</p>
                )}
            </PageLayout>
        </div>
    );
};

export default CsrPage;