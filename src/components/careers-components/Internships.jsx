"use client";

import Image from "next/image";
import SoftPatternColumns from "../abstract-background/SoftPatternColumns";
import PageLayout from "../layout/PageLayout";

const Internships = () => {
    return (
        <section className="relative overflow-hidden">
            <PageLayout>
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end w-full lg:order-1">
                        <div className="relative w-full aspect-[10/6] rounded-xl overflow-hidden">
                            <Image
                                src="/assets/Internships.jpg"
                                alt="Legal Practice"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    {/* Content Section */}
                    <div className="lg:w-1/2 text-center lg:text-left relative z-10 w-full lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poltawski font-semibold text-text-title mb-4 md:mb-6">
                            Internships
                        </h2>
                        <p className="text-base px-4 md:px-0 md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            We believe that internships provide a great opportunity for students to explore potential careers, gain valuable job experience and fulfill college or university requirements. If you are currently a student and wish to apply for an internship placement with us, please apply using our online application process.
                        </p>

                        {/* Geometric pattern in the background */}
                        <div className="absolute -left-20 md:-left-40 lg:-left-50 inset-y-0 w-full hidden lg:block -z-10">
                            <SoftPatternColumns />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </section>
    );
};

export default Internships;