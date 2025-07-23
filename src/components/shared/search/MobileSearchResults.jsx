import React from 'react';
import { Link as NextIntlLink } from "@/i18n/navigation";
import { getLinkHref } from "@/utils/linkHelper";
import { baseURL } from '@/utils/api';
import Image from 'next/image';

const MobileSearchResults = ({ isLoading, results, clearSearch, searchTerm }) => {
  if (isLoading) {
    return <p className="p-2 text-black">Loading...</p>;
  }

  if (!results) {
    return null;
  }

  return (
    <ul className="mt-4 max-h-60 overflow-y-auto">
      {results.length > 0 ? (
        results.map((result) => (
          <li key={result.id} className="p-2 border-b border-gray-300 text-black">
            <NextIntlLink href={getLinkHref(result)} className="flex items-center gap-2" onClick={clearSearch}>
              {result.images && (
                <div className='relative w-10 h-10'>
                  <Image
                    src={result?.images ? `${baseURL}${result?.images}` : "/assets/placeholder-image.jpg"} 
                    alt={result.title || 'Search Result Image'}
                    fill
                    sizes="40px" 
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <p className="line-clamp-2">{result?.title}</p>
            </NextIntlLink>
          </li>
        ))
      ) : (
        <p className="p-2 text-black">No results found.</p>
      )}
    </ul>
  );
};

export default MobileSearchResults;