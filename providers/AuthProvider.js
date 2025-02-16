"use client";

import { createContext, useState, useEffect } from "react";
import { auth, db } from "@/utils/config";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

export const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setLoggedIn(true);
                setCurrentUser(user);

                const userRef = doc(db, "user", user.uid);
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    setRole(userDoc.data().role);
                } else {
                    setRole(null);
                }
            } else {
                setLoggedIn(false);
                setCurrentUser(null);
                setRole(null);
            }
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
        <Provider value={{ loggedIn, currentUser, role, handleLogin, handleGoogleLogin, handleLogout }}>
            {children}
        </Provider>
    );
};

export default AuthProvider;