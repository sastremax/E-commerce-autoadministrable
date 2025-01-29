import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthProvider from "@/providers/AuthProvider";
import CartProvider from "@/providers/CartContext";
import { Metadata } from "next";

export const metadata = {
     title: "LATAM PRODUCTS - Bienvenidos",
     authors: [{ name: "Maximiliano Sastre" }],
     metadataBase: new URL("http://localhost:3000"),
     description: "LATAM PRODUCTS es una tienda virtual que vende productos electrónicos a toda Latinoamérica.",
     keywords: [
          "LATAM PRODUCTS",
          "productos electrónicos para el hogar",
          "e-commerce",
          "aplicacion de comercio electronico",
          "programador",
          "Latinoamérica",
     ],
     robots: "index, follow",
     openGraph: {
          title: "LATAM PRODUCTS",
          description: "LATAM PRODUCTS es una tienda virtual que vende productos electrónicos a toda Latinoamérica.",
          images: [
               {
                    url: "/images/logolatam.webp",
                    width: 800,
                    height: 600,
                    alt: "Logo de LATAM PRODUCTS",
               },
          ],
     },
};

function RootLayout({ children }) {
     return (
          <html lang="es">
               <body>
                    <AuthProvider>
                         <Header />
                         <CartProvider>
                              <main className="grow p-4">
                                   {children}
                              </main>
                         </CartProvider>
                         <Footer />
                    </AuthProvider>
               </body>
          </html>
     );
}

export default RootLayout;
