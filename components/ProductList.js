"use client";

import Link from "next/link";
import Image from "next/image";
import ProductsLoader from "./ProductsLoader";
import { useContext } from "react";
import { AuthContext } from "providers/AuthProvider";

function ProductList({ productos, isLoading }) {

    const { loggedIn } = useContext(AuthContext);

    if (isLoading) {
        return <ProductsLoader />;
    }

    if (!productos || productos.length === 0) {
        return <p className="text-center text-gray-400">No hay productos</p>;
    }

    const productosUnicos = productos.reduce((acc, producto) => {
        if (!acc.find((p) => p.id === producto.id)) {
            acc.push(producto);
        }
        return acc;
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productosUnicos.map((producto) => (
                <Link
                    key={producto.id}
                    href={`/products/${producto.id}`}
                    className="max-w-xs w-full min-h-[300px] flex flex-col justify-between p-4 border rounded-lg shadow hover:shadow-lg hover:scale-105 bg-white cursor-pointer transition-transform duration-200"
                    aria-label={`Ver detalles del producto: ${producto.name}`}
                >
                    <div className="h-full flex flex-col">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src={producto.image1 || "../public/images/image-not-avaible.webp"}
                                alt={producto.name || "Producto sin nombre"}
                                width={150}
                                height={150}
                                className="rounded-lg object-contain max-h-40 mx-auto"
                            />
                        </div>
                        <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-2">{producto.name.split(" ").slice(0, 4).join(" ")}...</h2>
                        <p className="text-xs text-gray-500">Estado: {producto.description || "Desconocido"}</p>
                        <div className="mt-auto">
                            <span className="text-blue-600 font-bold">
                                ${producto.price.toLocaleString()}
                            </span>
                            <p className="text-gray-700">Stock: {producto.stock}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductList;
