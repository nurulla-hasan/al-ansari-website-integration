"use client"

import Image from "next/image";
import Link from "next/link";

const Teams = ({ title, data }) => {
    return (
        <>
            <h2 className='font-poltawski text-center text-3xl md:text-4xl text-text-title font-bold mb-4'>{title}</h2>
            <div className='border-t border-gray-200 my-6'></div>

            <div className="flex flex-wrap justify-center gap-8">
                {data.map((teamMember) => (
                    <article key={teamMember?._id} className="bg-white rounded-lg overflow-hidden">
                        <Link href={`/people/team-details/?id=${teamMember?._id}`} className="block">
                            <div className="relative w-48 h-60 rounded-2xl overflow-hidden bg-gray-200 sm:w-64 sm:h-80 md:w-[395px] md:h-[440px]">
                                <Image
                                    src={teamMember?.profileImage || "/placeholder.svg"}
                                    alt={teamMember?.name || "Profile picture"}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                                {/* Role Badge */}
                                <div className="absolute bottom-0 left-0 bg-btn-bg/80 text-white text-sm font-medium px-4 py-2 rounded-tr-lg">
                                    {teamMember?.role}
                                </div>
                            </div>
                        </Link>

                        {/* Content */}
                        <div className="mt-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{teamMember?.name}</h3>
                            <p className="text-gray-600 text-sm">{teamMember?.email}</p>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Teams;