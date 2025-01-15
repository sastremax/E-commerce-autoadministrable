import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <img 
                src="/images/not-found.webp"
                alt="Página no encontrada"
                style={{ maxWidth: "400px", height: "auto", margin: "0 auto" }}
            />
            <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
                Volver al home
            </Link>
        </div>
    );
};

export default NotFoundPage;