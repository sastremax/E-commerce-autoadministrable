"use client";

import { useContext } from "react";
import { CartContext } from "providers/CartContext";
import Link from "next/link";
import { AuthContext } from "providers/AuthProvider";
import Button from "../../components/Button";

export default function CarritoPage() {
     const { loggedIn } = useContext(AuthContext);
     const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

     const IVA_RATE = 0.21;
     const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
     const iva = subtotal * IVA_RATE;
     const totalConIVA = subtotal + iva;

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
                                                            <div className="flex items-center space-x-2 mt-2">
                                                                 <button
                                                                      type="button"
                                                                      onClick={() => decreaseQuantity(item.id)} // Decrementar cantidad
                                                                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                                                                 >
                                                                      -
                                                                 </button>
                                                                 <span className="px-2 text-gray-800 font-bold">
                                                                      {item.quantity}
                                                                 </span>
                                                                 <button
                                                                      type="button"
                                                                      onClick={() => addToCart(item)} // Incrementar cantidad
                                                                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                                                                 >
                                                                      +
                                                                 </button>
                                                            </div>

                                                       </div>
                                                       <div className="text-right">
                                                            <p className="text-lg font-semibold">
                                                                 Subtotal: ${(item.price * item.quantity).toLocaleString()}
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
                              <p>Subtotal: <span className="font-semibold text-lg">${subtotal.toLocaleString()}</span></p>
                              <p>IVA (21%): <span className="font-semibold text-lg">${iva.toLocaleString()}</span></p>
                              <p>Total del carrito: <span className="font-semibold text-lg">${totalConIVA.toLocaleString()}</span></p>
                              <p className="text-sm text-gray-600">
                                   Incluye impuestos pero no costos de envío.
                              </p>
                         </div>
                         <div className="flex justify-end space-x-4">
                              <Link href="/">
                                   <Button
                                        type="button"
                                        className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                                   >
                                        Volver a Inicio
                                   </Button>
                              </Link>
                              <Button
                                   type="button"
                                   className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
                                   onClick={clearCart}
                              >
                                   Vaciar carrito
                              </Button>
                              <Link href="/checkout">
                                   <Button
                                        type="button"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                                   >
                                        Proceder al pago
                                   </Button>
                              </Link>
                         </div>
                    </>
               )}
               {!loggedIn && (
                    <div className="text-center mt-4">
                         <p>Para agregar productos al carrito, debes iniciar sesión.</p>
                         <Link href="/iniciar-sesion">
                              <button
                                   className="px-6 py-2 border rounded-md bg-blue-600 text-white hover:bg-blue-700"
                                   type="button"
                              >
                                   Iniciar sesión
                              </button>
                         </Link>
                    </div>
               )}
          </div>
     );
}