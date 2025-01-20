import PageTitle from "@/components/PageTitle";
import Link from "next/link";

function ProductLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-6">
            <aside className="min-w-[250px] bg-white p-4 rounded-lg shadow">
                <PageTitle>Filtros</PageTitle>
                <nav className="space-y-4">
                    <Link
                        href="/product/cat/televisores"
                        className="block text-blue-600 hover:underline"
                    >
                        Televisores
                    </Link>
                    <Link
                        href="/product/cat/laptops"
                        className="block text-blue-600 hover:underline"
                    >
                        Laptops
                    </Link>
                    <Link
                        href="/product/cat/celulares"
                        className="block text-blue-600 hover:underline"
                    >
                        Celulares
                    </Link>
                    <Link
                        href="/product/cat/accesorios"
                        className="block text-blue-600 hover:underline"
                    >
                        Accesorios
                    </Link>
                </nav>
            </aside>

            <div className="grow">
                {children}
            </div>

        </div>
    );
}

export default ProductLayout;