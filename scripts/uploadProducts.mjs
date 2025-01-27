import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/config.js";
import { readFileSync } from "node:fs";

const products = JSON.parse(readFileSync("./products_fixed.json", "utf8"));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const uploadOrUpdateProducts = async () => {
    try {
        const productsCollection = collection(db, "productos");

        for (const product of products) {
            console.log("Processing product:", product);

            // Buscar si el producto ya existe en la base de datos por su ID único
            const q = query(productsCollection, where("id", "==", product.id));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                // Si el producto ya existe, actualizarlo
                const existingDoc = querySnapshot.docs[0];
                const docRef = doc(db, "productos", existingDoc.id);

                await setDoc(docRef, product, { merge: true });
                console.log(`Product "${product.name}" updated successfully.`);
            } else {
                // Si el producto no existe, crear uno nuevo
                const newDocRef = doc(productsCollection);
                await setDoc(newDocRef, product);
                console.log(`Product "${product.name}" uploaded successfully.`);
            }

            // Agregar un delay para evitar sobrecarga de Firestore
            await delay(200);
        }
    } catch (error) {
        console.error("Error uploading or updating products:", error);
    }
};

uploadOrUpdateProducts();

