"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from "react" 
import Image from "next/image"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Share2 } from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import SimpleHero from "@/components/shared/simple-hero/SimpleHero"
import { partnersData } from '@/data/data';
import { useTranslations } from 'next-intl';

const PartnerDetailsContent = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [person, setPerson] = useState(null);

    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    useEffect(() => {
        if (id) {
            const foundPerson = partnersData.find(p => p._id === id);
            setPerson(foundPerson);
        }
    }, [id]);

    const handleShare = () => {
        if (navigator.share && person) {
            navigator.share({
                title: person.name,
                text: `${person.name} - ${person.role}`,
                url: window.location.href,
            })
        } else if (navigator.clipboard && person) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        }
    }

    const getSocialIcon = (platform) => {
        switch (platform) {
            case 'linkedin':
                return <Linkedin className="w-4 h-4 text-btn-bg" />;
            case 'facebook':
                return <Facebook className="w-4 h-4 text-btn-bg" />;
            case 'twitter':
                return <Twitter className="w-4 h-4 text-btn-bg" />;
            case 'instagram':
                return <Instagram className="w-4 h-4 text-btn-bg" />;
            default:
                return null;
        }
    };


    if (!person) {
        return <div>Loading partner details...</div>;
    }

    return (
        <>
            <SimpleHero
                title={tSimpleHero('detailsTitle')}
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" },
                    { name: tSimpleHero('peopleTitle'), href: "/people" }, 
                    { name: tSimpleHero('peopleDetailsTitle'), href: `/people/details?id=${person._id}` }
                ]}
            />
            <PageLayout>
                {/* Top Section */}
                <div className="bg-bg-primary p-8 rounded-xl mb-8">
                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                        <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-200 -mt-10 sm:-mt-16 md:-mt-20">
                            <Image
                                src={person.profileImage || "/placeholder.svg"}
                                alt={person.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            />
                        </div>

                        <div className="flex-1 mt-6 md:mt-0 space-y-6">
                            <div>
                                <h1 className="text-2xl sm:text-4xl font-bold text-text-title mb-2">{person.name}</h1>
                                <p className="text-base sm:text-lg text-text-muted">{person.role}</p>
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
                                        <span className="text-sm text-text-title">{person.phone}</span>
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
                            <p className="text-gray-700 leading-relaxed">{person.summary}</p>
                            {person.professionalExperience && person.professionalExperience.length > 0 && (
                                <div className="space-y-2">
                                    <h4 className="text-md font-semibold text-text-title mt-4 mb-2">Professional Highlights</h4>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {person.professionalExperience.map((exp, index) => (
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
                            {person.practiceAreas && person.practiceAreas.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="text-md font-semibold text-text-title mb-2">Practice Areas</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {person.practiceAreas.map((area, index) => (
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
                        {person.education && person.education.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-text-title mb-4">Education</h3>
                                <div className="space-y-2">
                                    {person.education.map((edu, index) => (
                                        <p key={`edu-${index}`} className="text-sm text-gray-700">
                                            {edu}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Practice Areas / Specialties */}
                        {person.practiceAreas && person.practiceAreas.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-text-title mb-4">Practice Areas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {person.practiceAreas.map((area, index) => (
                                        <span key={`sidebar-area-${index}`} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Industry Focus */}
                        {person.industryFocus && person.industryFocus.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-text-title mb-4">Industry Focus</h3>
                                <div className="flex flex-wrap gap-2">
                                    {person.industryFocus.map((focus, index) => (
                                        <span key={`sidebar-focus-${index}`} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                            {focus}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Bar Admission */}
                        {person.barAdmission && person.barAdmission.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-text-title mb-4">Bar Admission</h3>
                                <div className="space-y-2">
                                    {person.barAdmission.map((bar, index) => (
                                        <p key={`bar-${index}`} className="text-sm text-gray-700">
                                            {bar}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </PageLayout>
        </>
    )
}

const PartnarDetailsPage = () => {
    return (
        <Suspense fallback={<div>Loading partner details...</div>}>
            <PartnerDetailsContent />
        </Suspense>
    );
}

export default PartnarDetailsPage;