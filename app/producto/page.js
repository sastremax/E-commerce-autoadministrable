"use client";

// cuando pase a rutas dinamicas habra que pasar el { id }

import Link from "next/link";

function ProductoPage() {
     return (
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
               <h1 className="text-2xl font-bold mb-4">Samsung 55" Neo QLED 4K</h1>
               <div className="flex flex-col md:flex-row">
                    <img
                         src="/images/tv-samsung.webp"
                         alt="Samsung 55 Neo QLED"
                         className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="md:w-1/2">
                         <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                         <ul className="list-disc ml-5 text-gray-700 mb-4">
                              <li>Pantalla QLED 4K de 55" para colores vibrantes y detalles nítidos.</li>
                              <li>Tecnología Quantum Matrix para un control preciso del brillo.</li>
                              <li>Procesador Neo Quantum 4K optimizado para cualquier contenido.</li>
                              <li>Dolby Atmos para una experiencia de sonido inmersiva.</li>
                              <li>Diseño delgado con soporte minimalista.</li>
                         </ul>
                         <div className="mb-4">
                              <span className="text-xl font-bold text-blue-600">$3,827,499</span>
                              <p className="text-sm text-gray-600">
                                   Mismo precio en 12 cuotas de $318,958.25
                              </p>
                         </div>
                         <div className="mb-4">
                              <p className="text-sm">
                                   Stock disponible: <strong>5 unidades</strong>
                              </p>
                              <p className="text-sm text-gray-600">
                                   Podés comprar hasta 2 unidades.
                              </p>
                         </div>
                         <div className="flex space-x-4">
                              <button
                                   type="button"
                                   className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                              >
                                   Agregar al carrito
                              </button>
                              <Link
                                   href="/catalogo"
                                   className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                              >
                                   Volver al catálogo
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default ProductoPage;
