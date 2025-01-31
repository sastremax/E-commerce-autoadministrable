import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { db } from "@/utils/config";
import { doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";


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
                    <input type="text" placeholder="Nombre del producto" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" placeholder="Categoría" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <textarea placeholder="Descripción corta" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
                    <textarea placeholder="Descripción larga" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} />
                    <input type="text" placeholder="Características" value={features.join(", ")} onChange={(e) => setFeatures(e.target.value.split(", "))} />
                    <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                    <input type="text" placeholder="URL de la imagen" value={image} onChange={(e) => setImage(e.target.value)} />
                </>
            );
        }

        if (selectedAction === "edit" || selectedAction === "delete") {
            return (
                <>                    
                    <input type="text" placeholder="Nombre del producto" value={name} onChange={(e) => setName(e.target.value)} disabled={selectedAction === "delete"} />
                    <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} disabled={selectedAction === "delete"} />
                    <input type="text" placeholder="Categoría" value={category} onChange={(e) => setCategory(e.target.value)} disabled={selectedAction === "delete"} />
                    <textarea placeholder="Descripción corta" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} disabled={selectedAction === "delete"} />
                    <textarea placeholder="Descripción larga" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} disabled={selectedAction === "delete"} />
                    <input type="text" placeholder="Características" value={features.join(", ")} onChange={(e) => setFeatures(e.target.value.split(", "))} disabled={selectedAction === "delete"} />
                    <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} disabled={selectedAction === "delete"} />
                    <input type="text" placeholder="URL de la imagen" value={image} onChange={(e) => setImage(e.target.value)} disabled={selectedAction === "delete"} />
                </>
            );
        }

        return null;
    };

    return (
        <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
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