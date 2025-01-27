/* import fetch from "node-fetch";
import { writeFileSync } from "node:fs";

async function fetchProducts() {
    try {
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1000&limit=50");
        const data = await response.json();

        const productos = data.results.map((producto) => ({
            id: producto.id,
            name: producto.title,
            description: producto.condition === "new" ? "Nuevo" : "Usado",
            features: [],
            price: producto.price,
            image1: producto.thumbnail,
            stock: producto.available_quantity,
            category: "MLA1000",
        }));

        // Guardar los productos en un archivo JSON
        writeFileSync("productos.json", JSON.stringify(productos, null, 2));
        console.log("Productos guardados en productos.json");
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

fetchProducts();
*/