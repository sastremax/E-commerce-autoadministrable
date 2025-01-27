import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/config.js";


export async function getProducts(category) {
    try {
        const productosCollection = collection(db, "productos");
        const productosQuery = category
            ? query(productosCollection, where("category", "==", category))
            : productosCollection;

        const querySnapshot = await getDocs(productosQuery);
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return {
            payload: products,
            error: false,
            message: null,
        };
    } catch (error) {
        return {
            payload: null,
            error: true,
            message: "Hubo un problema al obtener los productos.",
        };
    }
}
