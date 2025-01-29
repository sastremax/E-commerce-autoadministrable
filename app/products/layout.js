import Link from "next/link";

export default function ProductLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-6">
            <aside className="min-w-[250px] bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-4">Categorías</h2>
                <nav className="space-y-4">
                    <Link href="/products/category/Baterías" className="block text-blue-600 hover:underline">
                        Baterías
                    </Link>
                    <Link href="/products/category/Televisores" className="block text-blue-600 hover:underline">
                        Televisores
                    </Link>
                    <Link href="/products/category/Auriculares" className="block text-blue-600 hover:underline">
                        Auriculares
                    </Link>
                    <Link href="/products/category/Parlantes" className="block text-blue-600 hover:underline">
                        Parlantes
                    </Link>
                    <Link href="/products/category/Micrófonos" className="block text-blue-600 hover:underline">
                        Micrófonos
                    </Link>
                    <Link href="/products/category/Streaming y Multimedia" className="block text-blue-600 hover:underline">
                        Streaming y Multimedia
                    </Link>
                </nav>
            </aside>
            <main className="grow">{children}</main>
        </div>
    );
}