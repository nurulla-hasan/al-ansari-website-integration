"use client";

import PageLayout from '@/components/layout/PageLayout';
import Partners from '@/components/people-components/Partners';
import Teams from '@/components/people-components/Teams';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { partnersData, teamMembersData } from '@/data/data';
import { useTranslations } from 'next-intl';

const PeoplePage = () => {
    const tPeople = useTranslations('PeoplePage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('peopleTitle'), href: "/people" }
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('peopleTitle')} 
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
                <div className='space-y-18'>
                    <Partners title={tPeople('partnersSectionTitle')} data={partnersData} />
                    <Teams title={tPeople('teamSectionTitle')} data={teamMembersData} />
                </div>
            </PageLayout>
        </div>
    );
};

export default PeoplePage;