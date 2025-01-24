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
                precio: `$${producto.price.toLocaleString()}`,
                stock: producto.available_quantity,
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