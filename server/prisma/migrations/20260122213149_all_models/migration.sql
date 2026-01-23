/*
  Warnings:

  - You are about to drop the column `firstName` on the `auto_entrepreneur` table. All the data in the column will be lost.
  - The values [INDUSTRIAL,COMMERCIAL,ARTISANAL,AGRICULTURAL,LIBERAL_PROFESSION,OTHER] on the enum `auto_entrepreneur_activityType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `auto_entrepreneur` DROP COLUMN `firstName`,
    ADD COLUMN `passwordResetToken` VARCHAR(191) NULL,
    ADD COLUMN `passwordResetTokenExpiration` BIGINT NULL,
    MODIFY `activityType` ENUM('COMMERCE', 'SERVICE', 'MIXTE') NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    ADD COLUMN `firstName` VARCHAR(191) NULL,
    ADD COLUMN `lastName` VARCHAR(191) NULL;
