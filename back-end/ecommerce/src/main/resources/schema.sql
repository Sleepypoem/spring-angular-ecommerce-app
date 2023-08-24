-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ecommerce`;

CREATE SCHEMA `ecommerce`;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`categories` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` varchar(255),
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `ecommerce`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`products` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `price` DECIMAL(13,2) DEFAULT NULL,
  `image` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `stock` INT(11) DEFAULT NULL,
   `created_at` DATETIME(6) DEFAULT NULL,
  `updated_at` DATETIME(6) DEFAULT NULL,
  `category_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
)
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `ecommerce`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS
    `ecommerce`.`addresses` (
        `id` bigint NOT NULL AUTO_INCREMENT,
        `city` varchar(255) DEFAULT NULL,
        `country` varchar(255) DEFAULT NULL,
        `state` varchar(255) DEFAULT NULL,
        `street` varchar(255) DEFAULT NULL,
        `zip_code` varchar(255) DEFAULT NULL,
        `created_at` datetime(6) DEFAULT NULL,
        `updated_at` datetime(6) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `ecommerce`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS
    `ecommerce`.`customers` (
        `id` bigint NOT NULL AUTO_INCREMENT,
        `first_name` varchar(255) DEFAULT NULL,
        `last_name` varchar(255) DEFAULT NULL,
        `email` varchar(255) DEFAULT NULL,
        `phone` varchar(255) DEFAULT NULL,
        `image` varchar(255) DEFAULT NULL,
        `created_at` datetime(6) DEFAULT NULL,
        `updated_at` datetime(6) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `ecommerce`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS
    `ecommerce`.`orders` (
        `id` bigint NOT NULL AUTO_INCREMENT,
        `order_tracking_number` varchar(255) DEFAULT NULL,
        `total_price` decimal(19, 2) DEFAULT NULL,
        `total_quantity` int DEFAULT NULL,
        `billing_address_id` bigint DEFAULT NULL,
        `customer_id` bigint DEFAULT NULL,
        `shipping_address_id` bigint DEFAULT NULL,
        `status` varchar(128) DEFAULT NULL,
        `created_at` datetime(6) DEFAULT NULL,
        `updated_at` datetime(6) DEFAULT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `UK_billing_address_id` (`billing_address_id`),
        UNIQUE KEY `UK_shipping_address_id` (`shipping_address_id`),
        KEY `K_customer_id` (`customer_id`),
        CONSTRAINT `FK_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
        CONSTRAINT `FK_billing_address_id` FOREIGN KEY (`billing_address_id`) REFERENCES `addresses` (`id`),
        CONSTRAINT `FK_shipping_address_id` FOREIGN KEY (`shipping_address_id`) REFERENCES `addresses` (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `ecommerce`.`order_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS
    `ecommerce`.`order_items` (
        `id` bigint NOT NULL AUTO_INCREMENT,
        `quantity` int DEFAULT NULL,
        `order_id` bigint DEFAULT NULL,
        `product_id` bigint DEFAULT NULL,
        `created_at` datetime(6) DEFAULT NULL,
        `updated_at` datetime(6) DEFAULT NULL,
        PRIMARY KEY (`id`),
        KEY `K_order_id` (`order_id`),
        CONSTRAINT `FK_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
        CONSTRAINT `FK_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;