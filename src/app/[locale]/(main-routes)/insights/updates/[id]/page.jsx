"use client"
import PageLayout from "@/components/layout/PageLayout";
import DetailsSkeletonLoader from "@/components/shared/DetailsSkeletonLoader";
import ErrorDisplay from "@/components/shared/ErrorDisplay";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";

import { api, baseURL } from "@/utils/api";
import { formatDate } from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from 'next/navigation';

const UpdateDetailsPage = () => {
    const { id } = useParams();
    const t = useTranslations('InsightsPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" },
        { name: t('updatesSectionTitle'), href: "/insights/updates" },
        { name: "Update Details", href: `/insights/updates/${id}` }
    ];

    const { data: updateResponse, isLoading, isError } = useQuery({
        queryKey: ['update', id],
        queryFn: () => api.get(`/dashboard/updates/${id}`),
        enabled: !!id,
    });

    const update = updateResponse?.data?.data;

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={update?.title || "Update Details"}
                breadcrumbs={breadcrumbs}
            />
            <PageLayout>
                {isLoading && <DetailsSkeletonLoader />}
                {!isLoading && isError && <ErrorDisplay message="Failed to load update details." />}
                {!isLoading && !isError && update && (
                    <>
                        <div className="mb-8 space-y-2">
                            <p className="text-gray-500">{formatDate(update?.createdAt)}</p>
                            <h1 className="text-3xl font-bold">{update?.title}</h1>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="relative w-full h-96">
                                <Image
                                    src={update?.image ? `${baseURL}${update?.image}` : "/assets/placeholder-insights.jpg"}
                                    alt={update?.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <p className="text-text-muted leading-relaxed">
                                {update?.description}
                            </p>
                        </div>
                    </>
                )}
            </PageLayout>
        </div>
    );
};

export default UpdateDetailsPage;
