export default function CategoriaPage({ params }) {
    const { category } = params;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Productos en la categoría: {category}</h1>
            <p>Esta página mostraría productos filtrados por la categoría seleccionada.</p>
        </div>
    );
}