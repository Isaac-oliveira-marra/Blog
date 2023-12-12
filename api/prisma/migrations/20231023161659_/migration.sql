/*
  Warnings:

  - You are about to alter the column `imagem` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Blob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `imagem` VARCHAR(191) NOT NULL;
