import { collection, getDocs } from "firebase/firestore";
import { db } from "./utils/config.js";


const testFirebase = async () => {
    try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);

        if (querySnapshot.empty) {
            console.log("No se encontraron productos en la colección.");
            return;
        }

        console.log("Productos encontrados:");
        for (const doc of querySnapshot.docs) {
            console.log(`ID: ${doc.id}, Datos:`, doc.data());
        }
    } catch (error) {
        console.error("Error al obtener productos de Firebase:", error);
    }
};

testFirebase();