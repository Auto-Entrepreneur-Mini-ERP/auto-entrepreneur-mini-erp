-- AlterTable
ALTER TABLE `AutoEntrepreneur` MODIFY `telephone` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `typeActivite` ENUM('COMMERCE', 'PRESTATION_SERVICE', 'MIXTE') NULL,
    MODIFY `tauxImposition` DOUBLE NULL,
    MODIFY `ice` VARCHAR(191) NULL,
    MODIFY `logo` VARCHAR(191) NULL;
