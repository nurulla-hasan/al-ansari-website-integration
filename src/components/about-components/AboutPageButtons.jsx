"use client";

import { Link as NextIntlLink } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const AboutPageButtons = () => {
    const t = useTranslations('AboutPage');
    const [activeButton, setActiveButton] = useState("aboutUsTitle");

    useEffect(() => {
        const path = window.location.pathname;
        if (path.includes("/awards")) {
            setActiveButton("awardsTitle");
        } else if (path.includes("/csr")) {
            setActiveButton("csrTitle");
        } else {
            setActiveButton("aboutUsTitle");
        }
    }, []);

    const buttonClass = (buttonKey) => `
        md:px-4 md:py-2 px-2 py-1 rounded-md font-medium md:text-sm text-xs transition-colors duration-200 cursor-pointer backdrop-blur-sm
        ${activeButton === buttonKey
            ? "bg-btn-bg text-white"
            : "bg-transparent text-btn-bg border border-btn-bg"
        }
    `;

    const buttons = [
        {
            href: "/about",
            key: "aboutUsTitle"
        },
        {
            href: "/about/awards",
            key: "awardsTitle"
        },
        {
            href: "/about/csr",
            key: "csrTitle"
        }
    ]

    return (
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {buttons.map((button) => (
                <NextIntlLink
                    key={button.key}
                    href={button.href}
                    className={buttonClass(button.key)}
                    onClick={() => setActiveButton(button.key)}
                >
                    {t(button.key)}
                </NextIntlLink>
            ))}
        </div>
    );
};

export default AboutPageButtons;