"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchMockData } from '@/utils/api';

export default function Navbar() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const pathname = usePathname();
    const [navLinks, setNavLinks] = useState([]);
    const safeLinks = navLinks || [];

    useEffect(() => {
        const getLinks = async () => {
            const navData = await fetchMockData('navLinks', baseUrl);
            setNavLinks(navData);
        };
        getLinks();
    }, []);

    return (
        <>
            <nav className="navbar fixed-top bg-white border-bottom py-3">
                <div className="container-fluid px-lg-2">
                    <div className='row w-100 m-auto align-items-center'>
                        <div className='col-4'>
                            <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
                                <span className="navbar-toggler-icon" />
                            </button>
                        </div>
                        <div className='col-4 text-center'>
                            <Link href="/" className="navbar-brand">
                                <Image src="/assets/images/logo.png" alt="logo" className="logo" height={45} width={130} priority />
                            </Link>
                        </div>
                        <div className='col-4 d-none d-lg-flex gap-3 justify-content-end'>
                            <Link href="/" className="btn btn-dark rounded-0">Register</Link>
                            <Link href="/" className="btn btn-transparent rounded-0">Login</Link>
                        </div>
                        <div className='col-4 d-flex d-lg-none justify-content-end'>
                            <Link href="/" className="btn btn-transparent rounded-0 p-0"><i className="bi bi-person fs-4"></i></Link>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse p-2" id="navbarScroll">
                        <div className="input-group">
                            <input type="text" className="form-control rounded-0" placeholder="Search" aria-label="Search" aria-describedby="search-nav" />
                            <span className="input-group-text rounded-0 bg-dark text-white" id="search-nav"><i className="bi bi-search"></i></span>
                        </div>

                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            {navLinks.map((link, index) => {
                                const isActive =
                                    pathname === link.href ||
                                    (link.children && link.children.some(child => child.href === pathname));

                                if (link.children?.length > 0) {
                                    return (
                                        <li className="nav-item dropdown" key={index}>
                                            <Link href={link.href} className={`nav-link dropdown-toggle ${isActive ? 'active' : ''}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                                {link.label}
                                            </Link>
                                            <ul className="dropdown-menu border-0">
                                                {link.children.map((child, childIndex) => (
                                                    <li key={childIndex}>
                                                        <Link href={child.href} className="dropdown-item px-1">
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                }

                                return (
                                    <li className="nav-item" key={index}>
                                        <Link href={link.href} className={`nav-link${isActive ? ' active' : ''}`} aria-current={isActive ? 'page' : undefined} >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="nav-menu d-none d-lg-flex border-bottom py-2">
                {safeLinks.map((link, index) => (
                    <li key={index}>
                        <Link className={`text-dark text-decoration-none fw-semibold ${link.status === '1' ? 'active' : ''}`} href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
