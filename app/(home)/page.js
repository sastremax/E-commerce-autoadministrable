import Link from "next/link";
import productos from "../../data/mockData";

function HomePage() {

     return (
          <div>
               <div className="p-6 py-12 bg-blue-500 text-gray-50">
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
                    <aside className="w-full p-6 sm:w-60 bg-gray-100">
                         <nav className="space-y-8 text-sm">
                              <div className="space-y-2">
                                   <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                        Categorías
                                   </h2>
                                   <div className="flex flex-col space-y-1">
                                        <Link href="?categoria=televisores" className="hover:text-blue-600">
                                             Televisores
                                        </Link>
                                        <Link href="?categoria=laptops" className="hover:text-blue-600">
                                             Laptops
                                        </Link>
                                        <Link href="?categoria=celulares" className="hover:text-blue-600">
                                             Celulares
                                        </Link>
                                        <Link href="?categoria=accesorios" className="hover:text-blue-600">
                                             Accesorios
                                        </Link>
                                   </div>
                              </div>
                              <div className="space-y-2">
                                   <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                        Precio
                                   </h2>
                                   <div className="flex flex-col space-y-1">
                                        <Link href="?precio=menor100" className="hover:text-blue-600">
                                             Menos de $100
                                        </Link>
                                        <Link href="?precio=100-500" className="hover:text-blue-600">
                                             $100 - $500
                                        </Link>
                                        <Link href="?precio=mayor500" className="hover:text-blue-600">
                                             Más de $500
                                        </Link>
                                   </div>
                              </div>
                              <div className="space-y-2">
                                   <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                        Disponibilidad
                                   </h2>
                                   <div className="flex flex-col space-y-1">
                                        <Link href="?disponibilidad=stock" className="hover:text-blue-600">
                                             En stock
                                        </Link>
                                        <Link href="?disponibilidad=proximamente" className="hover:text-blue-600">
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
                                   <Link
                                        key={producto.id}
                                        href={`/producto?id=${producto.id}`}
                                        className="p-4 border rounded-lg shadow hover:shadow-lg bg-white cursor-pointer"
                                   >
                                        <div className="h-full flex flex-col">
                                             <img
                                                  src={producto.imagen}
                                                  alt={producto.nombre}
                                                  className="w-full h-48 object-contain rounded-lg mb-4"
                                             />
                                             <h2 className="text-lg font-semibold mb-2">{producto.nombre}</h2>
                                             <p className="text-sm mb-4">{producto.descripcion}</p>
                                             <div className="mt-auto">
                                                  <span className="text-blue-600 font-bold">{producto.precio}</span>
                                                  <p className="text-gray-700">Stock: {producto.stock}</p>
                                             </div>
                                        </div>
                                   </Link>
                              ))}
                         </div>
                    </main>
               </div>
          </div>
     );
}

export default HomePage;