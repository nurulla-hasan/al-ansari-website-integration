"use client"

const PeopleDetailsSkeletonLoader = () => {
    return (
        <div className="animate-pulse">
            {/* Top Section Skeleton */}
            <div className="bg-gray-200 p-8 rounded-xl mb-8">
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                    {/* Image Placeholder */}
                    <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 flex-shrink-0 rounded-2xl bg-gray-300 -mt-10 sm:-mt-16 md:-mt-20">
                        {/* Placeholder for image */}
                    </div>

                    <div className="flex-1 mt-6 md:mt-0 space-y-6">
                        {/* Name and Position Placeholder */}
                        <div>
                            <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                        </div>

                        {/* Contact Section Placeholder */}
                        <div>
                            <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div> {/* "Contact" title */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div> {/* Icon */}
                                    <div className="h-4 bg-gray-300 rounded w-1/3"></div> {/* "Email:" */}
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* Email address */}
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div> {/* Icon */}
                                    <div className="h-4 bg-gray-300 rounded w-1/3"></div> {/* "Phone Number:" */}
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* Phone number */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section Title Placeholder */}
            <div className='h-8 bg-gray-200 rounded w-1/3 mb-4'></div>

            {/* Bottom Section Layout Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Main Content (lg:col-span-3) Placeholder */}
                <div className="lg:col-span-3 space-y-8 border-t border-gray-200 pt-6">
                    {/* Bio Placeholder */}
                    <div className="space-y-6">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>

                    {/* Professional Highlights Placeholder */}
                    <div className="space-y-2">
                        <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>

                    {/* Awards & Recognition Placeholder */}
                    <div className="mt-6">
                        <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>

                    {/* Practice Areas Placeholder */}
                    <div className="mt-6">
                        <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
                        <div className="flex flex-wrap gap-2">
                            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (col-span-2) Placeholder */}
                <div className="md:-mt-10 col-span-2 space-y-8 border border-gray-200 p-4 lg:p-8 rounded-xl bg-gray-50">
                    {/* Education Placeholder */}
                    <div>
                        <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>

                    {/* Practice Areas (Sidebar) Placeholder */}
                    <div>
                        <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="flex flex-wrap gap-2">
                            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* Industry Focus Placeholder */}
                    <div>
                        <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="flex flex-wrap gap-2">
                            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* Bar Admission Placeholder */}
                    <div>
                        <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleDetailsSkeletonLoader;