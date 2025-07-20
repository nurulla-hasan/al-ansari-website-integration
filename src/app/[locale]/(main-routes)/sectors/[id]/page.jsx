"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { api, baseURL } from "@/utils/api";
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import DetailsSkeletonLoader from "@/components/shared/DetailsSkeletonLoader";
import ErrorDisplay from "@/components/shared/ErrorDisplay";
import Image from "next/image";
import { useTranslations } from "next-intl";


const SectorDetailsPage = () => {
  const { id } = useParams();
  const tNavbar = useTranslations('Navbar');
  const tSimpleHero = useTranslations('SimpleHero');
  const tCommon = useTranslations('Common');

  const { data: responseData, isLoading, isError } = useQuery({
    queryKey: ["sector", id],
    queryFn: () => api.get(`/dashboard/sector/${id}`),
    enabled: !!id, // Only fetch if id is available
  });

  const sector = responseData?.data?.data;

  const breadcrumbs = [
    { name: tNavbar('home'), href: "/" },
    { name: tSimpleHero('sectorsTitle'), href: "/sectors" },
    { name: tCommon('sectorDetails'), href: `/sectors/${id}` },
  ];

  return (
    <div className="min-h-minus-header">
      <SimpleHero title={sector?.title} breadcrumbs={breadcrumbs} />

      <PageLayout>
        {isLoading && <DetailsSkeletonLoader />}
        {!isLoading && isError && <ErrorDisplay message="Failed to load sector details." />}
        {!isLoading && !isError && sector ? (
          <>
            <div className="w-full mb-8">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-md">
                <Image
                  src={sector?.image ? `${baseURL}${sector?.image}`: "/assets/placeholder-image.jpg"}
                  alt={sector?.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-2xl md:text-3xl font-bold text-text-title mb-4">
                {sector?.title}
              </h1>
              <p className="text-text-muted leading-relaxed">
                {sector?.description}
              </p>
            </div>
          </>
        ) : (
          !isLoading && !isError && !sector && <ErrorDisplay message={tCommon('sectorNotFound')} />
        )}
      </PageLayout>
    </div>
  );
};

export default SectorDetailsPage;
