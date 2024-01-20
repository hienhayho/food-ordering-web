import Link from "next/link";

const Header = () => {
    return (
        <div className="relative">
            {/* <header className="fixed left-3 right-3 max-w-4xl flex mx-auto items-center justify-between z-10"> */}
            <header className=" flex items-center justify-between">
                <Link className="text-primary font-semibold text-2xl" href="">
                    PIZZA
                </Link>
                <nav className="flex font-semibold items-center gap-8 text-gray-500">
                    <Link href={''}>Home</Link>
                    <Link href={''}>Menu</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>Contact</Link>
                    <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;