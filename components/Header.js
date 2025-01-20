"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Button from "@/components/Button";

function Header() {
     const [menuOpen, setMenuOpen] = useState(false);

     return (
          <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-4">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                         <Image
                              src="/images/logolatam.webp"
                              alt="Logo de LATAM PRODUCTS"
                              width={90}
                              height={100}                              
                              className="rounded-lg"                              
                         />
                         <span className="ml-2 text-xl font-bold tracking-wide">
                              PRODUCTOS LATAM
                         </span>
                    </div>
                    <nav
                         className={`${menuOpen ? "block" : "hidden"} md:flex space-x-4`}
                    >
                         <Link href="/" className="hover:text-gray-300">
                              Inicio
                         </Link>
                         <Link href="/carrito" className="hover:text-gray-300">
                              <ShoppingCart className="h-6 w-6" />
                         </Link>
                         <Link href="/admin" className="hover:text-gray-300">
                              Admin
                         </Link>
                    </nav>
                    <Link href="/iniciar-sesion">
                         <Button
                              className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                              type="button"
                         >
                              Iniciar Sesión
                         </Button>
                    </Link>
                    <button
                         type="button"
                         className="block md:hidden text-white focus:outline-none"
                         aria-label="Abrir menú"
                         onClick={() => setMenuOpen(!menuOpen)}
                    >
                         <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M4 6h16M4 12h16M4 18h16"
                              />
                         </svg>
                    </button>
               </div>
          </header>
     );
}

export default Header;
