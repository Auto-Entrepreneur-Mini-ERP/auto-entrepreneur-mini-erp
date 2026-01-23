-- CreateTable
CREATE TABLE `auto_entrepreneurs` (
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
    `logo` VARCHAR(191) NULL,
    `dateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateMiseAJour` DATETIME(3) NOT NULL,

    UNIQUE INDEX `auto_entrepreneurs_ice_key`(`ice`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `articles` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `unite` ENUM('UNITE', 'KILOGRAMME', 'LITRE', 'METRE', 'HEURE', 'JOUR') NOT NULL DEFAULT 'UNITE',
    `categorie` VARCHAR(191) NOT NULL,
    `estActif` BOOLEAN NOT NULL DEFAULT true,
    `dateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateMiseAJour` DATETIME(3) NOT NULL,
    `autoEntrepreneurId` VARCHAR(191) NOT NULL,
    `typeArticle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `articles_autoEntrepreneurId_nom_key`(`autoEntrepreneurId`, `nom`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produits` (
    `id` VARCHAR(191) NOT NULL,
    `articleId` VARCHAR(191) NOT NULL,
    `prixUnitaire` DECIMAL(10, 2) NOT NULL,
    `reference` VARCHAR(191) NULL,
    `quantiteStock` INTEGER NOT NULL DEFAULT 0,
    `seuilAlerte` INTEGER NOT NULL DEFAULT 5,

    UNIQUE INDEX `produits_articleId_key`(`articleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` VARCHAR(191) NOT NULL,
    `articleId` VARCHAR(191) NOT NULL,
    `tarifHoraire` DECIMAL(10, 2) NULL,
    `tarifFixe` DECIMAL(10, 2) NULL,
    `dureeEstimee` INTEGER NULL,

    UNIQUE INDEX `services_articleId_key`(`articleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `articles` ADD CONSTRAINT `articles_autoEntrepreneurId_fkey` FOREIGN KEY (`autoEntrepreneurId`) REFERENCES `auto_entrepreneurs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produits` ADD CONSTRAINT `produits_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `articles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `articles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
