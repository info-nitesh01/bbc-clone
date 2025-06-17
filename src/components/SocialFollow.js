import { fetchMockData } from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SocialFollow() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        const getLinks = async () => {
            const socialLinksData = await fetchMockData('socicalLinks', baseUrl);
            setSocialLinks(socialLinksData);
        };
        getLinks();
    }, []);

    return (
        <div className="border-top pt-3 d-flex flex-column flex-md-row align-items-md-center gap-3">
            <h6 className="fw-semibold fs-16 mb-0">Follow BBC on:</h6>
            <ul className="d-flex gap-3 list-unstyled mb-0">
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <Link className={`text-dark`} href={link.href} target="_blank"><i className={link.iconClass}></i></Link>
                    </li>
                ))}
            </ul>            
        </div>
    )
}