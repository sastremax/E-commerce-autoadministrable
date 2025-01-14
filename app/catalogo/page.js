import Link from "next/link";

// USO DE SIDEBAR EN mambaui.com

function CatalogoPage() {
     return (
          <div className="flex bg-white text-black">
               <aside className="w-full p-6 sm:w-60 bg-gray-100">
                    <nav className="space-y-8 text-sm">
                         <div className="space-y-2">
                              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">Categorías</h2>
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
                              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">Precio</h2>
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
                              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">Disponibilidad</h2>
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
                    <h1 className="text-xl font-bold">Catálogo de Productos Electrónicos</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                         <div className="p-4 border rounded-lg shadow hover:shadow-lg bg-white">
                              <h2 className="text-lg font-semibold">Televisor 4K</h2>
                              <p className="text-sm">Pantalla ultra HD de 55 pulgadas.</p>
                              <span className="text-blue-600 font-bold">$400</span>
                         </div>
                         <div className="p-4 border rounded-lg shadow hover:shadow-lg bg-white">
                              <h2 className="text-lg font-semibold">Laptop Gaming</h2>
                              <p className="text-sm">Procesador i7, 16GB RAM, 512GB SSD.</p>
                              <span className="text-blue-600 font-bold">$1200</span>
                         </div>
                         <div className="p-4 border rounded-lg shadow hover:shadow-lg bg-white">
                              <h2 className="text-lg font-semibold">Celular Pro</h2>
                              <p className="text-sm">Cámara de 108MP, batería de larga duración.</p>
                              <span className="text-blue-600 font-bold">$900</span>
                         </div>
                         <div className="p-4 border rounded-lg shadow hover:shadow-lg bg-white">
                              <h2 className="text-lg font-semibold">Audífonos Inalámbricos</h2>
                              <p className="text-sm">Cancelación de ruido, 20 horas de autonomía.</p>
                              <span className="text-blue-600 font-bold">$150</span>
                         </div>
                    </div>
               </main>
          </div>
     );
}

export default CatalogoPage;
