import Link from "next/link";
import Image from "next/image";

export default function Header() {
     return (
          <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                         <Image
                              src="/images/logolatam.webp"
                              alt="Logo de LATAM PRODUCTS"
                              width={70}
                              height={80}
                              className="rounded-lg"
                         />
                         <span className="ml-2 text-xl font-bold tracking-wide">
                              PRODUCTOS LATAM
                         </span>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                         <Link href="/" className="hover:text-gray-300">
                              Inicio
                         </Link>
                         <Link href="/about" className="hover:text-gray-300">
                              Nosotros
                         </Link>
                         <Link href="/tienda" className="hover:text-gray-300">
                              Tienda
                         </Link>
                         <Link href="/contacto" className="hover:text-gray-300">
                              Contacto
                         </Link>
                    </nav>
                    <button
                         type="button"
                         className="block md:hidden text-white focus:outline-none"
                         aria-label="Abrir menú"
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
          </header >
     );
}
