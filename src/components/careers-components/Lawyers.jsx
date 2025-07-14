"use client";

import Image from "next/image";
import SoftPatternColumns from "../abstract-background/SoftPatternColumns";
import PageLayout from "../layout/PageLayout";

const Lawyers = () => {
    return (
        <section className="relative overflow-hidden">
            <PageLayout>
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end w-full lg:order-1">
                        <div className="relative w-full aspect-[10/6] rounded-xl overflow-hidden">
                            <Image
                                src="/assets/layers.png"
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
                            Lawyers
                        </h2>
                        <p className="text-base px-4 md:px-0 md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            We’re always on the lookout for talented professionals to join our growing team of attorneys and paralegals. We are committed to developing and providing a supportive atmosphere for each member of our team because we believe they are our most important asset. If you are interested in a career with us, please let us know by using our online application process below.
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

export default Lawyers;