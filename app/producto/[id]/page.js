import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductoPage({ params}) {

    const { id } = params;
    console.log("Params:", params);

    const resProducto = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const producto = await resProducto.json();
    console.log("detalles", producto);
    
    if (!producto || producto.error) {
        notFound();
    }

    const resDescripcion = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const descripcionData = await resDescripcion.json();
    const descripcion = descripcionData.plain_text || "Descripción no disponible";

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold mb-4">{producto.title}</h1>
            <div className="flex flex-col md:flex-row">
                <img
                    src={producto.pictures?.[0]?.url || producto.thumbnail}
                    alt={producto.title}
                    className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="md:w-1/2">
                    <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                    <p className="text-gray-700 mb-4">{descripcion}</p>
                    <div className="mb-4">
                        <span className="text-xl font-bold text-blue-600">${producto.price}</span>
                        <p className="text-sm text-gray-600">
                            Stock disponible: <strong>{producto.initial_quantity || "No disponible"} unidades</strong>
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
                            href="/"
                            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}