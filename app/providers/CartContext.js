"use client";

import { createContext, useState, useCallback, useMemo } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = useCallback((product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find((item) => item.id === product.id);
            if (existingProduct) {

                if (existingProduct.quantity < product.stock) {
                    return prevItems.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                alert("No puedes agregar más productos de este tipo, alcanzaste el stock disponible.");
                return prevItems;
            }

            if (product.stock > 0) {
                return [...prevItems, { ...product, quantity: 1 }];
            }
            alert("Este producto está agotado.");
            return prevItems;
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId));
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
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

    const contextValue = useMemo(
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
            value={contextValue}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
