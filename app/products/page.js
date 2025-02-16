import Link from "next/link";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/config.js";
import Swal from "sweetalert2";

export async function generateMetadata({ params }) {
    const { id } = params;

    try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            notFound();
        }

        const producto = docSnap.data();

        return {
            title: `${producto.name} - LATAM PRODUCTS`,
            authors: [{ name: "Maximiliano Sastre" }],
            metadataBase: new URL("http://localhost:3000"),
            description: producto.descripcion_larga || "Detalles de este producto único.",
            keywords: [
                producto.name,
                "productos electrónicos",
                "e-commerce",
                "LATAM PRODUCTS",
            ],
            robots: "index, follow",
            openGraph: {
                title: `${producto.name} - LATAM PRODUCTS`,
                description: producto.descripcion_larga || "Detalles de este producto único.",
                images: [
                    {
                        url: producto.image1 || "/images/default-product.webp",
                        width: 800,
                        height: 600,
                        alt: producto.name,
                    },
                ],
            },
        };
    } catch (error) {
        console.error("Error al generar metadata:", error);
        return {
            title: "Error al cargar producto - LATAM PRODUCTS",
            description: "Hubo un problema al intentar obtener los detalles del producto.",
            robots: "noindex, nofollow",
        };
    }
}

export default async function ProductoPage({ params }) {

    const { id } = params;

    try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            notFound();
        }

        const producto = docSnap.data();

        return (
            <main className="flex-1 p-6">
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                    <PageTitle>Detalle del producto {id}</PageTitle>
                    <h1 className="text-2xl font-bold mb-4">{producto.name}</h1>
                    <div className="flex flex-col md:flex-row">
                        <img
                            src={producto.image1 || "/images/placeholder.png"}
                            alt={producto.name}
                            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"
                        />
                        <div className="md:w-1/2">
                            <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                            <p className="text-gray-700 mb-4">{producto.descripcion_larga || "Descripción no disponible"}</p>
                            <div className="mb-4">
                                <span className="text-xl font-bold text-blue-600">
                                    ${producto.price.toLocaleString()}
                                </span>
                                <p className="text-sm text-gray-600">
                                    Stock disponible: <strong>{producto.stock} unidades</strong>
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

    } catch (error) {
        console.error("Error al cargar el producto:", error);
        Swal.fire({
            title: "Error al cargar el producto",
            text: "Hubo un problema al intentar cargar los detalles del producto. Por favor, intenta nuevamente más tarde.",
            icon: "error",
            confirmButtonText: "Cerrar",
        });
        return (
            <div className="flex justify-center items-center text-center mt-10">
                <p className="text-lg text-red-500">No se pudo cargar el producto. Intenta nuevamente más tarde.</p>
            </div>
        );
    }

}