"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { db } from "@/utils/config";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { AuthContext } from "@/providers/AuthProvider";

const AdminPage = () => {

    const { loggedIn, role } = useContext(AuthContext);
    const router = useRouter();
    const [selectedAction, setSelectedAction] = useState("none");
    const [productId, setProductId] = useState(null);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loggedIn && role !== null) {
            if (role !== "admin") {
                Swal.fire({
                    title: "Acceso Denegado",
                    text: "No tienes permisos para acceder a esta página.",
                    icon: "error",
                    confirmButtonText: "OK"
                }).then(() => {
                    router.push("/");
                });
            } else {
                setLoading(false);
            }
        }
    }, [loggedIn, role, router]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "productos"));
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosData);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProductos();
    }, []);

    let buttonText = "";
    if (selectedAction === "add") {
        buttonText = "Crear Producto";
    } else if (selectedAction === "edit") {
        buttonText = "Actualizar Producto";
    } else if (selectedAction === "delete") {
        buttonText = "Eliminar Producto";
    }

    let sectionText = "";
    if (selectedAction === "add") {
        sectionText = "Complete los campos para agregar un producto.";
    } else if (selectedAction === "edit") {
        sectionText = "Modifica los campos para actualizar el producto.";
    } else if (selectedAction === "delete") {
        sectionText = "Confirma si deseas eliminar este producto.";
    }



    if (loading) {
        return (
            <div className="flex justify-center items-center text-center mt-10">
                <p className="text-lg text-red-500">Verificando Acceso...</p>
            </div>
        );
    }

    return (
        <section className="p-6 bg-gray-100 text-gray-900">
            {selectedAction === "none" && (
                <div className="flex flex-col items-center space-y-4">
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-6 rounded mb-4"
                        onClick={() => setSelectedAction("add")}
                    >
                        Agregar Producto Nuevo
                    </button>
                    <button
                        type="button"
                        className="bg-yellow-500 text-white py-2 px-6 rounded mb-4"
                        onClick={() => setSelectedAction("edit")}
                    >
                        Editar Producto
                    </button>
                    <button
                        type="button"
                        className="bg-red-500 text-white py-2 px-6 rounded mb-4"
                        onClick={() => setSelectedAction("delete")}
                    >
                        Eliminar Producto
                    </button>
                    <button
                        type="button"
                        className="bg-gray-600 text-white py-2 px-6 rounded mb-4"
                        onClick={() => router.push("/")}>
                        Salir
                    </button>
                </div>
            )}
            {selectedAction !== "none" && (
                <div className="space-y-4">
                    {selectedAction === "add" ? (
                        <ProductForm selectedAction={selectedAction} productId={null} setSelectedAction={setSelectedAction} />
                    ) : (
                        <div>
                            <label htmlFor="productSelect" className="block text-sm font-medium text-gray-700">
                                Selecciona un producto:
                            </label>
                            <select
                                id="productSelect"
                                className="w-full p-2 border-gray-300 rounded-md"
                                value={productId || ""}
                                onChange={(e) => setProductId(e.target.value)}
                            >
                                <option value="">Seleccionar Producto</option>
                                {productos.map((producto) => (
                                    <option key={producto.id} value={producto.id}>
                                        {producto.name}
                                    </option>
                                ))}
                            </select>
                            {selectedAction !== "add" && productId && (
                                <ProductForm selectedAction={selectedAction} productId={productId} setSelectedAction={setSelectedAction} />
                            )}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

export default AdminPage;