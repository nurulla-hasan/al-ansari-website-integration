
import React from 'react';
import { Link as NextIntlLink } from "@/i18n/navigation";
import { getLinkHref } from "@/utils/linkHelper";

const MobileSearchResults = ({ isLoading, results }) => {
  if (isLoading) {
    return <p className="p-2 text-black">Loading...</p>;
  }

  if (!results) {
    return null;
  }

  return (
    <ul className="mt-4">
      {results.length > 0 ? (
        results.map((result) => (
          <li key={result.id} className="p-2 border-b text-black">
            <NextIntlLink href={getLinkHref(result)}>
              {result.title}
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
