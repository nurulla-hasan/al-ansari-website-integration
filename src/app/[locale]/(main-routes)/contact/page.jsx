"use client";

import ContactInfo from '@/components/contact-components/ContactInfo';
import ContactUs from '@/components/home-components/contact-us/ContactUs';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useTranslations } from 'next-intl';

const ContactPage = () => {
    const tSimpleHero = useTranslations('SimpleHero');
    const tNavbar = useTranslations('Navbar');

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('contactTitle')}
                breadcrumbs={[
                    { name: tNavbar('home'), href: "/" },
                    { name: tSimpleHero('contactTitle'), href: "/contact" } 
                ]}
            />
            <ContactInfo />
            <ContactUs />
        </div>
    );
};

export default ContactPage;