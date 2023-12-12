/*
  Warnings:

  - You are about to alter the column `imagem` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Blob` to `LongText`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `imagem` LONGTEXT NOT NULL;
