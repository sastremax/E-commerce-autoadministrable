"use client"

import { useState, useEffect } from "react";
import ProductList from "@/components/ProductList";

function HomePage() {
     const [productos, setProductos] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchData = async (categoria = "electronicos") => {
               setLoading(true);

               try {
                    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}&limit=50`);
                    const result = await response.json();

                    const productosTransformados = result.results.map((producto) => ({
                         id: producto.id,
                         nombre: producto.title,
                         descripcion: producto.condition === "new" ? "Nuevo" : "Usado",
                         imagen: producto.thumbnail,
                         precio: `$${producto.price.toLocaleString()}`,
                         stock: producto.available_quantity,
                    }));

                    setProductos(productosTransformados);
               } catch (error) {
                    console.error("Error al obtener productos:", error);
                    setProductos([]);
                    setLoading(false);
               } finally {
                    setLoading(false);
               }

          };
          fetchData();
     }, []);

     return (
          <div>
               <div className="p-6 py-12 bg-white text-blue-500">
                    <div className="container mx-auto">
                         <div className="flex flex-col lg:flex-row items-center justify-between">
                              <h2 className="text-center text-6xl tracking-tighter font-bold">Hasta un
                                   <br className="sm:hidden" /> 25% Off
                              </h2>
                              <div className="space-x-2 text-center py-2 lg:py-0">
                                   <span>Descuento! Use el codigo: </span>
                                   <span className="font-bold text-lg">COLAPINTO</span>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="mt-6">
                    <img
                         src="/images/portada.webp"
                         alt="Imagen de Portada"
                         className="w-full h-auto object-cover shadow-lg"
                    />
               </div>
               <div className="flex bg-white text-black">
                    <main className="flex-1 p-6">
                         <h1 className="text-xl font-bold mb-6">Catálogo de Productos Electrónicos</h1>
                         {loading ? (
                              <div className="flex items-center justify-center space-x-2">
                                   <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600" />
                                   <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600" />
                                   <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600" />
                              </div>

                         ) : (
                              <ProductList productos={productos} />
                         )}
                    </main>
               </div>
          </div>
     );
}

export default HomePage;