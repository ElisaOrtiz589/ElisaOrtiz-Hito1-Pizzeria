# Pizzería Mamma Mia! - Desafío Front-End con React
Este proyecto es una aplicación web desarrollada en React que simula la página principal de una pizzería llamada "Mamma Mia!". Fue construido como parte de un desafío de desarrollo front-end, enfocado en la creación de una interfaz de usuario dinámica y componentizada.

## 🚀 Características Implementadas
El proyecto cumple con todos los requerimientos solicitados, demostrando una sólida comprensión de los fundamentos de React y el manejo del layout con Bootstrap.

### 1. Estructura de Componentes (App.jsx)
La aplicación está modularizada en componentes principales: NavBar, Home, y Footer.
El componente App.jsx sirve como el punto de entrada que organiza y renderiza esta estructura principal.

### 2. Header Personalizado (Header.jsx)
Se ha creado un componente Header que se muestra en la página de inicio.
Contiene un título y una descripción, estilizados sobre una imagen de fondo con una capa oscura para garantizar la legibilidad del texto, replicando el diseño de referencia.

### 3. Barra de Navegación Interactiva (NavBar.jsx)
Menú Dinámico: La barra de navegación incluye el nombre de la pizzería y un menú de opciones.
Autenticación Simulada:
Utiliza el hook useState de React para simular el estado de sesión de un usuario (token).
Muestra condicionalmente los botones "Profile" y "Logout" si el usuario está "logueado".
Muestra los botones "Login" y "Register" si el usuario no ha iniciado sesión.
El estado de sesión es interactivo: al hacer clic en "Login" o "Logout", la barra de navegación se actualiza en tiempo real.
Total del Carrito:
Muestra un botón con el total de la compra.
El valor numérico se formatea utilizando toLocaleString('es-CL') para mostrar el separador de miles (ej: $25.000), cumpliendo con los requisitos de localización.

### 4. Visibilidad Constante de Botones
Los botones "Home" y "Total" en la barra de navegación permanecen siempre visibles, independientemente del estado de autenticación del usuario.

### 5. Catálogo de Pizzas con Props (CardPizza.jsx)
La página de inicio (Home.jsx) muestra una grilla con diferentes pizzas.
Se ha creado un componente reutilizable CardPizza.jsx para mostrar la información de cada pizza (imagen, nombre, ingredientes y precio).
Los datos de cada pizza se pasan desde el componente padre (Home) al componente hijo (CardPizza) a través de props, demostrando un correcto flujo de datos.

### 6. Footer (Footer.jsx)
La aplicación incluye un componente Footer que se muestra al final de la página.
Contiene el texto de copyright y otros datos relevantes.

## 🛠️ Tecnologías Utilizadas
React: Biblioteca principal para la construcción de la interfaz de usuario.
Vite: Herramienta de desarrollo para un entorno de trabajo rápido y moderno.
React Bootstrap: Componentes de Bootstrap reconstruidos para React.
Bootstrap 5: Framework CSS para el diseño responsivo y estilizado de la aplicación.
CSS: Hojas de estilo personalizadas para detalles de diseño específicos como el Header.# ElisaOrtiz-Hito1-Pizzeria
