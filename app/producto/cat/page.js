import Link from "next/link";

export default function CategoriasPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Selecciona una Categoría</h1>
            <nav className="mt-4 space-y-2">
                <Link href="/producto/cat/televisores" className="block text-blue-600 hover:underline">
                    Televisores
                </Link>
                <Link href="/producto/cat/laptops" className="block text-blue-600 hover:underline">
                    Laptops
                </Link>
                <Link href="/producto/cat/celulares" className="block text-blue-600 hover:underline">
                    Celulares
                </Link>
                <Link href="/producto/cat/accesorios" className="block text-blue-600 hover:underline">
                    Accesorios
                </Link>
            </nav>
        </div>
    );
}