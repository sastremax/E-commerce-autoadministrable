E-commerce Autoadministrable - Proyecto con Next.js
1. Descripción del Proyecto
Este proyecto es una aplicación web de comercio electrónico autoadministrable construida con Next.js, que permite gestionar productos, carritos de compra y usuarios. Además, cuenta con una integración con Firebase para la autenticación de usuarios y el manejo de productos a través de una base de datos en la nube. Es una solución flexible y escalable que facilita la creación y gestión de un comercio en línea.

2. Requisitos del Sistema
Node.js: Versión 16.x o superior.
Next.js: Versión 13.x (especificada en el proyecto).
Firebase: Configurado para almacenar datos de productos y usuarios.
Vercel: Para la implementación del proyecto en la nube.
NPM o Yarn: Para la gestión de dependencias y ejecución de comandos.
3. Instalación y Configuración Desde Cero
Instalar Node.js
Descarga e instala Node.js desde la página oficial: https://nodejs.org.
Verifica la instalación ejecutando el siguiente comando en tu terminal:
bash
Copiar
Editar
node -v
Clonar el Repositorio
Clona el repositorio de GitHub:
bash
Copiar
Editar
git clone https://github.com/sastremax/E-commerce-autoadministrable.git
Instalar Dependencias
Accede a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:
bash
Copiar
Editar
cd e-commerce-autoadministrable
npm install
Configurar Variables de Entorno
Crea un archivo .env.local en la raíz del proyecto y agrega tus credenciales de Firebase y otras configuraciones necesarias. Ejemplo:
bash
Copiar
Editar
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
Ejecutar el Proyecto
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:
bash
Copiar
Editar
npm run dev
La aplicación estará disponible en http://localhost:3000.
4. Estructura del Proyecto
La estructura del proyecto es la siguiente:

ruby
Copiar
Editar
e-commerce-autoadministrable/
│
├── components/             # Componentes reutilizables como botones, cabeceras, etc.
├── pages/                  # Páginas del proyecto
├── public/                 # Archivos estáticos como imágenes y fuentes
├── styles/                 # Archivos CSS y configuración de Tailwind
├── utils/                  # Funciones y helpers reutilizables
├── .env.local             # Variables de entorno para la configuración de Firebase
├── .gitignore             # Archivos y carpetas ignoradas por Git
├── next.config.js         # Configuración principal de Next.js
└── package.json           # Dependencias y scripts del proyecto
5. Uso de la API
Gestión de Productos
Crear Producto: Endpoint: /api/products Método: POST Cuerpo de la solicitud:

json
Copiar
Editar
{
  "name": "Producto X",
  "price": 100.0,
  "stock": 50
}
Obtener Productos: Endpoint: /api/products Método: GET

Autenticación de Usuarios con Firebase
Iniciar sesión: Utiliza Firebase Authentication para gestionar el inicio de sesión de usuarios con correo y contraseña.
Endpoint: /api/auth/login
Método: POST
Cuerpo de la solicitud:
json
Copiar
Editar
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña_segura"
}
Carrito de Compras
Agregar al carrito: Endpoint: /api/cart Método: POST Cuerpo de la solicitud:
json
Copiar
Editar
{
  "productId": "12345",
  "quantity": 2
}
6. Gestión de Productos
El sistema permite la gestión de productos mediante un sistema de CRUD:

Crear Producto

Endpoint: /api/products
Método: POST
Ejemplo de Solicitud:
json
Copiar
Editar
{
  "name": "Producto X",
  "price": 50.0,
  "stock": 100
}
Actualizar Producto

Endpoint: /api/products/{id}
Método: PUT
Ejemplo de Solicitud:
json
Copiar
Editar
{
  "name": "Producto X Actualizado",
  "price": 60.0,
  "stock": 90
}
7. Implementación en Vercel
Para desplegar tu proyecto en Vercel:

Crea una cuenta en Vercel.
Conecta tu repositorio de GitHub con tu cuenta de Vercel.
Configura el despliegue en la rama main para que se actualice automáticamente cada vez que realices un commit.
8. Consideraciones Finales
El sistema utiliza Next.js con Firebase para la autenticación y almacenamiento de productos.
Se emplea Tailwind CSS para el diseño de la interfaz.
El sistema está optimizado para ser desplegado en Vercel y puede ser fácilmente extendido para agregar nuevas funcionalidades.

Contacto
Autor: Maximiliano Sastre Bocalon.
