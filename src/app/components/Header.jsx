// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // for hamburger icons

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-amber-300 text-white p-4 shadow-md">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         {/* Logo / Title */}
//         <Link href="/" className="text-lg font-bold">
//           Potter App
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 font-semibold">
//           <Link href="/" className="hover:underline hover:translate-64">Home</Link>
//           <Link href="/characters" className="hover:underline hover:translate-64">Characters</Link>
//           <Link href="/books" className="hover:underline hover:translate-64">Books</Link>
//           <Link href="/spells" className="hover:underline hover:translate-64">Spells</Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col gap-4 mt-4 font-semibold">
//           <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link href="/characters" className="hover:underline" onClick={() => setIsOpen(false)}>Characters</Link>
//           <Link href="/books" className="hover:underline" onClick={() => setIsOpen(false)}>Books</Link>
//           <Link href="/spells" className="hover:underline" onClick={() => setIsOpen(false)}>Spells</Link>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for hamburger icons
import { usePathname } from "next/navigation"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <nav className="bg-amber-300 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Link href="/" className="text-lg font-bold">
        Enny App
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-semibold">
          <Link
            href="/"
            className={`hover:underline ${pathname === "/" ? "text-black underline" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/characters"
            className={`hover:underline ${pathname === "/characters" ? "text-black underline" : ""}`}
          >
            Characters
          </Link>
          <Link
            href="/books"
            className={`hover:underline ${pathname === "/books" ? "text-black underline" : ""}`}
          >
            Books
          </Link>
          <Link
            href="/spells"
            className={`hover:underline ${pathname === "/spells" ? "text-black underline" : ""}`}
          >
            Spells
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 font-semibold">
          <Link
            href="/"
            className={`hover:underline ${pathname === "/" ? "text-black underline" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/characters"
            className={`hover:underline ${pathname === "/characters" ? "text-black underline" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Characters
          </Link>
          <Link
            href="/books"
            className={`hover:underline ${pathname === "/books" ? "text-black underline" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Books
          </Link>
          <Link
            href="/spells"
            className={`hover:underline ${pathname === "/spells" ? "text-black underline" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Spells
          </Link>
        </div>
      )}
    </nav>
  );
}
