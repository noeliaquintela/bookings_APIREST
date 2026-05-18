# Bookings API REST

Repositorio que contiene una API REST para la gestión de reservas de hoteles. Permite gestionar hoteles, tipos de habitaciones, reservas y huéspedes mediante endpoints HTTP.

---

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v18+ recomendada)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) (v8+ recomendada)

---

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/noeliaquintela/bookings_APIREST.git
cd bookings_APIREST
```

2. Instalar dependencias de Node.js

```bash
npm install
# o con yarn
# yarn install
```

3. Crear la base de datos en MySQL

- El nombre de la base de datos está definido en `connections.js`.
- Ejecuta el script SQL incluido en el repositorio (`bd.sql`) para crear todas las tablas necesarias:

```sql
USE reserva_hotel_db;
SOURCE Resources/bd.sql;
```

> Asegúrate de que las credenciales de MySQL en `connections.js` sean correctas.

---

## Ejecución

1. Iniciar el servidor

En modo debug:
```bash
npm run dev
```

En modo producción:
```bash
npm run start
```

2. Acceder a la API

```
http://localhost:3004
```

---

## Endpoints principales

- **GET** `/hotels` → Listar hoteles  
- **POST** `/bookingsbyidhotel` → Obtener reservas por ID de hotel  
- **POST** `/bookingbyid` → Obtener reserva por ID  
- **POST** `/guestbyidbooking` → Obtener huéspedes de una reserva  
- **POST** `/savebooking` → Crear reserva  
- **POST** `/saveguest` → Añadir huésped a una reserva  
- **POST** `/roomtypesbyhotelid` → Obtener tipos de habitación por hotel  
- **POST** `/hotelbyid` → Obtener datos de un hotel  

*(y otros endpoints para creación y eliminación de hoteles, tipos de habitación y huéspedes)*

---

## Notas adicionales

- La configuración de la base de datos ya está incluida en `connections.js`.  

---
