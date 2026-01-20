/*
  Warnings:

  - You are about to alter the column `passwordResetTokenExpiration` on the `AutoEntrepreneur` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `AutoEntrepreneur` MODIFY `passwordResetTokenExpiration` INTEGER NULL;
