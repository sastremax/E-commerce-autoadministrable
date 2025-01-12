import "./globals.css";
import { metadata } from "./metadata";
import ClientLayout from "../components/clientLayout.js";
import { Footer } from "../components/Footer";


function RootLayout({ children }) {
     return (
          <html lang="es">
               <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <link rel="icon" href="/favicon.png" type="image/png" />
               </head>
               <body>
                    <ClientLayout>{children}</ClientLayout>
                    <Footer />
               </body>
               
          </html>
     );
}

export default RootLayout
