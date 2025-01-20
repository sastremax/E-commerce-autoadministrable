import { Smile, Mail, Phone } from "lucide-react";

function Footer() {
     return (
          <footer className="footer">
               <p>
                    &copy; 2024 Productos Latam, propiedad de Maximiliano
                    Sastre. Todos los derechos reservados.
               </p>
               <div className="redes flex justify-center space-x-4 mt-4">
                    <a
                         href="https://facebook.com"
                         title="Facebook"
                         aria-label="Visita nuestro Facebook"
                    >
                         <Smile className="h-6 w-6 text-white hover:text-blue-400" />
                    </a>
                    <a
                         href="mailto:contacto@productoslatam.com"
                         title="Email"
                         aria-label="Envíanos un correo"
                    >
                         <Mail className="h-6 w-6 text-white hover:text-blue-500" />
                    </a>
                    <a
                         href="tel:+1234567890"
                         title="Teléfono"
                         aria-label="Llámanos por teléfono"
                    >
                         <Phone className="h-6 w-6 text-white hover:text-blue-600" />
                    </a>
               </div>
          </footer>
     );
}

export default Footer;