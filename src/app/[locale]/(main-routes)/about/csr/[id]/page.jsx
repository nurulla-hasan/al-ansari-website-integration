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

import { formatDate } from "@/utils/dateFormatter";

const CsrDetailsPage = () => {
  const { id } = useParams();
  const tNavbar = useTranslations('Navbar');
  const tSimpleHero = useTranslations('SimpleHero');
  const tCommon = useTranslations('common');

  const { data: responseData, isLoading, isError } = useQuery({
    queryKey: ["csr", id],
    queryFn: () => api.get(`/dashboard/csr/${id}`),
    enabled: !!id,
  });

  const csr = responseData?.data?.data;

  const breadcrumbs = [
    { name: tNavbar('home'), href: "/" },
    { name: tSimpleHero('aboutUsTitle'), href: "/about" },
    { name: tSimpleHero('csrTitle'), href: "/about/csr" },
    { name: tCommon('csrDetails'), href: `/about/csr/${id}` },
  ];

  return (
    <div className="min-h-minus-header">
      <SimpleHero title={csr?.title} breadcrumbs={breadcrumbs} />

      <PageLayout>
        {isLoading && <DetailsSkeletonLoader />}
        {!isLoading && isError && <ErrorDisplay message={tCommon('failedToLoadCsrDetails')} />}
        {!isLoading && !isError && csr ? (
          <>
            <div className="mb-8 space-y-2">
              <p className="text-gray-500">{formatDate(csr?.createdAt)}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-text-title mb-4">
                {csr?.title}
              </h1>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-md">
                <Image
                  src={csr?.image ? `${baseURL}${csr?.image}` : "/assets/placeholder-image.jpg"}
                  alt={csr?.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={true}
                />
              </div>
              <p className="text-text-muted leading-relaxed">
                {csr?.description}
              </p>
            </div>
          </>
        ) : (
          !isLoading && !isError && !csr && <ErrorDisplay message={tCommon('csrNotFound')} />
        )}
      </PageLayout>
    </div>
  );
};

export default CsrDetailsPage;