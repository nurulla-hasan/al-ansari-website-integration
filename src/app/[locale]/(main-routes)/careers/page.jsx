"use client";
import ApplyJob from "@/components/careers-components/ApplyJob";
import BusinessServices from "@/components/careers-components/BusinessServices";
import Internships from "@/components/careers-components/Internships";
import Lawyers from "@/components/careers-components/Lawyers";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";

const page = () => {
    return (
        <div className="min-h-minus-header">
            <SimpleHero
                title="Careers"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]}
            />
            <Lawyers />
            <BusinessServices />
            <Internships />
            <ApplyJob />
        </div>
    );
};

export default page;