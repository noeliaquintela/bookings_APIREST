USE reserva_hotel_db;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0; -- Desactiva chequeos temporalmente

-- ----------------------------
-- 1. Tabla: hotels
-- ----------------------------
DROP TABLE IF EXISTS `hotels`;
CREATE TABLE `hotels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserta un hotel de prueba
INSERT INTO `hotels` (`id`, `name`, `city`, `description`) VALUES
(1, 'Hotel Gran Vía', 'Madrid', 'Un hotel céntrico y maravilloso.'),
(2, 'Resort Paraíso', 'Cancún', 'Playa, sol y todo incluido.');

-- ----------------------------
-- 2. Tabla: roomtypes
-- ----------------------------
DROP TABLE IF EXISTS `roomtypes`;
CREATE TABLE `roomtypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_hotel` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roomtypes_hotels_FK` (`id_hotel`),
  CONSTRAINT `roomtypes_hotels_FK` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserta tipos de habitación
INSERT INTO `roomtypes` (`id`, `id_hotel`, `description`) VALUES
(1, 1, 'Habitación Doble Estándar'),
(2, 1, 'Suite Presidencial'),
(3, 2, 'Bungalow Vista Mar');

-- ----------------------------
-- 3. Tabla: bookings
-- ----------------------------
DROP TABLE IF EXISTS `bookings`;
CREATE TABLE `bookings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_hotel` int NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `room_type` int NOT NULL,
  `number_guests` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `bookings_hotels_FK` (`id_hotel`),
  KEY `bookings_roomtypes_FK` (`room_type`),
  CONSTRAINT `bookings_hotels_FK` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id`),
  CONSTRAINT `bookings_roomtypes_FK` FOREIGN KEY (`room_type`) REFERENCES `roomtypes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserta una reserva
INSERT INTO `bookings` (`id`, `id_hotel`, `start_date`, `end_date`, `room_type`, `number_guests`) VALUES
(1, 1, '2025-06-01', '2025-06-10', 1, 2),
(2, 2, '2025-08-15', '2025-08-20', 3, 4);

-- ----------------------------
-- 4. Tabla: guest
-- ----------------------------
DROP TABLE IF EXISTS `guest`;
CREATE TABLE `guest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_booking` int NOT NULL,
  `photo` text,
  `name` varchar(255) DEFAULT NULL,
  `surname1` varchar(255) DEFAULT NULL,
  `surname2` varchar(255) DEFAULT NULL,
  `identity_number` varchar(20) DEFAULT NULL,
  `suport_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `guest_bookings_FK` (`id_booking`),
  CONSTRAINT `guest_bookings_FK` FOREIGN KEY (`id_booking`) REFERENCES `bookings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserta huéspedes
INSERT INTO `guest` (`id`, `id_booking`, `name`, `surname1`, `identity_number`) VALUES
(1, 1, 'Noelia', 'García', '12345678Z'),
(2, 2, 'Juan', 'Pérez', '87654321X');

SET FOREIGN_KEY_CHECKS = 1; -- Reactiva chequeos
