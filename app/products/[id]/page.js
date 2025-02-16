"use client";

import React, { useState, useEffect, useContext } from "react";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { getProductByIdFromServer } from "../../actions/getProductById";
import { AuthContext } from "@/providers/AuthProvider";
import AddToCartButton from "@/components/AddToCartButton";
import Swal from "sweetalert2";
import { notFound } from "next/navigation";

export default function ProductoPage({ params }) {
    const { id } = React.use(params);

    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);

    const { loggedIn } = useContext(AuthContext);

    useEffect(() => {
        const fetchProduct = async () => {
            const { payload, error, message } = await getProductByIdFromServer(id);
            if (error) {
                setError(message);
                notFound();
            } else {
                setProducto(payload);
            }
        };

        fetchProduct();
    }, [id]);
    if (error) {
        return (
            <div>
                <PageTitle>Producto no encontrado</PageTitle>
                <p>{error}</p>
            </div>
        );
    }

    if (!producto) {
        return <p>Cargando...</p>;
    }

    return (
        <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <PageTitle>Detalle del producto {id}</PageTitle>
                <h1 className="text-2xl font-bold mb-4">{producto.name}</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
                        <img
                            src={producto.image1 || "/images/placeholder.png"}
                            alt={producto.name}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <div className="md:w-1/2">
                            <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                            <p className="text-gray-700 mb-4">{producto.descripcion_larga}</p>
                            <p className="text-sm text-gray-500">Estado: {producto.description || "Desconocido"}</p>
                            <div className="mb-4">
                                <span className="text-xl font-bold text-blue-600">
                                    ${producto.price.toLocaleString()}
                                </span>
                                <p className="text-sm text-gray-600">
                                    Stock disponible: <strong>{producto.stock} unidades</strong>
                                </p>
                            </div>
                            <div className="flex space-x-4">
                                {loggedIn ? (
                                    <AddToCartButton producto={producto} />
                                ) : (
                                    <button
                                        type="button"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                        onClick={() =>
                                            Swal.fire({
                                                icon: "warning",
                                                title: "¡Debes iniciar sesión!",
                                                text: "Para agregar productos al carrito, necesitas estar logueado.",
                                                confirmButtonText: "Iniciar sesión",
                                                confirmButtonColor: "#3085d6",
                                                preConfirm: () => {
                                                    window.location.href = "/iniciar-sesion";
                                                },
                                            })
                                        }
                                    >
                                        Agregar al carrito
                                    </button>
                                )}
                                <Link
                                    href="/"
                                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                                >
                                    Volver a Inicio
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}