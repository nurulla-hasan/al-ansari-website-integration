"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import SoftPatternColumns from '@/components/abstract-background/SoftPatternColumns'
import PageLayout from '@/components/layout/PageLayout'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'; 
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useQuery } from '@tanstack/react-query'
import { api, baseURL } from '@/utils/api'
import ErrorDisplay from '@/components/shared/ErrorDisplay'
import { formatDate } from '@/utils/dateFormatter'
import Link from 'next/link'
import SliderSkeleton from '@/components/shared/SliderSkeleton'


const LatestNews = () => {
    const t = useTranslations('Latest News')

    const { data: responseData, isLoading, isError } = useQuery({
        queryKey: ['updates'],
        queryFn: () => api.get('/dashboard/updates?limit=5'),
    });

    const updates = responseData?.data?.data;

    const handleScroll = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-bg-primary md:py-20 relative overflow-hidden">
            <SoftPatternColumns />
            <PageLayout>
                <div className="text-center relative z-10 mb-5 md:mb-16">
                    <h2 className="font-poltawski md:text-4xl text-2xl text-text-title font-bold">{t("latestNews")}</h2>
                </div>

                <div className="relative z-10 px-0 sm:px-12 md:px-16 lg:px-20 xl:px-24">
                    {isLoading && <SliderSkeleton count={2} />}
                    {!isLoading && isError && <ErrorDisplay message={t('failedToLoadLatestNews')} />}
                    {!isLoading && !isError && updates && updates.length > 0 ? (
                        <Swiper
                            className='!h-fit'
                            modules={[Navigation, Autoplay]} 
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.custom-prev-button',
                                nextEl: '.custom-next-button',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1.2 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2, spaceBetween: 30 },
                            }}
                        >
                            {updates.map((item) => (
                                <SwiperSlide key={item._id}>
                                    <div className='bg-white rounded-2xl overflow-hidden p-4 h-full'>
                                        <div className="bg-white rounded-xl overflow-hidden flex flex-col gap-3 lg:gap-0 items-center lg:flex-row h-full">
                                            <Image
                                                src={item?.image ? `${baseURL}${item?.image}` : '/assets/latest-news-01.jpg'} 
                                                alt={item?.title}
                                                width={120}
                                                height={120}
                                                className="lg:w-30 w-full h-30 object-cover rounded-xl"
                                            />
                                            <div className="px-6 flex flex-col flex-1">
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-1">{formatDate(item?.createdAt)}</p>
                                                    <h3 className="text-sm font-semibold text-btn-bg leading-tight">{item?.title}</h3>
                                                </div>
                                                <p className="text-gray-700 mt-4 text-xs">
                                                    {item?.description.slice(0, 70)} ...{' '}
                                                    <Link href={`/insights/updates/${item?._id}`} className='cursor-pointer text-btn-bg'>
                                                        see more
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        !isLoading && !isError && <div className='text-center'>{t('noNewsAvailable')}</div>
                    )}


                    <div className='flex items-center flex-col gap-3 mt-8 cursor-pointer' onClick={handleScroll}>
                        <h3 className='text-text-title'>{t("services")}</h3>
                        <ArrowDown className='text-text-muted animate-bounce' size={26} />
                    </div>

                    {/* Custom Navigation Arrows with Tailwind CSS */}
                    <div className="absolute top-1/2 md:top-1/3 -left-2 -translate-y-1/2 flex items-center justify-center
                                    w-10 h-10 rounded-full cursor-pointer z-10
                                     transition-colors
                                    custom-prev-button"
                    >
                        <ChevronLeft className="w-8 h-8 text-btn-bg" />
                    </div>
                    <div className="absolute top-1/2 md:top-1/3 -right-0 -translate-y-1/2 flex items-center justify-center
                                    w-10 h-10 rounded-full cursor-pointer z-10
                                    transition-colors
                                    custom-next-button"
                    >
                        <ChevronRight className="w-8 h-8 text-btn-bg" />
                    </div>
                </div>
            </PageLayout>
        </div>
    )
}

export default LatestNews