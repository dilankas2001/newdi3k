"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page path

  // Function to check if a link is active
  const isActive = (path: string) =>
    pathname === path ? "text-yellow-400" : "hover:text-gray-300";

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-3 text-white bg-black bg-opacity-90">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // Replace with your actual logo path
            alt="Di3K Logo"
            width={100}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-12 text-sm font-medium md:flex">
          <Link href="/" className={`${isActive("/")}`}>Home</Link>
          <Link href="/about" className={`${isActive("/about")}`}>About</Link>
          <Link href="/services" className={`${isActive("/services")}`}>Our Services</Link>
          <Link href="/portfolio" className={`${isActive("/portfolio")}`}>Portfolio</Link>          
          <Link href="/contact" className={`${isActive("/contact")}`}>Contact</Link>
        </nav>

        {/* Get In Touch Button (Hidden on small screens) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="px-6 py-2 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-2xl text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <div className="py-4 text-white bg-black md:hidden">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className={`${isActive("/")}`} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={`${isActive("/about")}`} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className={`${isActive("/services")}`} onClick={() => setIsOpen(false)}>Our Services</Link>
            <Link href="/portfolio" className={`${isActive("/portfolio")}`} onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/blog" className={`${isActive("/blog")}`} onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className={`${isActive("/contact")}`} onClick={() => setIsOpen(false)}>Contact</Link>
            {/* Get In Touch Button */}
            <Link href="/contact">
              <button className="px-6 py-2 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                Get In Touch
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
