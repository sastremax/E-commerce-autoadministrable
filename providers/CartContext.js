"use client";

import { createContext, useState, useCallback } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = useCallback((product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find((item) => item.id === product.id);
            if (existingProduct) {

                if (existingProduct.quantity >= product.stock) {
                    Swal.fire({
                        title: "Stock insuficiente",
                        text: "No puedes agregar más productos. No hay stock",
                        icon: "error",
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    return prevItems;
                }
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            if (product.stock === 0) {
                Swal.fire({
                    title: "Producto agotado",
                    text: "No hay stock",
                    icon: "error",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000
                });
                return prevItems;
            }

            Swal.fire({
                title: "Producto agregado",
                text: `"${product.name}" fue añadido al carrito.`,
                icon: "success",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000
            });

            return [...prevItems, { ...product, quantity: 1 }];
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
        Swal.fire({
            title: "Producto eliminado",
            text: "El producto fue eliminado del carrito.",
            icon: "info",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000
        });
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
        Swal.fire({
            title: "Carrito vaciado",
            text: "Todos los productos han sido eliminados del carrito.",
            icon: "warning",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000
        });
    }, []);

    const decreaseQuantity = useCallback((productId) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === productId) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return null;
                }
                return item;
            })
                .filter(Boolean);
        });
    }, []);

    const contextValue = useCallback(
        () => ({
            cartItems,
            addToCart,
            removeFromCart,
            decreaseQuantity,
            clearCart,
        }),
        [cartItems, addToCart, removeFromCart, decreaseQuantity, clearCart]
    );

    return (
        <CartContext.Provider
            value={contextValue()}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
