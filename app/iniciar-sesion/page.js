"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

function iniciarSesionPage() {
    const router = useRouter();

    const handlePasswordClick = () => {
        router.push("/");
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
                    <button
                        aria-label="Loguear con Google"
                        type="button"
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-blue-600"
                    >
                        <p>Loguear con Google</p>
                    </button>
                </div>
                <form noValidate="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="correo@ejemplo.com"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                                onClick={handlePasswordClick}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50"
                        onClick={handlePasswordClick}
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default iniciarSesionPage;
