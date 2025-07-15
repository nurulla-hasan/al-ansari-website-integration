"use client"

const InsightsCardSkeletonLoader = ({ count = 1 }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-6">
            {
                Array.from({ length: count }, (_, index) => (
                    <div key={index} className="flex flex-col gap-4 md:gap-0 md:flex-row rounded-xl bg-white overflow-hidden border border-gray-200 p-4 animate-pulse">
                        {/* Image Container Skeleton */}
                        <div className="relative w-[100%] h-56 sm:w-64 sm:h-64 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-xl flex-shrink-0 bg-gray-100">
                            <div className="absolute inset-0 bg-gray-200"></div>
                        </div>

                        {/* Content Area Skeleton */}
                        <div className="md:p-4 flex flex-col justify-between flex-grow">
                            {/* Date Placeholder */}
                            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                            {/* Title Placeholder */}
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                            {/* Description Placeholder */}
                            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>

                            {/* Read More Link Placeholder */}
                            <div className="mt-auto">
                                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default InsightsCardSkeletonLoader;