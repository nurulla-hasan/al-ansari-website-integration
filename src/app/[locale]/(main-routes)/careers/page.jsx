"use client";
import ApplyJob from "@/components/careers-components/ApplyJob";
import BusinessServices from "@/components/careers-components/BusinessServices";
import Internships from "@/components/careers-components/Internships";
import Lawyers from "@/components/careers-components/Lawyers";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { useTranslations } from "next-intl";

const Page = () => {
    const t = useTranslations("SimpleHero");
    const tNavbar = useTranslations("Navbar");

    const breadcrumbs = [
        { name: tNavbar("home"), href: "/" },
        { name: t("careersTitle"), href: "/careers" }
    ];

    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title={t("careersTitle")}
                breadcrumbs={breadcrumbs}
            />
            <Lawyers />
            <BusinessServices />
            <Internships />
            <ApplyJob />
        </div>
    );
};

export default Page;