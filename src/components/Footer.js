"use client";
import { fetchMockData } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialFollow from "./SocialFollow";

export default function Footer() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const [navLinks, setNavLinks] = useState([]);
    const [otherPages, setOtherPages] = useState([]);

    useEffect(() => {
        const getLinks = async () => {
            const navData = await fetchMockData('navLinks', baseUrl);
            setNavLinks(navData);

            const otherPagesData = await fetchMockData('otherPages', baseUrl);
            setOtherPages(otherPagesData);
        };
        getLinks();
    }, []);

    return (
        <div className="mt-5 py-5 border-top border-2 border-dark">
            <div className="container-lg mx-auto">
                <Link href="/" className="navbar-brand">
                    <Image src="/assets/images/logo.png" alt="logo" className="logo" height={35} width={110} priority />
                </Link>
                <ul className='pt-3 pb-1 list-unstyled d-flex flex-column flex-md-row flex-wrap gap-3 fs-14'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link className={`text-dark text-decoration-none fw-semibold ${link.status === '1' ? 'active' : ''}`} href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <SocialFollow />
                <ul className="d-flex flex-wrap py-3 gap-3 list-unstyled mb-0 fs-12">
                    {otherPages.map((link, index) => (
                        <li key={index}>
                            <Link className={`text-dark text-decoration-none`} href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <p className="text-muted fs-12 pt-2">Copyright <span className="text-dark fw-semibold">2025</span> BBC. All rights reserved.  The BBC is not responsible for the content of external sites.
                    <Link href="/" className="text-dark fw-semibold text-decoration-none"> Read about our approach to external linking</Link>
                </p>
            </div>
        </div>
    )
}