import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProveedorDeAutenticacion from "@/providers/AuthProvider";

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
               <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <meta
                         name="viewport"
                         content="width=device-width, initial-scale=1.0"
                    />
                    <meta name="theme-color" content="#007BFF" />
                    <link rel="icon" href="/favicon.png" type="image/png" />
               </head>
               <body>
                    <Header />
                    <ProveedorDeAutenticacion>
                         <main className="grow p-4">{children}</main>
                    </ProveedorDeAutenticacion>
                    <Footer />
               </body>
          </html>
     );
}

export default RootLayout;
