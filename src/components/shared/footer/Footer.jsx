"use client"

import { useForm } from "react-hook-form"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl" 

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const t = useTranslations('Footer')

    const onSubmit = (data) => {
        console.log("Newsletter subscription:", data.email)
        reset()
    }

    // Link arrays: name will now be a translation key
    const informationLinks = [
        { key: "aboutUs", href: "/about" },
        { key: "awards", href: "/about/awards" },
        { key: "csr", href: "/about/csr" },
        { key: "careers", href: "/careers" },
    ]

    const expertiseLinks = [
        { key: "people", href: "/people" },
        { key: "sectors", href: "/sectors" },
        { key: "insights", href: "/insights" },
    ]

    const contactLinks = [
        { key: "latestNews", href: "/insights/updates" },
        { key: "upcomingEvents", href: "/insights/events" },
        { key: "newsletters", href: "/insights/newsletters" },
        { key: "contact", href: "/contact" },
    ]

    const legalLinks = [
        { key: "termsAndConditions", href: "/terms" },
        { key: "privacyPolicy", href: "/privacy" },
        { key: "fraudAlert", href: "/fraud-alert" },
        { key: "disclaimer", href: "/disclaimer" },
    ]

    return (
        <footer className="relative px-4 sm:px-6 lg:px-8">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/footer-bg.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/80 bg-opacity-80"></div>
            </div>

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="py-8 md:py-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                        <div>
                            <h3 className="text-2xl lg:text-4xl font-semibold text-white font-poltawski">
                                {t('newsletterHeading')}
                            </h3>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 w-full">
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder={t('emailPlaceholder')}
                                    className="px-4 py-3 rounded-md bg-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-80 transition-all duration-300"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer"
                                >
                                    {t('subscribeButton')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-700"></div>
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto py-10 md:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-18 justify-items-center text-center sm:justify-items-start sm:text-left">
                        {/* Logo and Social Media */}
                        <div className="flex flex-col items-center sm:items-start gap-6">
                            <div className="mx-auto sm:mx-0">
                                <Image
                                    src="/assets/footer-logo.svg"
                                    alt="Al-Ansari & Associates Logo"
                                    className="object-cover"
                                    width={150}
                                    height={150}
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </div>

                            <div>
                                <h4 className="text-white text-sm font-medium mb-4">
                                    {t('findUsOn')}
                                </h4>
                                <div className="flex space-x-4">
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Facebook className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Twitter className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Instagram className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Information */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-4">
                                {t('information')}
                            </h4>
                            <ul className="space-y-3">
                                {informationLinks.map((link) => (
                                    <li key={link.key}>
                                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                            {t(link.key)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Expertise */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-4">
                                {t('ourExpertise')}
                            </h4>
                            <ul className="space-y-3">
                                {expertiseLinks.map((link) => (
                                    <li key={link.key}>
                                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                            {t(link.key)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Update */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-4">
                                {t('contactAndUpdate')}
                            </h4>
                            <ul className="space-y-3">
                                {contactLinks.map((link) => (
                                    <li key={link.key}>
                                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                            {t(link.key)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700"></div>
                {/* Bottom Footer */}
                <div className="max-w-7xl mx-auto py-5 md:py-10 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.key}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-sm transition-colors"
                                >
                                    {t(link.key)}
                                </Link>
                            ))}
                        </div>
                        <div className="text-gray-400 text-sm">
                            {t('copyright')}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer