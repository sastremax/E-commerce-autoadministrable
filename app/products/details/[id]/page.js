import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../utils/config";
import ProductClient from "@/components/ProductClient";

export default async function ProductoPage({ params }) {

    const { id } = await params;

    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        notFound();
    }

    const producto = docSnap.data();

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <PageTitle>Detalle del producto {id}</PageTitle>
            <ProductClient producto={producto} />
        </div>
    );
}