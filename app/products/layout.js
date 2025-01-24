import Link from "next/link";

export default function ProductLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-6">
            <aside className="min-w-[250px] bg-gray p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-4">Categorías</h2>
                <nav className="space-y-4">
                    <Link href="/products/cat/celulares" className="block text-blue-600 hover:underline">
                        Celulares
                    </Link>
                    <Link href="/products/cat/laptops" className="block text-blue-600 hover:underline">
                        Laptops
                    </Link>
                    <Link href="/products/cat/accesorios" className="block text-blue-600 hover:underline">
                        Accesorios
                    </Link>
                </nav>
            </aside>
            <main className="grow">{children}</main>
        </div>
    );
}