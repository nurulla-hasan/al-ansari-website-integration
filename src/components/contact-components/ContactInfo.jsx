"use client"
import 'leaflet/dist/leaflet.css';
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import PageLayout from "../layout/PageLayout";
import dynamic from "next/dynamic"
import { useTranslations } from 'next-intl';
import { contactData } from '@/data/data';

const ContactInfo = () => {
    const tContactInfoPage = useTranslations('ContactInfoPage');

    const MapComponent = dynamic(() => import("./MapComponent"), {
        ssr: false,
        loading: () => (
            <div className="w-full h-96 lg:h-full min-h-[400px] rounded-lg bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">{tContactInfoPage('loadingMap')}</p>
            </div>
        ),
    });

    return (
        <PageLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Information */}
                <div className="space-y-8">
                    {/* Header */}
                    <div>
                        <h2 className="font-poltawski text-3xl md:text-4xl text-text-title font-bold mb-6">{tContactInfoPage('contactInfoTitle')}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {tContactInfoPage('contactInfoDescription')}
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        {/* Location */}
                        <div className="flex items-start gap-4 border border-gray-200 p-3 rounded-xl">
                            <div className="w-10 h-10 bg-btn-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tContactInfoPage('locationHeading')}</h3>
                                <p className="text-gray-600 leading-relaxed">{contactData?.location}</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 border border-gray-200 p-3 rounded-xl">
                            <div className="w-10 h-10 bg-btn-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tContactInfoPage('emailHeading')}</h3>
                                <a
                                    href={`mailto:${contactData?.email}`}
                                    className="text-gray-600 hover:text-btnbg-btn-bg transition-colors"
                                >
                                    {contactData?.email}
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 border border-gray-200 p-3 rounded-xl">
                            <div className="w-10 h-10 bg-btn-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tContactInfoPage('phoneHeading')}</h3>
                                <a
                                    href={`tel:${contactData?.phone}`}
                                    className="text-gray-600 hover:text-btnbg-btn-bg transition-colors"
                                >
                                    {contactData?.phone}
                                </a>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="flex items-start gap-4 border border-gray-200 p-3 rounded-xl">
                            <div className="w-10 h-10 bg-btn-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tContactInfoPage('officeHoursHeading')}</h3>
                                <p className="text-gray-600">{contactData?.officeHours}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <MapComponent />
                </div>
            </div>
        </PageLayout>
    );
};

export default ContactInfo;