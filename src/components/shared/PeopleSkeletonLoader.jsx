"use client"

const PeopleSkeletonLoader = ({ count = 1 }) => {
    const skeletonItems = Array.from({ length: count }, (_, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden animate-pulse">
            <div className="block">
                {/* Lighter gray for image placeholder */}
                <div className="relative w-48 h-60 rounded-2xl overflow-hidden bg-gray-100 sm:w-64 sm:h-80 md:w-[390px] md:h-[430px]">
                    {/* Even lighter gray for inner image placeholder */}
                    <div className="absolute inset-0 bg-gray-200"></div>
                    {/* Role Badge Placeholder - Adjusted opacity/shade */}
                    <div className="absolute bottom-0 left-0 bg-gray-300/80 h-8 w-24 rounded-tr-lg"></div>
                </div>
            </div>

            {/* Content Placeholder */}
            <div className="mt-4 p-2">
                {/* Lighter gray for text lines */}
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
        </article>
    ));

    return (
        <>
            {/* Title Placeholder - Lighter gray */}
            <div className='h-10 bg-gray-100 rounded w-1/3 mx-auto mb-4'></div>
            <div className='border-t border-gray-200 my-6'></div>

            <div className="flex flex-wrap justify-center gap-8">
                {skeletonItems}
            </div>
        </>
    );
};

export default PeopleSkeletonLoader;