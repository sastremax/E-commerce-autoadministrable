import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: "center", padding: "10px" }}>
            <img
                src="/images/not-found.webp"
                alt="Página no encontrada"
                style={{ maxWidth: "600px", height: "auto", margin: "0 auto" }}
            />
            <a rel="noopener noreferrer" href="./" className="px-8 py-3 font-semibold rounded bg-blue-600 text-gray-50">VOLVER</a>
        </div>
    );
};

export default NotFoundPage;