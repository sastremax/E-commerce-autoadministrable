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

            const docRef = doc(productsCollection, product.id);

            await setDoc(docRef, product, { merge: true });
            console.log(`Product "${product.name}" uploaded/updated successfully with ID "${product.id}".`);

            await delay(200);
        }

    } catch (error) {
        console.error("Error uploading or updating products:", error);
    }
};

uploadOrUpdateProducts();

