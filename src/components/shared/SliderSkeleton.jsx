"use client";

const SliderSkeleton = ({ count = 1 }) => {
    const skeletonItems = Array.from({ length: count }, (_, index) => (
        <div key={index} className='bg-white rounded-2xl overflow-hidden p-4 h-full animate-pulse'>
            <div className="bg-white rounded-xl overflow-hidden flex flex-col gap-3 lg:gap-0 items-center lg:flex-row h-full">
                {/* Image Skeleton */}
                <div className="lg:w-30 w-full h-30 bg-gray-200 rounded-xl flex-shrink-0">
                    <div className="w-full h-full bg-gray-300"></div>
                </div>

                {/* Content Area Skeleton */}
                <div className="px-6 flex flex-col flex-1">
                    <div>
                        {/* Date Placeholder */}
                        <div className="h-3 bg-gray-200 rounded w-1/4 mb-1"></div>
                        {/* Title Placeholder */}
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                    </div>
                    {/* Description Placeholder */}
                    <div className="h-3 bg-gray-200 rounded w-full mt-4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    {/* "see more" link Placeholder */}
                    <div className="h-3 bg-gray-200 rounded w-1/5 mt-2"></div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skeletonItems}
        </div>
    );
};

export default SliderSkeleton;