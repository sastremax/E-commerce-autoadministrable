import { db } from "@/utils/config";
import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function ProductsByCategoryPage({ params }) {
    const { cat } = params;
    
    const decodedCategory = decodeURIComponent(cat);

    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("category", "==", decodedCategory));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return (
            <>
                <PageTitle>Error</PageTitle>
                <p>No se encontraron productos para la categoría {decodedCategory}</p>
            </>
        );
    }

    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));

    return (
        <>
            <PageTitle>Productos de {decodedCategory}</PageTitle>
            <ProductList productos={products} />
        </>
    );
}