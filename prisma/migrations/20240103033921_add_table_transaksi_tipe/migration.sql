/*
  Warnings:

  - Added the required column `transaksiTipeId` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaksi` ADD COLUMN `transaksiTipeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `TransaksiTipe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaksi` ADD CONSTRAINT `Transaksi_transaksiTipeId_fkey` FOREIGN KEY (`transaksiTipeId`) REFERENCES `TransaksiTipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
