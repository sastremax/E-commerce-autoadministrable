"use client";

import { createContext, useState, useEffect } from "react";
import { auth } from "@/utils/config";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedIn(!!user); // Convertimos "user" en un booleano
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            throw error;
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
            throw error;
        }
    };

    return (
        <Provider value={{ loggedIn, handleLogin, handleLogout }}>
            {children}
        </Provider>
    );
};

export default AuthProvider;