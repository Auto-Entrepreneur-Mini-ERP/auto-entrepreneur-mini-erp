/*
  Warnings:

  - The values [DISCOUNT,TAX,OTHER] on the enum `quote_lines_lineType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `taxAmount` on the `invoices` table. All the data in the column will be lost.
  - The values [DISCOUNT,TAX,OTHER] on the enum `quote_lines_lineType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `invoice_lines` MODIFY `lineType` ENUM('PRODUCT', 'SERVICE') NOT NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `invoices` DROP COLUMN `taxAmount`,
    ADD COLUMN `discount` DECIMAL(65, 30) NULL DEFAULT 0,
    MODIFY `status` ENUM('DRAFT', 'SENT', 'UNPAID', 'PARTIALLY_PAID', 'PAID', 'OVERDUE', 'CANCELLED') NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE `quote_lines` MODIFY `lineType` ENUM('PRODUCT', 'SERVICE') NOT NULL;
