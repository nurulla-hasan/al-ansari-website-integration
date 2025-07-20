"use client";

import PageLayout from '@/components/layout/PageLayout';
import Partners from '@/components/people-components/Partners';
import Teams from '@/components/people-components/Teams';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/utils/api';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import { useTranslations } from 'next-intl';
import PeopleSkeletonLoader from '@/components/shared/PeopleSkeletonLoader';

const PeoplePage = () => {
    const tPeople = useTranslations('PeoplePage');
    const tNavbar = useTranslations('Navbar');
    const tSimpleHero = useTranslations('SimpleHero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('peopleTitle'), href: "/people" }
    ];

    // Partners
    const { data: partnersResponse, isLoading: isLoadingPartners, isError: isErrorPartners } = useQuery({
        queryKey: ['partners'],
        queryFn: () => api.get('/dashboard/person?category=partners'),
    });

    const partners = partnersResponse?.data?.data;

    // Team members
    const { data: teamMembersResponse, isLoading: isLoadingTeamMembers, isError: isErrorTeamMembers } = useQuery({ 
        queryKey: ['teamMembers'],
        queryFn: () => api.get('/dashboard/person?category=team'),
    });

    const teamMembers = teamMembersResponse?.data?.data;

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('peopleTitle')} 
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
                {(isLoadingPartners || isLoadingTeamMembers) && <PeopleSkeletonLoader count={3} />}
                {(!isLoadingPartners && isErrorPartners) && <ErrorDisplay message={tPeople('failedToLoadPartners')} />}
                {(!isLoadingTeamMembers && isErrorTeamMembers) && <ErrorDisplay message={tPeople('failedToLoadTeamMembers')} />}
                {(!isLoadingPartners && !isErrorPartners && !isLoadingTeamMembers && !isErrorTeamMembers) && (
                    <div className='space-y-18'>
                        {partners && partners.length > 0 ? (
                            <Partners title={tPeople('partnersSectionTitle')} data={partners} />
                        ) : (
                            <p>{tPeople('noPartnersAvailable')}</p>
                        )}
                        {teamMembers && teamMembers.length > 0 ? (
                            <Teams title={tPeople('teamSectionTitle')} data={teamMembers} />
                        ) : (
                            <p>{tPeople('noTeamMembersAvailable')}</p>
                        )}
                    </div>
                )}
            </PageLayout>
        </div>
    );
};

export default PeoplePage;