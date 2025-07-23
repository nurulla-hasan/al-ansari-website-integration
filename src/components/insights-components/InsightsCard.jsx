"use client";


import { baseURL } from "@/utils/api";
import { formatDate } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";

const InsightsCard = ({ data, pathname }) => {
    if (!data) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row rounded-xl bg-white overflow-hidden border border-gray-200 p-4">
            {/* Image Container */}
            <div className="relative w-[100%] h-56 sm:w-64 sm:h-64 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-xl flex-shrink-0">
                <Image
                    src={data?.image ? `${baseURL}${data?.image}` : "/assets/placeholder-image.jpg"}  
                    alt={data?.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover" 
                    priority={false} 
                />
            </div>

            {/* Content Area */}
            <div className="md:p-4 flex flex-col justify-between flex-grow">
                <p className="text-sm text-text-muted mb-2">{formatDate(data?.createdAt)}</p>
                <h3 className="text-xl font-semibold text-text-title mb-3 leading-tight">
                    {data?.title}
                </h3>
                <p className="text-text-muted text-base leading-relaxed line-clamp-2 mb-4">
                    {data?.description}
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/insights/${pathname || "updates"}/${data?._id}`}
                        className="text-btn-bg hover:text-btn-bg/80 font-medium inline-flex items-center"
                    >
                        Read More
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InsightsCard;