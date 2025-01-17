"use client";

import Link from "next/link";

function ProductList({ productos }) {
    return (
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
    );
}

export default ProductList;