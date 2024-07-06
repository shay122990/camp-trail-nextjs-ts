// import { useState } from "react"
// import { NAV_LINKS } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import Button from "./Button"


// const Navbar = () => {
//      const [isMenuOpen, setIsMenuOpen] = useState(false);

//      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   return (
//    <nav className="flexBetween max-container padding-container relative z-30 py-5">
//    <Link href="/">
//     <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} className="auto-aspect-ratio"/>
//    </Link>
//    <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) =>(
//             <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
//         ))}
//     </ul>
//     <div className="lg:flexCenter hidden">
//         <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"/>
//     </div>
//     <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" onClick={toggleMenu}/>
//    </nav>
//   )
// }

// export default Navbar


// components/Navbar.tsx

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import dynamic from "next/dynamic";

// Dynamically import the HamburgerMenu component to ensure it only runs on the client side
// ssr: false: This option tells Next.js not to server-side render (ssr)
const HamburgerMenu = dynamic(() => import("./HamburgerMenu"), { ssr: false });

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} className="auto-aspect-ratio" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>
      <HamburgerMenu navLinks={NAV_LINKS} />
    </nav>
  );
};

export default Navbar;
