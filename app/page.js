"use client";
import Button from "../components/button";

function HomePage() {
     const handleClick = () => {
          alert("Bienvenidos a PRODUCTOS LATAM");
     };

     return (
          <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/fondoPantallaLatam.webp')" }}>
               <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-screen">
                    <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
                         <h1 className="text-4xl font-bold mb-4 text-black">
                              Bienvenidos!
                         </h1>
                         <p className="text-lg text-gray-700">
                              Productos Latam tiene una amplia trayectoria en la venta de
                              productos para el hogar.
                         </p>
                         <Button onClick={handleClick}>Explorar Productos</Button>
                    </div>
               </div>
          </div>
     );
}


export default HomePage;

