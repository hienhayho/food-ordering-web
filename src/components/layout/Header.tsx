"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
    const session = useSession();
    const status = session.status;

    return (
        <div className="relative">
            {/* <header className="fixed left-3 right-3 max-w-4xl flex mx-auto items-center justify-between z-10"> */}
            <header className=" flex items-center justify-between">

                <nav className="flex font-semibold items-center gap-8 text-gray-500">
                    <Link className="text-primary font-semibold text-2xl" href="/">
                        PIZZA
                    </Link>
                    <Link href={'/'}>Home</Link>
                    <Link href={''}>Menu</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>Contact</Link>

                </nav>
                <nav className="flex items-center text-gray-500 gap-6 font-semibold">
                    {status === "authenticated" && (
                        <button
                            onClick={() => signOut()}
                            className="bg-primary rounded-full text-white hover:bg-red-400 transition-all px-8 py-2"
                        >
                            Logout
                        </button>
                    )}
                    {status === "unauthenticated" && (
                        <>
                            <Link className="hover:underline hover:text-gray-600" href={'/login'}>Login</Link>
                            <Link
                                href={'/register'}
                                className="bg-primary rounded-full text-white hover:bg-red-400 transition-all px-8 py-2"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
        </div >
    )
}

export default Header;