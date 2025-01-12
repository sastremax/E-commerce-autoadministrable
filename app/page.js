export const metadata = {
     metadataBase: new URL("http://localhost:3000"),
     title: "LATAM PRODUCTS - Bienvenidos",
     description: "LATAM PRODUCTS es una tienda virtual que vende productos electrónicos a toda Latinoamérica.",
     keywords: ["LATAM PRODUCTS", "productos electrónicos para el hogar", "e-commerce", "Latinoamérica"],
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


function HomePage() {
     return (
          <main className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
               <h1 className="text-4xl font-bold mb-4">
                    Bienvenidos a LATAM PRODUCTS
               </h1>
               <p className="text-lg text-gray-700">
                    Latam Products tiene una amplia trayectoria en la venta de
                    productos para el hogar.
               </p>
          </main>
     );
}


export default HomePage;

