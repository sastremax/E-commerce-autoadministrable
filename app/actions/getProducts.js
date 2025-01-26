function getCategory(title) {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("auriculares") || lowerTitle.includes("headphones")) {
        return "Auriculares";
    }
    if (lowerTitle.includes("parlante") || lowerTitle.includes("speaker")) {
        return "Parlantes";
    }
    if (lowerTitle.includes("micrófono") || lowerTitle.includes("microfono")) {
        return "Micrófonos";
    }
    if (lowerTitle.includes("batería") || lowerTitle.includes("pila") || lowerTitle.includes("battery")) {
        return "Baterías";
    }
    if (lowerTitle.includes("tv") || lowerTitle.includes("soporte") || lowerTitle.includes("chromecast")) {
        return "Accesorios de TV";
    }
    if (lowerTitle.includes("streaming") || lowerTitle.includes("google tv")) {
        return "Streaming y Multimedia";
    }

    return "Otros";
}

export async function getProducts(category) {
    try {
        const response = await fetch(
            `https://api.mercadolibre.com/sites/MLA/search?q=${category}&limit=50`
        );

        if (!response.ok) {
            return {
                payload: null,
                error: true,
                message: "Error al obtener productos",
            };
        }

        const data = await response.json();
        return {
            payload: data.results.map((producto) => ({
                id: producto.id,
                nombre: producto.title,
                descripcion: producto.condition === "new" ? "Nuevo" : "Usado",
                imagen: producto.thumbnail,
                precio: producto.price,
                stock: producto.available_quantity,
                category: getCategory(producto.title),
            })),
            error: false,
            message: null,
        };
    } catch (error) {
        return {
            payload: null,
            error: true,
            message: "Hubo un problema al conectar con la API.",
        };
    }
}