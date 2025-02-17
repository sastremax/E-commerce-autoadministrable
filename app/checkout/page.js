"use client";

import { useState, useContext } from "react";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "@/utils/config";
import { CartContext } from "../../providers/CartContext";
import Button from "../../components/Button";

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();        

        for (const item of cartItems) {
            const productRef = doc(db, "productos", item.id);
            const productSnapshot = await getDoc(productRef);
            const productData = productSnapshot.data();

            if (productData.stock < item.quantity) {
                Swal.fire({
                    title: "Stock insuficiente",
                    text: `No hay suficiente stock para el producto ${item.name}. Reduzca la cantidad o elimínelo del carrito.`,
                    icon: "error",
                    confirmButtonText: "Cerrar",
                });
                return;
            }
        }

        try {
            await addDoc(collection(db, "orders"), {
                ...formData,
                status: "Pending",
                date: new Date(),
                products: cartItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                }))
            });

            for (const item of cartItems) {
                const productRef = doc(db, "productos", item.id);
                const newStock = item.stock - item.quantity;
                await updateDoc(productRef, { stock: newStock });
            }

            Swal.fire({
                title: "Compra realizada con éxito",
                text: "Tu pedido ha sido procesado.",
                icon: "success",
                confirmButtonText: "Ver mi pedido",
            });
        } catch (error) {
            console.error("Error al procesar la compra:", error);
            Swal.fire({
                title: "Error al procesar la compra",
                text: "Hubo un problema al guardar los datos de tu compra. Intenta nuevamente.",
                icon: "error",
                confirmButtonText: "Cerrar",
            });
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Formulario de Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="firstName">Primer Nombre</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Apellido</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="address">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="city">Ciudad</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="state">Estado</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="zip">Código Postal</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 text-center "
                    >
                        Pagar
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;