"use client";

import Link from "next/link";
import productos from "../../data/mockData";

function CatalogoPage() {
     return (
          <div className="flex bg-white text-black">
               <aside className="w-full p-6 sm:w-60 bg-gray-100">
                    <nav className="space-y-8 text-sm">
                         <div className="space-y-2">
                              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                   Categorías
                              </h2>
                              <div className="flex flex-col space-y-1">
                                   <Link href="/catalogo?categoria=televisores" className="hover:text-blue-600">
                                        Televisores
                                   </Link>
                                   <Link href="/catalogo?categoria=laptops" className="hover:text-blue-600">
                                        Laptops
                                   </Link>
                                   <Link href="/catalogo?categoria=celulares" className="hover:text-blue-600">
                                        Celulares
                                   </Link>
                                   <Link href="/catalogo?categoria=accesorios" className="hover:text-blue-600">
                                        Accesorios
                                   </Link>
                              </div>
                         </div>
                         <div className="space-y-2">
                              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                   Precio
                              </h2>
                              <div className="flex flex-col space-y-1">
                                   <Link href="/catalogo?precio=menor100" className="hover:text-blue-600">
                                        Menos de $100
                                   </Link>
                                   <Link href="/catalogo?precio=100-500" className="hover:text-blue-600">
                                        $100 - $500
                                   </Link>
                                   <Link href="/catalogo?precio=mayor500" className="hover:text-blue-600">
                                        Más de $500
                                   </Link>
                              </div>
                         </div>
                         <div className="space-y-2">
                              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                   Disponibilidad
                              </h2>
                              <div className="flex flex-col space-y-1">
                                   <Link href="/catalogo?disponibilidad=stock" className="hover:text-blue-600">
                                        En stock
                                   </Link>
                                   <Link href="/catalogo?disponibilidad=proximamente" className="hover:text-blue-600">
                                        Próximamente
                                   </Link>
                              </div>
                         </div>
                    </nav>
               </aside>
               <main className="flex-1 p-6">
                    <h1 className="text-xl font-bold mb-6">Catálogo de Productos Electrónicos</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                         {productos.map((producto) => (
                              <div
                                   key={producto.id}
                                   className="p-4 border rounded-lg shadow hover:shadow-lg bg-white flex flex-col"
                              >
                                   <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        className="w-full h-48 object-contain rounded-lg mb-4"
                                   />
                                   <h2 className="text-lg font-semibold mb-2">{producto.nombre}</h2>
                                   <p className="text-sm mb-4">{producto.descripcion}</p>
                                   <div className="flex justify-between items-center mt-auto">
                                        <span className="text-blue-600 font-bold">{producto.precio}</span>
                                        <span className="text-gray-600 text-sm">
                                             Stock: {producto.stock}
                                        </span>
                                   </div>
                              </div>
                         ))}
                    </div>
               </main>
          </div>
     );
}

export default CatalogoPage;
