export function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 Productos Latam, propiedad de Maximiliano Sastre. Todos los derechos reservados.</p>
            <div className="redes">
                <a href="https://es-la.facebook.com/" title="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook fa-beat"></i>
                </a>
                <a href="https://www.whatsapp.com/?lang=es_LA" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp fa-beat"></i>
                </a>
                <a href="https://twitter.com/x" title="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter fa-beat"></i>
                </a>
                <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-instagram fa-beat"></i>
                </a>
                <a href="https://ar.linkedin.com/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-beat"></i>
                </a>
            </div>
            <a className="subir" href="#" title="Subir al inicio de la página">
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </footer>
    );
}

