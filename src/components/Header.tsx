"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Squad", href: "/playing11" },
  { name: "Club Legends", href: "/legends" },
  { name: "Jerseys", href: "/jerseys" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0B0B1F] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="FC Barcelona Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">FC Barcelona</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-400 relative group px-2 py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
            
          </div>
          <div className="md:hidden">
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0B0B1F]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-2 bg-yellow-400 text-[#0B0B1F] hover:bg-yellow-500 px-4 py-2 rounded-md transition-colors duration-300">
              Login/Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
