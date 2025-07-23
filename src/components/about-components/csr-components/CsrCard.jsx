"use client";

import { baseURL } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";


const CsrCard = ({ data }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                    src={data?.image ? `${baseURL}${data.image}` : "/assets/placeholder-image.jpg"}  
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {data.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {data.description}
                </p>
                <Link href={`/about/csr/${data._id}`} className="inline-block px-4 py-2 text-sm font-medium text-btn-bg border border-btn-bg rounded cursor-pointer">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default CsrCard;