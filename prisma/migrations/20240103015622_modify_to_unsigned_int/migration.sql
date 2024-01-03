/*
  Warnings:

  - You are about to alter the column `amount` on the `dompet` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `accountNumber` on the `dompet` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.

*/
-- AlterTable
ALTER TABLE `dompet` MODIFY `amount` INTEGER UNSIGNED NOT NULL,
    MODIFY `accountNumber` INTEGER UNSIGNED NULL,
    MODIFY `image` TEXT NOT NULL;
