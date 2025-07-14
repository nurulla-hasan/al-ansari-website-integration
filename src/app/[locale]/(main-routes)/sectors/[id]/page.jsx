"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/utils/api";
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import CardSkeletonLoader from "@/components/shared/CardSkeletonLoader";
import ErrorDisplay from "@/components/shared/ErrorDisplay";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SectorDetailsPage = () => {
  const { id } = useParams();
  const tNavbar = useTranslations('Navbar');
  const tSimpleHero = useTranslations('SimpleHero');

  const { data: responseData, isLoading, isError } = useQuery({
    queryKey: ["sector", id],
    queryFn: () => fetcher(`/dashboard/sector/${id}`),
    enabled: !!id, // Only fetch if id is available
  });

  const sector = responseData?.data;

  const breadcrumbs = [
    { name: tNavbar('home'), href: "/" },
    { name: tSimpleHero('sectorsTitle'), href: "/sectors" },
    { name: sector?.title || "Details", href: `/sectors/${id}` },
  ];

  if (isLoading) {
    return (
      <div className="min-h-minus-header">
        <SimpleHero title="Loading..." breadcrumbs={breadcrumbs} />
        <PageLayout>
          <CardSkeletonLoader count={1} />
        </PageLayout>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-minus-header">
        <SimpleHero title="Error" breadcrumbs={breadcrumbs} />
        <PageLayout>
          <ErrorDisplay message="Failed to load sector details." />
        </PageLayout>
      </div>
    );
  }

  if (!sector) {
    return (
      <div className="min-h-minus-header">
        <SimpleHero title="Not Found" breadcrumbs={breadcrumbs} />
        <PageLayout>
          <ErrorDisplay message="Sector not found." />
        </PageLayout>
      </div>
    );
  }

  return (
    <div className="min-h-minus-header">
      <SimpleHero title={sector.title} breadcrumbs={breadcrumbs} />

      <PageLayout>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-md">
              <Image
                src={sector.image || "/assets/placeholder-sector.jpg"}
                alt={sector.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover"
                priority={true}
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {sector.title}
            </h1>
            <p className="text-gray-700 leading-relaxed">
              {sector.description}
            </p>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default SectorDetailsPage;
