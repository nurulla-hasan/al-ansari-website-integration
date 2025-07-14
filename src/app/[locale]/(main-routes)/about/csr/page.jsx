"use client"

import AboutPageButtons from "@/components/about-components/AboutPageButtons";
import CsrCard from "@/components/about-components/csr-components/CsrCard";
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { csrData } from "@/data/data";
import { useTranslations } from "next-intl";

const CsrPage = () => {
    const tSimpleHero = useTranslations('SimpleHero'); 
    const tNavbar = useTranslations('Navbar'); 

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" }, 
        { name: tSimpleHero('aboutUsTitle'), href: "/about" }, 
        { name: tSimpleHero('csrTitle'), href: "/about/csr" }
    ];

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={tSimpleHero('csrTitle')}
                breadcrumbs={breadcrumbs}
                children={<AboutPageButtons />}
            />
            <PageLayout>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {csrData.map((csr) => (
                        <CsrCard
                            key={csr.id}
                            data={csr}
                        />
                    ))}
                </div>
            </PageLayout>
        </div>
    );
};

export default CsrPage;