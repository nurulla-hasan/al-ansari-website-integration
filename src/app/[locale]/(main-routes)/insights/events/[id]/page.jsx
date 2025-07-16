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

const EventDetailsPage = () => {
    const { id } = useParams();
    const t = useTranslations('InsightsPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('insightsTitle'), href: "/insights" },
        { name: t('eventsSectionTitle'), href: "/insights/events" },
        { name: "Event Details", href: `/insights/events/${id}` }
    ];

    const { data: eventResponse, isLoading, isError } = useQuery({
        queryKey: ['event', id],
        queryFn: () => api.get(`/dashboard/events/${id}`),
        enabled: !!id,
    });

    const event = eventResponse?.data?.data;

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={event?.title || "Event Details"}
                breadcrumbs={breadcrumbs}
            />
            <PageLayout>
                {isLoading && <DetailsSkeletonLoader />}
                {!isLoading && isError && <ErrorDisplay message="Failed to load event details." />}
                {!isLoading && !isError && event && (
                    <>
                        <div className="mb-8 space-y-2">
                            <p className="text-gray-500">{formatDate(event?.createdAt)}</p>
                            <h1 className="text-2xl md:text-3xl font-bold text-text-title mb-4">{event?.title}</h1>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="relative w-full h-96">
                                <Image
                                    src={event?.image ? `${config.BASE_URL}${event?.image}` : "/assets/placeholder-insights.jpg"}
                                    alt={event?.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <p className="text-text-muted leading-relaxed">
                                {event?.description}
                            </p>
                        </div>
                    </>
                )}
            </PageLayout>
        </div>
    );
};

export default EventDetailsPage;
