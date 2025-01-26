"use client";

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../utils/config";

export const ContextoDeAutenticacion = createContext();

const { Provider } = ContextoDeAutenticacion;

const ProveedorDeAutenticacion = (props) => {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (usuario) => {
            if (usuario) {
                setUsuarioAutenticado(true);
            } else {
                setUsuarioAutenticado(false);
            }
        });
    }, []);

    const iniciarSesion = async () => {
        const resultado = await signInWithEmailAndPassword(auth, "test1@test.com", "123456");
        console.log("Resultado:", resultado);
    };

    const cerrarSesion = async () => {
        await signOut(auth);
    };

    return (
        <Provider value={{ usuarioAutenticado, iniciarSesion, cerrarSesion }}>
            {props.children}
        </Provider>
    );
};

export default ProveedorDeAutenticacion;