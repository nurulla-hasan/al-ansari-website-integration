"use client";

import PageLayout from '@/components/layout/PageLayout';
import SectorCard from '@/components/sectors-components/SectorCard';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/utils/api';
import CardSkeletonLoader from '@/components/shared/CardSkeletonLoader';
import ErrorDisplay from '@/components/shared/ErrorDisplay';

const Sectors = () => {
    const tSectors = useTranslations('SectorsPage'); 
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('sectorsTitle'), href: "/sectors" }
    ];

    const { data: responseData, isLoading, isError } = useQuery({
        queryKey: ['sectors'],
        queryFn: () => fetcher('/dashboard/sector'),
    });

    const sectors = responseData?.data;

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('sectorsTitle')}
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
                {isLoading && <CardSkeletonLoader count={3} />}
                {isError && <ErrorDisplay message="Failed to load sectors." />}
                {!isLoading && !isError && (
                    <div>
                        <h3 className='text-text-muted'>
                            <span className='text-text-title font-semibold'>
                                {tSectors('mainHeadingPart1')}
                            </span>{' '}
                            {tSectors('mainHeadingPart2')}
                        </h3>
                        <div className='border-t border-gray-200 mt-3'></div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                            {
                                sectors && sectors.length > 0 ? (
                                    sectors.map((sector) => (
                                        <SectorCard key={sector._id} sector={sector} />
                                    ))
                                ) : (
                                    <p>{tSectors('noSectorsAvailable')}</p>
                                )
                            }
                        </div>
                    </div>
                )}
            </PageLayout>
        </div>
    );
};

export default Sectors;