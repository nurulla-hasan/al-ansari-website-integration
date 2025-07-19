
import React from 'react';
import { Link as NextIntlLink } from "@/i18n/navigation";
import { getLinkHref } from "@/utils/linkHelper";

const SearchResults = ({ isLoading, results }) => {
  return (
    <div className="absolute top-full mt-2 w-64 bg-white border rounded-md shadow-lg z-10 text-black">
      {isLoading && <p className="p-2">Loading...</p>}
      {results && (
        <ul>
          {results.length > 0 ? (
            results.map((result) => (
              <li key={result.id} className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                <NextIntlLink href={getLinkHref(result)}>
                  {result.title}
                </NextIntlLink>
              </li>
            ))
          ) : (
            <p className="p-2">No results found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
