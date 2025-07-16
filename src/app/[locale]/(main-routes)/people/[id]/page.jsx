"use client";

import { useParams } from 'next/navigation';
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/utils/api';

import DetailsSkeletonLoader from "@/components/shared/DetailsSkeletonLoader";
import ErrorDisplay from "@/components/shared/ErrorDisplay";
import PeopleDetailsSkeletonLoader from '@/components/shared/PeopleDetailsSkeletonLoader';

const PersonDetailsPage = () => {
    const { id } = useParams();

    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const { data: responseData, isLoading, isError } = useQuery({
        queryKey: ["person", id],
        queryFn: () => api.get(`/dashboard/person/${id}`),
        enabled: !!id,
    });

    const person = responseData?.data?.data;

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('peopleTitle'), href: "/people" },
        { name: "People Details", href: `/people/${id}` }
    ];

    return (
        <>
            <SimpleHero
                title={person?.fullName || tSimpleHero('peopleTitle')}
                breadcrumbs={breadcrumbs}
            />
            <PageLayout>
                {isLoading && <PeopleDetailsSkeletonLoader />}
                {isError && <ErrorDisplay message="Failed to load person details." />}
                {!person && !isLoading && !isError && <ErrorDisplay message="Person not found." />}
                {person && (
                    <>
                        {/* Top Section */}
                        <div className="bg-bg-primary p-8 rounded-xl mb-8">
                            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                                <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-200 -mt-10 sm:-mt-16 md:-mt-20">
                                    <Image
                                        src={person.profile_image ? `${process.env.NEXT_PUBLIC_BASE_URL}${person.profile_image}` : "/placeholder.svg"}
                                        alt={person.fullName}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                    />
                                </div>

                                <div className="flex-1 mt-6 md:mt-0 space-y-6">
                                    <div>
                                        <h1 className="text-2xl sm:text-4xl font-bold text-text-title mb-2">{person.fullName}</h1>
                                        <p className="text-base sm:text-lg text-text-muted">{person.position}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-text-title mb-4">Contact</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Mail className="w-5 h-5 text-text-muted" />
                                                <span className="text-sm text-text-muted">Email:</span>
                                                <span className="text-sm text-text-title">{person.email}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Phone className="w-5 h-5 text-text-muted" />
                                                <span className="text-sm text-text-muted">Phone Number:</span>
                                                <span className="text-sm text-text-title">{person.phoneNumber}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <h3 className='text-xl md:text-3xl font-medium text-text-title mb-4'>
                            Profile Details
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Tab Content */}
                            <div className="lg:col-span-3 space-y-8 border-t border-gray-200 pt-6">
                                {/* Main Content */}
                                <div className="space-y-6">
                                    <p className="text-gray-700 leading-relaxed">{person.bio}</p>
                                    {person.professional && person.professional.length > 0 && (
                                        <div className="space-y-2">
                                            <h4 className="text-md font-semibold text-text-title mt-4 mb-2">Professional Highlights</h4>
                                            <ul className="list-disc list-inside text-gray-700">
                                                {person.professional.map((exp, index) => (
                                                    <li key={`prof-exp-${index}`} className="leading-relaxed">{exp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {person.awards && person.awards.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="text-md font-semibold text-text-title mb-2">Awards & Recognition</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                {person.awards.map((award, index) => (
                                                    <li key={`profile-award-${index}`} className="text-sm">{award}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {person.practice && person.practice.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="text-md font-semibold text-text-title mb-2">Practice Areas</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {person.practice.map((area, index) => (
                                                    <span key={`profile-area-${index}`} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Sidebar */}
                            <div className="md:-mt-10 col-span-2 space-y-8 border border-gray-200 p-4 lg:p-8 rounded-xl">
                                {/* Education */}
                                {person.education && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-title mb-4">Education</h3>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-700">
                                                {person.education}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Practice Areas */}
                                {person.practice && person.practice.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-title mb-4">Practice Areas</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {person.practice.map((area, index) => (
                                                <span key={`sidebar-area-${index}`} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Industry Focus */}
                                {person.industry && person.industry.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-title mb-4">Industry Focus</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {person.industry.map((focus, index) => (
                                                <span key={`sidebar-focus-${index}`} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                                    {focus}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Bar Admission */}
                                {person.barAdmission && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-title mb-4">Bar Admission</h3>
                                        <div className="space-y-2">
                                            <p key={`bar-admission`} className="text-sm text-gray-700">
                                                {person.barAdmission}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </PageLayout>
        </>
    )
};

export default PersonDetailsPage;