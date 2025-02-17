E-commerce Autoadministrable - Proyecto con Next.js
1. Descripción del Proyecto
Este proyecto es una aplicación web de comercio electrónico desarrollada con Next.js. Permite gestionar productos, carritos de compra y usuarios. Además, cuenta con una interfaz administrativa para administrar el inventario, los pedidos y los datos de los clientes.

2. Requisitos del Sistema
Node.js: Versión 16.x o superior.
Next.js: Versión 13.x (especificada en el proyecto).
Firebase: Configurado para almacenar datos en la base de datos Firestore y gestionar la autenticación.
Vercel: Para la implementación del proyecto en la web.
NPM o Yarn: Para la gestión de dependencias y ejecución de scripts.
3. Instalación y Configuración Desde Cero
3.1 Descargar e Instalar Node.js
Descarga e instala Node.js desde la página oficial de Node.js.
Verifica la instalación ejecutando el siguiente comando en la terminal:

node -v

3.2 Clonar el Proyecto
Ve a la carpeta donde deseas clonar el proyecto y ejecuta:

git clone https://github.com/sastremax/E-commerce-autoadministrable.git

3.3 Instalar Dependencias
Entra en la carpeta del proyecto:

cd E-commerce-autoadministrable

Luego, instala las dependencias con NPM:

npm install

4. Configuración del Proyecto
El proyecto utiliza Firebase para la autenticación y la base de datos. Asegúrate de crear un proyecto en Firebase y obtener las credenciales necesarias para la configuración en tu archivo .env.

Firebase Firestore: Asegúrate de configurar las reglas de seguridad y crear las colecciones necesarias.
Autenticación: El sistema de autenticación se basa en Firebase Auth, lo que permite crear cuentas de usuario y administrar sesiones.
4.1 Configurar Firebase
Entra a Firebase.
Crea un proyecto nuevo.
Agrega las credenciales de autenticación en tu archivo .env.local:

NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id

5. Uso del Proyecto
5.1 Ejecutar el Proyecto en Local
Para ejecutar el proyecto en tu entorno local, usa el siguiente comando:

npm run dev

Esto iniciará el servidor de desarrollo en http://localhost:3000.

5.2 Construir el Proyecto para Producción
Para generar una versión optimizada para producción, ejecuta el siguiente comando:

npm run build

5.3 Desplegar en Vercel
Para desplegar en Vercel, asegúrate de tener una cuenta en Vercel.
Conecta tu repositorio de GitHub a Vercel y configura el despliegue automáticamente.
Si ya tienes Vercel configurado, puedes ejecutar el siguiente comando:

vercel --prod

6. Funcionalidades de la API
6.1 Gestión de Productos
La API permite crear, leer, actualizar y eliminar productos. Aquí algunos ejemplos de los endpoints:

Crear Producto:

POST /api/products

Ejemplo de solicitud:

{
  "name": "Producto X",
  "price": 50.0,
  "stock": 100
}

Actualizar Producto:

PUT /api/products/{id}

Ejemplo de solicitud:

{
  "name": "Producto X Actualizado",
  "price": 60.0,
  "stock": 90
}

Eliminar Producto:

DELETE /api/products/{id}

Ejemplo de respuesta exitosa:

{
  "status": 200,
  "message": "Producto eliminado correctamente"
}

6.2 Gestión de Carrito
La API también permite gestionar los carritos de compra, agregar productos, y realizar el checkout.

6.3 Gestión de Usuarios
Los usuarios pueden registrarse, iniciar sesión y acceder a sus perfiles.

7. Pruebas con Postman
Para probar la API, puedes utilizar Postman. Crea una nueva colección y agrega los endpoints mencionados anteriormente para probar las funcionalidades del sistema.

8. Consideraciones Finales
Este proyecto está diseñado para ser una solución de comercio electrónico escalable y fácil de gestionar. Algunas características clave incluyen:

Autenticación de usuarios mediante Firebase.
Gestión de productos e inventarios.
Integración con servicios en la nube como Firebase y Vercel para el despliegue.
9. Contacto
Autor: Maximiliano Sastre Bocalon.
