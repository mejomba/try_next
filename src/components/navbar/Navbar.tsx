'use client'
import react from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    const navs = [
        {
            title: "Home",
            link: '/',
        },
        {
            title: "About",
            link: '/about',
        }
    ]
    return (
        <div>
            <nav>
                <ul className="flex m-2">
                    {
                        navs.map((nav) => (
                        <li className="mx-2">
                            <Link href={`${nav.link}`} className={nav.link === pathname ? "text-blue-600": ""}>{nav.title}</Link>
                        </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;