const productos = [
    {
        id: 1,
        nombre: 'Samsung 55" Neo QLED 4K',
        descripcion: 'Pantalla QLED 4K de 55" con tecnología HDR.',
        especificaciones: [
            'Resolución 4K Ultra HD',
            'Tecnología Quantum Matrix',
            'Dolby Atmos integrado',
            'Diseño ultra delgado',
        ],
        precio: "$3.827.499",
        imagen: "/images/tv-samsung.webp",
        stock: 5,
    },
    {
        id: 2,
        nombre: 'Laptop Gamer ASUS ROG',
        descripcion: 'Potencia para gaming de alto nivel.',
        especificaciones: [
            'Procesador Intel i9',
            'Tarjeta gráfica RTX 3080',
            '16GB de RAM',
            '1TB SSD',
        ],
        precio: "$1.836.994",
        imagen: "/images/laptop-gamer-iasus.webp",
        stock: 3,
    },
    {
        id: 3,
        nombre: "Auriculares Sony WH-1000XM4",
        descripcion: 'Cancelación de ruido líder en el mercado.',
        especificaciones: [
            'Cancelación activa de ruido',
            'Autonomía de 30 horas',
            'Bluetooth 5.0',
            'Compatibilidad con asistentes de voz',
        ],
        precio: "$409.999",
        imagen: "/images/auriculares-sony-inal.webp",
        stock: 10,
    },
    {
        id: 4,
        nombre: "Xiaomi Redmi A3 Dual SIM 3 GB RAM Star Blue 64 GB",
        descripcion: "Celular económico con buen rendimiento y diseño moderno.",
        especificaciones: [
            "Pantalla de 6.53\" HD+",
            "Procesador MediaTek Helio G35",
            "Cámara trasera de 13MP",
            "Batería de 5000mAh",
        ],
        precio: "$158.499",
        imagen: "/images/celular-Xiaomi-Redmi-A3.webp", // Agregar la imagen a la carpeta 'images'
        stock: 10,
    },
    {
        id: 5,
        nombre: "Celular Samsung A55 5G 256 GB, 8 GB RAM",
        descripcion: "Celular de gama media-alta con conectividad 5G.",
        especificaciones: [
            "Pantalla AMOLED de 6.5\"",
            "Procesador Exynos 1280",
            "Cámara principal de 64MP",
            "Batería de 5000mAh",
        ],
        precio: "$750.000",
        imagen: "/images/celular-samsung-a55.webp", // Agregar la imagen a la carpeta 'images'
        stock: 5,
    },
    {
        id: 6,
        nombre: "iPhone 16 Pro Max 512GB Desert Titanium",
        descripcion: "El último modelo de iPhone con las mejores prestaciones.",
        especificaciones: [
            "Pantalla Super Retina XDR de 6.7\"",
            "Chip A17 Bionic",
            "Sistema de cámaras Pro de 48MP",
            "Batería de larga duración con carga rápida",
        ],
        precio: "$8.094.443",
        imagen: "/images/celular-iphone-16-pro-max.webp", // Agregar la imagen a la carpeta 'images'
        stock: 2,
    },
];

export default productos;
