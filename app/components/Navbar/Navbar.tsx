import { Searchbar } from "..";
import { navlinks } from "@/app/static_data";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/app/common";

const Navbar = () => {
    return (
        <nav className="flex justify-between border-b-[0.1px] min-h-[5rem] items-center px-[5rem]">
            <div className="flex">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={150}
                    height={150}
                />
                <Searchbar />
            </div>


            <div>
                {
                    navlinks.map((links: NavLinks, index: number) => (
                        <Link key={index} href={links.url} className="mx-2" >{links.name}</Link>
                    ))
                }
                <Link href="/" className="border-2 border-white rounded-lg p-[0.75rem] ml-2">Get Started</Link>
            </div>

        </nav>
    )
}

export default Navbar;