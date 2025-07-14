"use client";

import Image from "next/image";

const AwardCard = ({ data }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="relative w-full h-48">
                <Image
                    src={data?.imageSrc}
                    alt={data?.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {data?.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {data?.description}
                </p>
            </div>
        </div>
    );
};

export default AwardCard;