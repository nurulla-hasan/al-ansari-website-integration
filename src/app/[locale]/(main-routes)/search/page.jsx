
'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchResults } from '@/utils/api';
import { useTranslations } from 'next-intl';
import PageLayout from '@/components/layout/PageLayout';
import { getLinkHref } from '@/utils/linkHelper';
import { Link as NextIntlLink } from "@/i18n/navigation";
import Image from 'next/image';
import CardSkeletonLoader from '@/components/shared/CardSkeletonLoader';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import { baseURL } from '@/utils/api';

const SearchResultsPage = () => {
  const t = useTranslations('SearchPage');
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm') || '';

  const { data: searchResults, isLoading, isError, error } = useQuery({
    queryKey: ['allSearchResults', searchTerm],
    queryFn: () => fetchSearchResults(searchTerm), 
    enabled: !!searchTerm,
  });

  return (
    <div className="min-h-minus-header">
      <PageLayout>
        <h2 className="text-2xl font-bold mb-4">{t('resultsFor')} "{searchTerm}"</h2>
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <CardSkeletonLoader key={index} />
            ))}
          </div>
        )}

        {isError && <ErrorDisplay message={error.message} />}

        {!isLoading && !isError && searchResults && (
          searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <NextIntlLink href={getLinkHref(result)} className="block">
                    {result.images && (
                      <div className="relative w-full h-48">
                        <Image
                          src={result?.images ? `${baseURL}${result?.images}` : "/assets/placeholder-image.jpg"} 
                          alt={result.title || 'Search Result Image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{result.title}</h3>
                    </div>
                  </NextIntlLink>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">{t('noResults')}</p>
          )
        )}

        {!searchTerm && (
          <p className="text-gray-600">{t('enterSearchTerm')}</p>
        )}
      </PageLayout>
    </div>
  );
};

export default SearchResultsPage;
