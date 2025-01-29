import { db } from "@/utils/config";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function ProductoPage({ params }) {
    const { id } = params;

    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        notFound();
    }

    const producto = docSnap.data();

    const descripcionCorta = producto.name && typeof producto.name === "string"
        ? `${producto.name.split(" ").slice(0, 90).join(" ")} ...`
        : "Descripción no disponible";

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
                        <p className="text-gray-700 mb-4">{descripcionCorta}</p>
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
        </main>
    );
}