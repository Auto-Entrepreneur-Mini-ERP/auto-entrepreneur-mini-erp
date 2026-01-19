/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Test`;

-- CreateTable
CREATE TABLE `AutoEntrepreneur` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `typeActivite` ENUM('COMMERCE', 'PRESTATION_SERVICE', 'MIXTE') NOT NULL,
    `tauxImposition` DOUBLE NOT NULL,
    `ice` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `dateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateMiseAJour` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
