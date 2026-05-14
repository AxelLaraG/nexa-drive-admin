# NexaDrive - Administrative Dashboard
Este repositorio contiene el Panel de Administración de la plataforma NexaDrive, una solución integral para la gestión de renta de vehículos. La aplicación permite a los operadores gestionar la flota, supervisar reservaciones y administrar sucursales en tiempo real.
## Características Principales
- Gestión de Flota (CRUD): Control total sobre el catálogo de vehículos, incluyendo especificaciones técnicas y disponibilidad.
- Control de Rentas: Interfaz administrativa para el registro y seguimiento de contratos de renta.
- Localización de Sucursales: Visualización y gestión de puntos de servicio mediante integración con mapas nativos.
- Autenticación Corporativa: Acceso restringido mediante Google Sign-In y Firebase Auth para garantizar la seguridad de los datos operativos.
## Stack Tecnológico
- Framework: React Native con Expo (v53).
- Lenguaje: JavaScript (ES6+).
- Base de Datos y Almacenamiento: Firebase Cloud Firestore y Firebase Storage.
- Navegación: React Navigation v7 (Stack & Drawer).
- Mapas: React Native Maps y Expo Location.
## Instalación y Configuración
Sigue estos pasos para levantar el entorno de desarrollo:
1. Colnar el repositorio:

2. Instalar dependencias:

3. Configurar variables de entorno:

4. Iniciar la aplicación:

## Estructura del proyecto
El proyecto sigue una arquitectura modular para facilitar la escalabilidad y el mantenimiento:
- `/firebase`: Configuraciones de servicios y proveedores de autenticación.
- `/Navigation`: Definición de rutas y flujos de navegación de la app.
- `/Screens`: Pantallas principales de la interfaz administrativa.
- `/Components`: Componentes reutilizables (selectores de fecha, vistas animadas, etc.).
- `/Styles`: Sistema de diseño y estilos globales centralizados.
## Seguridad y Mejores Prácticas
- **Inyección de Dependencias**: Se utilizan hooks personalizados para el manejo de autenticación.
- **Manejo de Estados**: Integración fluida con Firebase para reactividad en tiempo real.
- **Variables de Entorno**: El proyecto utiliza EXPO_PUBLIC_ para evitar la exposición de llaves sensibles en el código fuente.
