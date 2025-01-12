import "./globals.css";
import { metadata } from "./metadata";
import ClientLayout from "../components/clientLayout.js";



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
               </body>
          </html>
     );
}

export default RootLayout
