"use client";

import { useContext } from "react";
import { CartContext } from "@/providers/CartContext";
import Link from "next/link";

export default function CarritoPage() {
     const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

     const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

     return (
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-white text-gray-800 rounded-lg shadow-lg mx-auto mt-10">
               <h2 className="text-xl font-semibold">Tu carrito</h2>
               {cartItems.length === 0 ? (
                    <p>Tu carrito está vacío. <Link href="/">Volver a la tienda</Link></p>
               ) : (
                    <>
                         <ul className="flex flex-col divide-y divide-gray-300">
                              {cartItems.map((item) => (
                                   <li
                                        key={item.id}
                                        className="flex flex-col py-6 sm:flex-row sm:justify-between"
                                   >
                                        <div className="flex w-full space-x-2 sm:space-x-4">
                                             <img
                                                  className="flex-shrink-0 object-contain w-20 h-20 border rounded sm:w-32 sm:h-32 bg-gray-100"
                                                  src={item.image1 || "/images/placeholder.png"}
                                                  alt={item.name}
                                             />
                                             <div className="flex flex-col justify-between w-full pb-4">
                                                  <div className="flex justify-between w-full pb-2 space-x-2">
                                                       <div className="space-y-1">
                                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                                 {item.name}
                                                            </h3>
                                                            <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                                                       </div>
                                                       <div className="text-right">
                                                            <p className="text-lg font-semibold">
                                                                 ${item.price.toLocaleString()}
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div className="flex text-sm divide-x">
                                                       <button
                                                            type="button"
                                                            className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-600"
                                                            onClick={() => removeFromCart(item.id)}
                                                       >
                                                            <span>Eliminar</span>
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </li>
                              ))}
                         </ul>
                         <div className="space-y-1 text-right">
                              <p>Total: <span className="font-semibold">${subtotal.toLocaleString()}</span></p>
                              <p className="text-sm text-gray-600">
                                   No incluye impuestos ni costos de envío.
                              </p>
                         </div>
                         <div className="flex justify-end space-x-4">
                              <Link href="/">
                                   <button
                                        type="button"
                                        className="px-6 py-2 border rounded-md border-blue-600 text-blue-600 hover:bg-blue-50"
                                   >
                                        Volver a la tienda
                                   </button>
                              </Link>
                              <button
                                   type="button"
                                   className="px-6 py-2 border rounded-md bg-blue-600 text-white hover:bg-blue-700"
                                   onClick={clearCart}
                              >
                                   Vaciar carrito
                              </button>
                         </div>
                    </>
               )}
          </div>
     );
}