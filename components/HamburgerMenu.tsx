'use client'; 

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HamburgerMenuProps {
  navLinks: { href: string; label: string; key: string }[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Image 
        src="menu.svg" 
        alt="menu" 
        width={32} 
        height={32} 
        className="inline-block cursor-pointer lg:hidden" 
        onClick={toggleMenu} 
      />
      {isMenuOpen && (
        <ul className="absolute top-16 right-0 bg-white p-4 shadow-md lg:hidden">
          {navLinks.map((link) => (
            <li key={link.key} className="py-2">
              <Link href={link.href} className="block text-gray-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HamburgerMenu;
