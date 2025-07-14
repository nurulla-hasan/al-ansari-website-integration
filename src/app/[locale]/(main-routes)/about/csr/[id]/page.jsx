import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { csrData } from "@/data/data";
import { getTranslations } from "next-intl/server"; 
import Image from "next/image";

const CsrDetails = async ({ params }) => {
    const tCsrDetailsPage = await getTranslations('CsrDetailsPage');
    const tSimpleHero = await getTranslations('SimpleHero'); 
    const tNavbar = await getTranslations('Navbar');        


    const { id } = params; 
    const item = csrData.find((dataItem) => dataItem.id === id); 

    if (!item) {
        return (
            <div className="min-h-minus-header flex items-center justify-center">
                <p className="text-lg text-red-500">{tCsrDetailsPage('notFound')}</p> 
            </div>
        );
    }

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" }, 
        { name: tSimpleHero('aboutUsTitle'), href: "/about" },
        { name: tSimpleHero('csrTitle'), href: "/about/csr" }, 
        { name: tSimpleHero('detailsTitle'), href: `/about/csr/${item?.id}` } 
    ];

    return (
        <div>
            <SimpleHero
                title={tSimpleHero('detailsTitle')} 
                breadcrumbs={breadcrumbs}
            />
            <PageLayout>
                <h1 className="font-poltawski text-2xl md:text-5xl font-bold mb-8 md:mb-12 text-text-title">
                    {item?.title}
                </h1>

                <div className="relative w-full aspect-[16/5] rounded-xl overflow-hidden mb-8">
                    <Image
                        src={item?.imageSrc}
                        alt={item?.title || tCsrDetailsPage('notFound')}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <p className="md:text-xl text-sm px-2 text-gray-700 leading-relaxed">
                    {item?.description}
                </p>
            </PageLayout>
        </div>
    );
};

export default CsrDetails;