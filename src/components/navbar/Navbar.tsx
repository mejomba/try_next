'use client'

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const handelClick = () => {
        router.back()
    }
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
                        <li className="mx-2" key={nav.title}>
                            <Link href={`${nav.link}`} className={nav.link === pathname ? "text-blue-600": ""}>{nav.title}</Link>
                        </li>
                        ))
                    }
                </ul>
                <button onClick={handelClick} className={"bg-amber-500 p-2"}>click</button>
            </nav>
        </div>
    )
}

export default Navbar;