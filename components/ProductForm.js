import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { db } from "@/utils/config";
import { doc, addDoc, updateDoc, getDocs, getDoc, deleteDoc, collection } from "firebase/firestore";
import Button from "./Button";

const ProductForm = ({ selectedAction, productoId, setSelectedAction }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [features, setFeatures] = useState([]);
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("Nuevo");
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "productos"));
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosData);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchProductData = async () => {
            if (selectedAction === "edit" && productoId) {
                try {
                    const docRef = doc(db, "productos", productoId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const producto = docSnap.data();
                        setName(producto.name);
                        setPrice(producto.price);
                        setCategory(producto.category);
                        setShortDescription(producto.descripcion_corta);
                        setLongDescription(producto.descripcion_larga);
                        setFeatures(producto.features || []);
                        setStock(producto.stock);
                        setImage(producto.image1);
                        setDescription(producto.description || "Nuevo");
                    }
                } catch (error) {
                    console.error("Error fetching product data:", error);
                }
            }
        };
        fetchProductData();
    }, [selectedAction, productoId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productoData = {
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
                await addDoc(collection(db, "productos"), productoData);
                Swal.fire("Producto creado", "El producto ha sido agregado exitosamente.", "success");
                setSelectedAction("none");
            } else if (selectedAction === "edit" && productoId) {
                const productRef = doc(db, "productos", productoId);
                await updateDoc(productRef, productoData);
                Swal.fire("Producto editado", "El producto se actualizó correctamente.", "success");
                setSelectedAction("none");
            } else if (selectedAction === "delete" && productoId) {
                const productRef = doc(db, "productos", productoId);
                await deleteDoc(productRef);
                Swal.fire("Producto eliminado", "El producto ha sido eliminado correctamente.", "success");
                setSelectedAction("none");
            }
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
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

        if (selectedAction === "edit") {
            return (
                <>
                    <div className="col-span-full sm:col-span-3 mb-4">
                        <label htmlFor="productSelect" className="text-sm">Seleccionar Producto</label>
                        <select
                            id="productSelect"
                            className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                            value={productoId || ""}
                            onChange={(e) => {
                                setProductoId(e.target.value);
                            }}
                        >
                            <option value="">Seleccionar Producto</option>
                            {productos.map((producto) => (
                                <option key={producto.id} value={producto.id}>
                                    {producto.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {productoId && (
                        <>
                            <div className="col-span-full sm:col-span-3 mb-4">
                                <label htmlFor="name" className="text-sm">Nombre del producto</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3 mb-4">
                                <label htmlFor="price" className="text-sm">Precio</label>
                                <input
                                    id="price"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3 mb-4">
                                <label htmlFor="category" className="text-sm">Categoría</label>
                                <input
                                    id="category"
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full mb-4">
                                <label htmlFor="shortDescription" className="text-sm">Descripción Corta</label>
                                <textarea
                                    id="shortDescription"
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full mb-4">
                                <label htmlFor="longDescription" className="text-sm">Descripción Larga</label>
                                <textarea
                                    id="longDescription"
                                    value={longDescription}
                                    onChange={(e) => setLongDescription(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full mb-4">
                                <label htmlFor="features" className="text-sm">Características (separadas por comas)</label>
                                <input
                                    id="features"
                                    type="text"
                                    value={features.join(", ")}
                                    onChange={(e) => setFeatures(e.target.value.split(", "))}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2 mb-4">
                                <label htmlFor="stock" className="text-sm">Stock</label>
                                <input
                                    id="stock"
                                    type="number"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2 mb-4">
                                <label htmlFor="image" className="text-sm">Imagen del producto</label>
                                <input
                                    id="image"
                                    type="text"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-600 border-gray-300"
                                />
                            </div>
                        </>
                    )}
                </>
            );
        }
        return null;

    };


    return (
        <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Información del Producto</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    {renderFormContent()}
                </div>
            </fieldset>
            <div className="col-span-full flex justify-between mt-4">
                <Button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded">
                    {selectedAction === "delete"
                        ? "Eliminar Producto"
                        : selectedAction === "edit"
                            ? "Actualizar Producto"
                            : "Crear Producto"}
                </Button>
                <Button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-6 rounded"
                    onClick={() => setSelectedAction("none")}
                >
                    Volver Atrás
                </Button>
            </div>
        </form>
    );
}
export default ProductForm;