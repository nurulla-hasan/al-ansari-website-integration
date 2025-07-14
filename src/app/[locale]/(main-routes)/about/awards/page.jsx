"use client"

import AboutPageButtons from "@/components/about-components/AboutPageButtons";
import AwardCard from "@/components/about-components/awards-components/AwardCard";
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { awardsData } from "@/data/data";
import { useTranslations } from "next-intl";

const AwardsPage = () => {
    const tSimpleHero = useTranslations('SimpleHero'); 
    const tNavbar = useTranslations('Navbar'); 

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" }, 
        { name: tSimpleHero('aboutUsTitle'), href: "/about" }, 
        { name: tSimpleHero('awardsTitle'), href: "/about/awards" }
    ];

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={tSimpleHero('awardsTitle')}
                breadcrumbs={breadcrumbs}
                children={<AboutPageButtons />}
            />
            <PageLayout>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {awardsData.map((award) => (
                        <AwardCard
                            key={award.id}
                            data={award}
                        />
                    ))}
                </div>
            </PageLayout>
        </div>
    );
};

export default AwardsPage;