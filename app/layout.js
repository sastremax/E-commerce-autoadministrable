import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { Footer } from "../components/Footer";
import { metadata } from "./metadata";

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
                    <link rel="icon" href="/favicon.png" type="image/png" />
               </head>
               <body>
                    <ClientLayout>{children}</ClientLayout>
                    <Footer />
               </body>
          </html>
     );
}

export default RootLayout;
