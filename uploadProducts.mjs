import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./utils/config.js";
import { readFileSync, existsSync, writeFileSync } from "node:fs";

const filePath = 'productos.json';
if (!existsSync(filePath)) {
    console.error(`El archivo no existe en la ruta: ${filePath}`);
    process.exit(1);
}

const products = JSON.parse(readFileSync(filePath, "utf8"));

const productsToUpload = products.filter(product => !product.isDeleted);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const uploadProducts = async () => {
    try {
        const productsCollection = collection(db, "productos");

        for (const product of products) {            

            const docRef = doc(productsCollection, product.id);

            await setDoc(docRef, product);            

            await delay(200);
        }

        writeFileSync(filePath, JSON.stringify(productsToUpload, null, 2), "utf8");

    } catch (error) {
        console.error("Error uploading or updating products:", error);
    }
};

uploadProducts();

