"use client";

const DetailsSkeletonLoader = () => {
  return (
    <div className="animate-pulse w-full">
      {/* Image Placeholder */}
      <div className="w-full mb-8">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-md bg-gray-300"></div>
      </div>
      {/* Content Placeholders */}
      <div className="w-full">
        {/* Title Placeholder */}
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        {/* Paragraph Placeholders */}
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default DetailsSkeletonLoader;