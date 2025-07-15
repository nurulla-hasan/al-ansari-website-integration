"use client"
import PageLayout from "@/components/layout/PageLayout";
import DetailsSkeletonLoader from "@/components/shared/DetailsSkeletonLoader";
import ErrorDisplay from "@/components/shared/ErrorDisplay";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import config from "@/config/config";
import { api } from "@/utils/api";
import { formatDate } from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from 'next/navigation';

const NewsletterDetailsPage = () => {
    const { id } = useParams();
    const t = useTranslations('InsightsPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" },
        { name: t('newslettersSectionTitle'), href: "/insights/newsletters" },
        { name: "Newsletter Details", href: `/insights/newsletters/${id}` }
    ];

    const { data: newsletterResponse, isLoading, isError } = useQuery({
        queryKey: ['newsletter', id],
        queryFn: () => api.get(`/dashboard/newsletters/${id}`),
        enabled: !!id,
    });

    const newsletter = newsletterResponse?.data?.data;

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={newsletter?.title || "Newsletter Details"}
                breadcrumbs={breadcrumbs}
            />
            <PageLayout>
                {isLoading && <DetailsSkeletonLoader />}
                {!isLoading && isError && <ErrorDisplay message="Failed to load newsletter details." />}
                {!isLoading && !isError && newsletter && (
                    <>
                        <div className="mb-8 space-y-2">
                            <p className="text-gray-500">{formatDate(newsletter?.createdAt)}</p>
                            <h1 className="text-3xl font-bold">{newsletter?.title}</h1>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="relative w-full h-96">
                                <Image
                                    src={newsletter?.image ? `${config.BASE_URL}${newsletter?.image}` : "/assets/placeholder-insights.jpg"}
                                    alt={newsletter?.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: newsletter?.description }} />
                        </div>
                    </>
                )}
            </PageLayout>
        </div>
    );
};

export default NewsletterDetailsPage;
