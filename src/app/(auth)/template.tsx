"use client"
import {useState} from "react";
import Link from "next/link";

export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [input, setInput] = useState("")
    return (
        <div>
            AuthLayout

            <Link className={"m-2"} href="/register">register</Link>
            <Link className={"m-2"} href="/login">login</Link>
            <Link className={"m-2"} href="/forget-password">forget password</Link>

            <input type="text" className={"bg-amber-100"} onChange={(e) => setInput(e.target.value)} />
            {children}
        </div>
    );
}
