import { notFound } from "next/navigation";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../utils/config";

export default async function ProductoPage({ params }) {

    const { id } = await params;

    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        notFound();
    }

    const producto = docSnap.data();

    const limitarPalabras = (texto, limite) => {
        const palabras = texto.split(" ");
        return palabras.length > limite ? `${palabras.slice(0, limite).join(" ")} ...` : texto;
    };

    const descripcionCorta = limitarPalabras(producto.descripcion || "Descripción no disponible", 90);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <PageTitle>Detalle del producto {id}</PageTitle>
            <h1 className="text-2xl font-bold mb-4">{producto.name}</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={producto.image1}
                    alt={producto.name}
                    className="w-full md:w-1/2 rounded-lg"
                />
                <div className="md:w-1/2">
                    <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                    <p className="text-gray-700 mb-4">{descripcionCorta}</p>
                    <div className="mb-4">
                        <span className="text-xl font-bold text-blue-600">
                            ${producto.price.toLocaleString()}
                        </span>
                        <p className="text-sm text-gray-600">
                            Stock disponible: {producto.stock} unidades
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
                            Volver a Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}