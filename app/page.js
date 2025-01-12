"use client";

import { useState } from "react";
import Button from "../components/button";

function HomePage() {
     const [count, setCount] = useState(0);
     const incrementarContador = () => {
          console.log("Contador actual:", count);
          setCount(count + 1);
     }

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
                         <p className="text-2xl font-bold mb-4 text-blue-500">
                              Contador: {count}
                         </p>
                         <Button onClick={incrementarContador}>Incrementar</Button>
                    </div>
               </div>
          </div>
     );
}


export default HomePage;

