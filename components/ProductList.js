"use client";

import Link from "next/link";
import Image from "next/image";

function ProductList({ productos }) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productosUnicos.map((producto) => (
                <Link
                    key={producto.id}
                    href={`/products/details/${producto.id}`}
                    className="p-4 border rounded-lg shadow hover:shadow-lg hover:scale-105 bg-white cursor-pointer transition-transform duration-200"
                    aria-label={`Ver detalles del producto: ${producto.name}`}
                >
                    <div className="h-full flex flex-col">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src={producto.image1}
                                alt={producto.name || "Producto sin nombre"}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: "contain" }}
                                className="rounded-lg"
                            />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">{producto.name}</h2>
                        <p className="text-sm mb-4">{producto.description}</p>
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
