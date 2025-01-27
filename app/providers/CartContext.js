"use client";

import { createContext, useState, useCallback } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = useCallback((product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId));
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    return (
        <CartContext.Provider 
            value={{ 
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
