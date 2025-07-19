const StaticPageSkeleton = ({ count = 1 }) => {
  return (
    <div className="space-y-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          
          {/* Introduction Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div> {/* Placeholder for Introduction Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Introduction Paragraph 1 */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Introduction Paragraph 2 */}

          {/* Use of Website Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Use of Website Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Use of Website Paragraph */}

          {/* Confidential Information Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Confidential Information Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Confidential Information Paragraph */}

          {/* Copyright Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Copyright Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Copyright Paragraph */}

          {/* Privacy Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Privacy Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Privacy Paragraph 1 */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Privacy Paragraph 2 */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Privacy Paragraph 3 */}

          {/* Third Party Links Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Third Party Links Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Third Party Links Paragraph */}

          {/* Limitation of Liability Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Limitation of Liability Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Limitation of Liability Paragraph */}

          {/* Jurisdiction Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Jurisdiction Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Jurisdiction Paragraph 1 */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Jurisdiction Paragraph 2 */}

          {/* Thank You Section */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2 mt-8"></div> {/* Placeholder for Thank You Paragraph 1 */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Thank You Paragraph 2 */}
        </div>
      ))}
    </div>
  );
};

export default StaticPageSkeleton;
