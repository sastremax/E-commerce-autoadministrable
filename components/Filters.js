const categories = [
    { id: 1, name: "Baterías" },
    { id: 2, name: "Televisores" },
    { id: 3, name: "Auriculares" },
    { id: 4, name: "Parlantes" },
    { id: 5, name: "Micrófonos" },
    { id: 6, name: "Streaming y Multimedia" },
];

function Filters({ onCategorySelect }) {
    return (
        <aside className="min-w-[250px] bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Categorías</h2>
            <nav className="space-y-4">
                <button
                    type="button"
                    onClick={() => onCategorySelect(null)}
                    className="block text-blue-600 hover:underline"
                >
                    Todos
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        type="button"
                        onClick={() => onCategorySelect(category.name)}
                        className="block text-blue-600 hover:underline"
                    >
                        {category.name}
                    </button>
                ))}
            </nav>
        </aside>
    );
}

export default Filters;