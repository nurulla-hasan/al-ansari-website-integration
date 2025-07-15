const CardSkeletonLoader = ({ count = 1 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="border border-gray-200 rounded-md p-4 animate-pulse">
          <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div> {/* Image placeholder */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div> {/* Title placeholder */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Description line 1 */}
          <div className="h-4 bg-gray-200 rounded w-5/6"></div> {/* Description line 2 */}
        </div>
      ))}
    </div>
  );
};

export default CardSkeletonLoader;