import {
     EnvelopeIcon,
     FaceSmileIcon,
     PhoneIcon,
} from "@heroicons/react/24/solid";

export function Footer() {
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
                         <FaceSmileIcon className="h-6 w-6 text-white hover:text-blue-400" />
                    </a>
                    <a
                         href="mailto:contacto@productoslatam.com"
                         title="Email"
                         aria-label="Envíanos un correo"
                    >
                         <EnvelopeIcon className="h-6 w-6 text-white hover:text-blue-500" />
                    </a>
                    <a
                         href="tel:+1234567890"
                         title="Teléfono"
                         aria-label="Llámanos por teléfono"
                    >
                         <PhoneIcon className="h-6 w-6 text-white hover:text-blue-600" />
                    </a>
               </div>
          </footer>
     );
}
