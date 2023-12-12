/*
  Warnings:

  - You are about to drop the `rolerent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `rolerent` DROP FOREIGN KEY `RoleRent_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `rolerent` DROP FOREIGN KEY `RoleRent_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `roleId` INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE `rolerent`;

-- CreateTable
CREATE TABLE `Administrator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `roleId` INTEGER NOT NULL DEFAULT 3,

    UNIQUE INDEX `Administrator_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
