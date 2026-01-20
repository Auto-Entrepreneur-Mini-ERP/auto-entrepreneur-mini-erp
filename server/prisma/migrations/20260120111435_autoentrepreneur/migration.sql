-- CreateTable
CREATE TABLE `AutoEntrepreneur` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `typeActivite` ENUM('COMMERCE', 'PRESTATION_SERVICE', 'MIXTE') NULL,
    `tauxImposition` DOUBLE NULL,
    `ice` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `dateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateMiseAJour` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AutoEntrepreneur_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
