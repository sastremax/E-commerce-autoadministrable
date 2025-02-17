"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

function IniciarSesionPage() {
    const { signIn, handleGoogleLogin } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signIn(email, password);
            router.push("/");
        } catch (error) {
            setError("Credenciales incorrectas");
        }
    };

    const handleGoogleSignIn = async () => {
        setError("");
        try {
            await handleGoogleLogin();
            router.push("/");
        } catch (error) {
            setError("Error al iniciar sesión con Google");
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100 text-gray-800">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Loguear a tu cuenta</h2>
                <p className="text-sm text-center text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <Link href="/" className="focus:underline hover:underline text-blue-600">
                        Regístrate aquí
                    </Link>
                </p>
                <div className="my-6 space-y-4">
                    <Button
                        aria-label="Loguear con Google"
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-blue-600"

                    >
                        <p>Loguear con Google</p>
                    </Button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="correo@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                                required
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <Button
                        type="submit"
                        className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50"
                    >
                        Iniciar sesión
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default IniciarSesionPage;
