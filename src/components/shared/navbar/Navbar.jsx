"use client"
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react"
import { Search, Menu, X } from "lucide-react"

import { usePathname } from "@/i18n/navigation";
import { useRouter as useNextRouter } from "next/navigation";
import { Link as NextIntlLink } from "@/i18n/navigation"; 
import { useLocale } from "next-intl";

const Navbar = () => {
    const t = useTranslations('Navbar');
    const nextRouter = useNextRouter(); 

    const currentPathname = usePathname(); 
    const locale = useLocale();

    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [debouncedValue, setDebouncedValue] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("people"), href: "/people" },
        { name: t("sectors"), href: "/sectors" },
        { name: t("insights"), href: "/insights" },
        { name: t("about"), href: "/about" },
        { name: t("contact"), href: "/contact" },
    ]

    // Debounce effect for search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(searchValue)
        }, 500)
        return () => clearTimeout(timer)
    }, [searchValue])

    // Push to query param (or handle search logic)
    useEffect(() => {
        if (debouncedValue.trim()) {
            // nextRouter.push(`/search?query=${encodeURIComponent(debouncedValue)}`); // Uncomment this line if you want to push to search page
            console.log("Searching for:", debouncedValue);
        }
    }, [debouncedValue, nextRouter])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="bg-white z-[1100] sticky top-0 shadow-lg">
            {/* <PageLayout> */}
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between lg:w-[40rem] w-full">
                    {/* Logo & Mobile Menu Toggle */}
                    <div className="flex items-center justify-between w-full lg:w-auto">
                        {/* Logo */}
                        <NextIntlLink href="/" className="flex-shrink-0">
                            <img src="/assets/logo.svg" alt="AL-ANSARI Logo" className="h-10 lg:h-16" />
                        </NextIntlLink>

                        {/* Mobile Menu Button (Hamburger) */}
                        <div className={`lg:hidden ${isMobileMenuOpen ? "hidden" : "flex"}  items-center gap-4`}>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-700 focus:outline-none"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    {/* Desktop Navigation Links (hidden on mobile) */}
                    <ul className="hidden lg:flex space-x-8 items-center flex-grow justify-end pr-8">
                        {navLinks.map((link) => {
                            const isActive = currentPathname === link.href 

                            return (
                                <li key={link.name}>
                                    <NextIntlLink
                                        href={link.href}
                                        className={`text-gray-700 text-sm hover:text-gray-900 transition-colors ${isActive ? "border-b-2 border-btn-bg text-gray-900" : ""
                                            }`}
                                    >
                                        {link.name}
                                    </NextIntlLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Right Side - Search + Language Toggle (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    {/* Search Input for Desktop */}
                    <div
                        className={`flex items-center ${showSearch ? "bg-bg-primary px-2 py-[5px] border border-btn-bg/50 rounded-md" : ""
                            } transition-all duration-300`}
                    >
                        <input
                            type="text"
                            placeholder={t("search")}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className={`${showSearch ? "w-40" : "w-0"
                                } transition-all text-sm duration-300 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowSearch(!showSearch)}
                            className="hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <Search className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>

                    {/* Language Toggle for Desktop */}
                    <div className="flex bg-bg-primary p-[3px] border border-btn-bg/50 rounded-md *:rounded-md overflow-hidden">
                        {/* 'Eng' */}
                        <NextIntlLink scroll={false} href={currentPathname} locale="en">
                            <button
                                className={`px-3 py-1 text-xs font-medium transition-colors ${locale === "en"
                                    ? "bg-btn-bg text-white rounded-md"
                                    : "text-black cursor-pointer"
                                    }`}
                            >
                                Eng
                            </button>
                        </NextIntlLink>
                        {/* 'عربي' */}
                        <NextIntlLink scroll={false} href={currentPathname} locale="ar">
                            <button
                                className={`px-3 py-1 text-xs font-medium transition-colors ${locale === "ar"
                                    ? "bg-btn-bg text-white rounded-md"
                                    : "text-black cursor-pointer"
                                    }`}
                            >
                                عربي
                            </button>
                        </NextIntlLink>
                    </div>
                </div>
            </div>
            {/* </PageLayout> */}

            {/* Mobile Menu Overlay/Sidebar */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
            )}
            <div
                className={`fixed top-0 left-0 h-full rounded-r-2xl w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-50 lg:hidden
                    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-6">
                    <img src="/assets/logo.svg" alt="AL-ANSARI Logo" className="h-10" />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-700 focus:outline-none p-2"
                        aria-label="Close mobile menu"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col gap-4 mb-6">
                    {navLinks.map((link) => {
                        const isActive = currentPathname === link.href
                        return (
                            <li key={link.name}>
                                <NextIntlLink
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-1 px-4 rounded-md text-sm font-medium transition-colors
                                        ${isActive ? "bg-btn-bg text-white" : "text-gray-700 hover:bg-gray-100"}`}
                                >
                                    {link.name}
                                </NextIntlLink>
                            </li>
                        )
                    })}
                </ul>

                {/* Search Input for Mobile (inside mobile menu) */}
                <div
                    className={`flex items-center bg-bg-primary p-1.5 text-xs border border-btn-bg rounded-md mb-4`}
                >
                    <input
                        type="text"
                        placeholder={t("search")}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className={`w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none pr-2`}
                    />
                    <Search className="w-4 h-4 text-gray-600 flex-shrink-0" />
                </div>


                {/* Language Toggle for Mobile */}
                <div className="flex bg-bg-primary p-1 border border-btn-bg rounded-md *:rounded-md overflow-hidden w-full">
                    {/* 'Eng' */}
                    <NextIntlLink href={currentPathname} locale="en" className="flex-1">
                        <button
                            className={`px-3 py-1 text-xs font-medium transition-colors w-full h-full ${locale === "en"
                                ? "bg-btn-bg text-white"
                                : "text-black cursor-pointer"
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)} 
                        >
                            Eng
                        </button>
                    </NextIntlLink>
                    {/* 'عربي' */}
                    <NextIntlLink href={currentPathname} locale="ar" className="flex-1">
                        <button
                            className={`px-3 py-1 text-xs font-medium transition-colors w-full h-full ${locale === "ar"
                                ? "bg-btn-bg text-white"
                                : "text-black cursor-pointer"
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)} 
                        >
                            عربي
                        </button>
                    </NextIntlLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;