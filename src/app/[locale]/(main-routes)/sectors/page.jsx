"use client";

import PageLayout from '@/components/layout/PageLayout';
import SectorCard from '@/components/sectors-components/SectorCard';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { sectorsData } from '@/data/data';
import { useTranslations } from 'next-intl';

const Sectors = () => {
    const tSectors = useTranslations('SectorsPage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('sectorsTitle'), href: "/sectors" }
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('sectorsTitle')}
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
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
                            sectorsData && sectorsData.length > 0 ? (
                                sectorsData.map((sector) => (
                                    <SectorCard key={sector._id} sector={sector} />
                                ))
                            ) : (
                                <p>{tSectors('noSectorsAvailable')}</p>
                            )}
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default Sectors;