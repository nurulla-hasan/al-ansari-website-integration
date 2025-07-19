import React from 'react';
import { Link as NextIntlLink } from "@/i18n/navigation";
import { getLinkHref } from "@/utils/linkHelper";
import { baseURL } from '@/utils/api';
import Image from 'next/image';

const SearchResults = ({ isLoading, results, clearSearch, searchTerm }) => {
  return (
    <div className="absolute top-full mt-2 max-w-xl bg-white border rounded-md shadow-lg z-10 text-black max-h-[50vh] overflow-y-auto scrl-hide">
      {isLoading && <p className="p-2">Loading...</p>}
      {results && (
        <ul>
          {results.length > 0 ? (
            results.map((result) => (
              <li key={result.id} className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                <NextIntlLink href={getLinkHref(result)} className="flex items-center gap-2" onClick={clearSearch}>
                  {result?.images && (
                    <div className='relative w-14 h-14'>
                      <Image 
                        src={result?.images ? `${baseURL}${result?.images}` : "/assets/placeholder-insights.jpg"} 
                        alt={result.title || 'Search Result Image'} 
                        fill
                        sizes="56px" 
                        className="object-cover rounded-md" 
                      />
                    </div>
                  )}
                  {result.title}
                </NextIntlLink>
              </li>
            ))
          ) : (
            <p className="p-2">No results found.</p>
          )}
        </ul>
      )}
      {results && results.length > 6 && (
        <div className="sticky -bottom-1 bg-btn-bg p-3 text-center border-t border-gray-200">
          <NextIntlLink href={`/search?searchTerm=${encodeURIComponent(searchTerm)}`} onClick={clearSearch} className="text-white">
            Show All Results
          </NextIntlLink>
        </div>
      )}
    </div>
  );
};

export default SearchResults;