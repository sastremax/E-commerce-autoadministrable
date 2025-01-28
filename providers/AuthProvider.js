"use client";

import { createContext, useState, useEffect } from "react";
import { auth } from "@/utils/config";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedIn(!!user);
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

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error.message);
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
        <Provider value={{ loggedIn, handleLogin, handleGoogleLogin, handleLogout }}>
            {children}
        </Provider>
    );
};

export default AuthProvider;