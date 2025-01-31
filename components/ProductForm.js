import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { db } from "@/utils/config";
import { doc, addDoc, updateDoc, getDoc, deleteDoc, collection } from "firebase/firestore";


const ProductForm = ({ selectedAction, productId, setSelectedAction }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [features, setFeatures] = useState([]);
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("Nuevo");

    useEffect(() => {
        const fetchProductData = async () => {
            if (selectedAction === "edit" && productId) {
                try {
                    const docRef = doc(db, "productos", productId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const product = docSnap.data();
                        setName(product.name);
                        setPrice(product.price);
                        setCategory(product.category);
                        setShortDescription(product.descripcion_corta);
                        setLongDescription(product.descripcion_larga);
                        setFeatures(product.features || []);
                        setStock(product.stock);
                        setImage(product.image1);
                        setDescription(product.description || "Nuevo");
                    }
                } catch (error) {
                    console.error("Error fetching product data:", error);
                }
            }
        };

        fetchProductData();
    }, [selectedAction, productId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            name,
            price,
            category,
            descripcion_corta: shortDescription,
            descripcion_larga: longDescription,
            features,
            stock,
            image1: image,
            description,
        };

        try {
            if (selectedAction === "add") {
                await addDoc(collection(db, "productos"), productData);
                Swal.fire("Producto creado", "El producto ha sido agregado exitosamente.", "success");
            } else if (selectedAction === "edit" && productId) {
                const productRef = doc(db, "productos", productId);
                await updateDoc(productRef, productData);
                Swal.fire("Producto editado", "El producto se actualizó correctamente.", "success");
            } else if (selectedAction === "delete" && productId) {
                const productRef = doc(db, "productos", productId);
                await deleteDoc(productRef);
                Swal.fire("Producto eliminado", "El producto ha sido eliminado correctamente.", "success");
            }
        } catch (error) {
            Swal.fire("Error", "Hubo un problema", "error");
        }
    };

    const renderFormContent = () => {
        if (selectedAction === "add") {
            return (
                <>
                    <div className="col-span-full sm:col-span-3 mb-4">
                        <label htmlFor="name" className="text-sm">Nombre del producto</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Ej: Auriculares gamer"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-3 mb-4">
                        <label htmlFor="price" className="text-sm">Precio</label>
                        <input
                            id="price"
                            type="number"
                            placeholder="Ej: 4100"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-3 mb-4">
                        <label htmlFor="category" className="text-sm">Categoría</label>
                        <input
                            id="category"
                            type="text"
                            placeholder="Ej: Auriculares"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-full mb-4">
                        <label htmlFor="shortDescription" className="text-sm">Descripción Corta</label>
                        <textarea
                            id="shortDescription"
                            placeholder="Descripción corta del producto"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-full mb-4">
                        <label htmlFor="longDescription" className="text-sm">Descripción Larga</label>
                        <textarea
                            id="longDescription"
                            placeholder="Descripción larga del producto"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={longDescription}
                            onChange={(e) => setLongDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-full mb-4">
                        <label htmlFor="features" className="text-sm">Características (separadas por comas)</label>
                        <input
                            id="features"
                            type="text"
                            placeholder="Sonido de alta calidad, Bluetooth, etc."
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={features.join(", ")}
                            onChange={(e) => setFeatures(e.target.value.split(", "))}
                        />
                    </div>
                    <div className="col-span-full sm:col-span-2 mb-4">
                        <label htmlFor="stock" className="text-sm">Stock</label>
                        <input
                            id="stock"
                            type="number"
                            placeholder="Ej: 10"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-full sm:col-span-2 mb-4">
                        <label htmlFor="image" className="text-sm">Imagen del producto</label>
                        <input
                            id="image"
                            type="text"
                            placeholder="URL de la imagen"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                </>
            );
        }

        if (selectedAction === "edit" || selectedAction === "delete") {
            return (
                
                    <div className="col-span-full sm:col-span-3 mb-4">
                        <label htmlFor="productSelect" className="text-sm">Seleccionar Producto</label>
                        <select
                            id="productSelect"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={productId || ""}
                            onChange={(e) => setProductId(e.target.value)}
                        >
                            <option value="">Seleccionar Producto</option>
                            {productos.map((producto) => (
                                <option key={producto.id} value={producto.id}>
                                    {producto.name}
                                </option>
                            ))}
                        </select>
                    </div>
        )}

return null;
    };

return (
    <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Información del Producto</p>
                <p className="text-xs">Complete los campos para agregar un producto.</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                {renderFormContent()}
                <div className="col-span-full flex justify-between mt-4">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded">
                        {selectedAction === "delete" ? "Eliminar Producto" : selectedAction === "edit" ? "Actualizar Producto" : "Crear Producto"}
                    </button>
                    <button
                        type="button"
                        className="bg-gray-500 text-white py-2 px-6 rounded"
                        onClick={() => setSelectedAction("none")}
                    >
                        Volver Atrás
                    </button>
                </div>
            </div>
        </fieldset>
    </form>
);
};

export default ProductForm;