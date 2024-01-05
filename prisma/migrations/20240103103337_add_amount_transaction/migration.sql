/*
  Warnings:

  - Added the required column `amount` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaksi` ADD COLUMN `amount` INTEGER UNSIGNED NOT NULL;
