import fetch from "node-fetch";
import { readFileSync, writeFileSync } from "node:fs";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const corregirImagenes = async () => {
    const productos = JSON.parse(readFileSync("./scripts/productos.json", "utf8"));

    for (const producto of productos) {
        if (!producto.image1 || producto.image1.includes("mlstatic.com")) {
            try {
                const response = await fetch(`https://api.mercadolibre.com/items/${producto.id}`);
                if (response.ok) {
                    const data = await response.json();
                    producto.image1 = data.pictures?.[0]?.url || producto.image1 || "https://via.placeholder.com/300";
                    console.log(`Imagen actualizada para ${producto.id}: ${producto.image1}`);
                } else {
                    console.warn(`Error al obtener datos para ${producto.id}: ${response.statusText}`);
                    producto.image1 = "https://via.placeholder.com/300";
                }
            } catch (error) {
                console.error(`Error al conectar con la API para ${producto.id}:`, error);
                producto.image1 = "https://via.placeholder.com/300";
            }
        }
    }

    writeFileSync("./products_fixed.json", JSON.stringify(productos, null, 2));
    console.log("Corrección de imágenes completada. Archivo actualizado: products_fixed.json");
};

corregirImagenes();
