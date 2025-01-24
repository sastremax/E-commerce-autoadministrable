import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { id } = params;

    const producto = await fetch(`https://api.mercadolibre.com/items/${id}`).then(res => res.json());
    if (!producto || producto.error) {
        return {
            title: "Producto no encontrado - LATAM PRODUCTS",
            description: "El producto que buscas no existe o ya no está disponible.",
            robots: "noindex, nofollow",
        };
    }

    return {
        title: `${producto.title} - LATAM PRODUCTS`,
        authors: [{ name: "Maximiliano Sastre" }],
        metadataBase: new URL("http://localhost:3000"),
        description: producto.description || "Detalles de este producto único.",
        keywords: [
            producto.title,
            "productos electrónicos",
            "e-commerce",
            "LATAM PRODUCTS",
        ],
        robots: "index, follow",
        openGraph: {
            title: `${producto.title} - LATAM PRODUCTS`,
            description: producto.description || "Detalles de este producto único.",
            images: [
                {
                    url: producto.thumbnail || "/images/default-product.webp",
                    width: 800,
                    height: 600,
                    alt: producto.title,
                },
            ],
        },
    };
}

function limitarPalabras(texto, limite) {
    const palabras = texto.split(" ");
    return palabras.length > limite ? `${palabras.slice(0, limite).join(" ")} ...` : texto;
};

export default async function ProductoPage({ params }) {

    const { id } = params;
    console.log("Params:", params);

    const resProducto = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const producto = await resProducto.json();
    console.log("detalles", producto);

    if (!resProducto.ok) {
        notFound();
    }

    const resDescripcion = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const descripcionData = await resDescripcion.json();
    const descripcion = resDescripcion.ok
        ? descripcionData.plain_text || "Descripción no disponible"
        : "Descripción no disponible";

    const descripcionCorta = limitarPalabras(descripcion, 100);

    return (
        <main className="flex-1 p-6">
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
                        <p className="text-gray-700 mb-4">{descripcionCorta}</p>
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
        </main>
    );
}