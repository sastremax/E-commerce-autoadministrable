import { db } from "../../utils/config";
import { doc, getDoc } from "firebase/firestore";

export const getProductByIdFromServer = async (id) => {
    try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            throw new Error("Producto no encontrado");
        }

        const producto = docSnap.data();
        producto.id = id;

        return {
            payload: producto,
            error: false,
            message: "Producto obtenido con éxito",
        };
    } catch (error) {
        return {
            payload: null,
            error: true,
            message: error.message || "Hubo un problema al obtener el producto.",
        };
    }
}