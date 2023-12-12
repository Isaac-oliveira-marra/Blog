/*
  Warnings:

  - Added the required column `conteudo` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `conteudo` MEDIUMTEXT NOT NULL;
