"use client";

import { useContext } from "react";
import { CartContext } from "providers/CartContext";
import { AuthContext } from "providers/AuthProvider";
import Swal from "sweetalert2";
import Button from "./Button";

const AddToCartButton = ({ producto }) => {
    const { addToCart } = useContext(CartContext);
    const { loggedIn } = useContext(AuthContext);

    const handleAddToCart = () => {
        if (!loggedIn) {
            Swal.fire({
                title: "¡Debes iniciar sesión!",
                text: "Para agregar productos al carrito, debes iniciar sesión.",
                icon: "warning",
                confirmButtonText: "Iniciar sesión",
            });
        } else if (!producto?.name) {
            Swal.fire({
                title: "Error",
                text: "Producto no válido.",
                icon: "error",
                confirmButtonText: "Cerrar",
            });
        } else {
            addToCart(producto);
            Swal.fire({
                title: "Producto agregado",
                text: `${producto.name} ha sido agregado a tu carrito.`,
                icon: "success",
                confirmButtonText: "Continuar comprando",
            });
        }
    };

    return (
        <Button
            onClick={handleAddToCart}
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
            Agregar al carrito
        </Button>
    );
};

export default AddToCartButton;