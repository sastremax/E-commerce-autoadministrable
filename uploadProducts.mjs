import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./utils/config.js";
import { readFileSync, existsSync } from "node:fs";

const filePath = 'productos.json';
if (!existsSync(filePath)) {
    console.error(`El archivo no existe en la ruta: ${filePath}`);
    process.exit(1);
}

const products = JSON.parse(readFileSync(filePath, "utf8"));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const uploadProducts = async () => {
    try {
        const productsCollection = collection(db, "productos");

        for (const product of products) {
            console.log("Processing product:", product);

            const docRef = doc(productsCollection, product.id);

            await setDoc(docRef, product);
            console.log(`Product "${product.name}" uploaded/updated successfully with ID "${product.id}".`);

            await delay(200);
        }

    } catch (error) {
        console.error("Error uploading or updating products:", error);
    }
};

uploadProducts();

