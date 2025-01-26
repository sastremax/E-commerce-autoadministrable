import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/config.js";
import { readFileSync } from "node:fs";

// Leer los productos desde productos.json
const productos = JSON.parse(readFileSync("./scripts/productos.json", "utf8"));

const subirProductos = async () => {
    try {
        const productosCollection = collection(db, "productos");

        for (const producto of productos) {
            // Verifica si falta la categoría antes de subir
            if (!producto.category) {
                console.warn(`El producto "${producto.name}" no tiene categoría. Será omitido.`);
                continue;
            }

            // Subir el producto a Firestore
            await addDoc(productosCollection, producto);
            console.log(`Producto "${producto.name}" subido correctamente.`);
        }
    } catch (error) {
        console.error("Error al subir productos:", error);
    }
};

subirProductos();