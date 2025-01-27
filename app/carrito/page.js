"use client"

import { useState } from "react";
import Link from "next/link";

function CarritoPage() {

     const [carrito, setCarrito] = useState([]);

     const eliminarProducto = (id) => {
          setCarrito(carrito.filter((item) => item.id !== id));
     };

     const agregarAlCarrito = (producto) => {
          setCarrito((prevCarrito) => {
               const productoExistente = prevCarrito.find((item) => item.id === producto.id);
               if (productoExistente) {
                    return prevCarrito.map((item) =>
                         item.id === producto.id
                              ? { ...item, cantidad: item.cantidad + 1 }
                              : item
                    );
               }
               return [...prevCarrito, { ...producto, cantidad: 1 }];
          });
     };

     const subtotal = carrito.reduce(
          (acc, item) => acc + item.precio * item.cantidad,
          0
     );

     return (
          <div className="min-h-screen bg-gray-100 p-6">
               <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold mb-4 text-white">Carrito de Compras</h1>
                    <div className="space-y-4">
                         <div className="flex justify-between items-center border-b pb-4">
                              <div>
                                   <h2 className="font-semibold text-gray-800">Televisor 4K</h2>
                                   <p className="text-gray-600">Cantidad: 1</p>
                              </div>
                              <div className="text-blue-600 font-bold">$400.00</div>
                         </div>
                         <div className="flex justify-between items-center border-b pb-4">
                              <div>
                                   <h2 className="font-semibold text-gray-800">Laptop Gaming</h2>
                                   <p className="text-gray-600">Cantidad: 1</p>
                              </div>
                              <div className="text-blue-600 font-bold">$1200.00</div>
                         </div>
                         <div className="flex justify-between items-center border-b pb-4">
                              <div>
                                   <h2 className="font-semibold text-gray-800">Audífonos Inalámbricos</h2>
                                   <p className="text-gray-600">Cantidad: 2</p>
                              </div>
                              <div className="text-blue-600 font-bold">$300.00</div>
                         </div>
                    </div>
                    <div className="mt-6 border-t pt-4">
                         <div className="flex justify-between text-gray-800">
                              <span>Subtotal</span>
                              <span className="font-bold">$1900.00</span>
                         </div>
                         <div className="flex justify-between text-gray-800">
                              <span>Descuento</span>
                              <span className="font-bold text-green-600">- $100.00</span>
                         </div>
                         <div className="flex justify-between text-gray-800 mt-2 border-t pt-2">
                              <span>Total</span>
                              <span className="font-bold text-xl text-blue-600">$1800.00</span>
                         </div>
                    </div>
                    <div className="mt-6 flex space-x-4">
                         <Link href="/">
                              <div className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                                   Seguir comprando
                              </div>
                         </Link>
                         <button
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                              type="button"
                         >
                              Proceder al pago
                         </button>
                    </div>
               </div>
          </div>
     );
}

export default CarritoPage;
