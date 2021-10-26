/*
  Warnings:

  - The primary key for the `column` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `row` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `value` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "cellEntry" DROP CONSTRAINT "cellEntry_columnId_fkey";

-- DropForeignKey
ALTER TABLE "cellEntry" DROP CONSTRAINT "cellEntry_rowId_fkey";

-- DropForeignKey
ALTER TABLE "cellEntry" DROP CONSTRAINT "cellEntry_valueId_fkey";

-- AlterTable
ALTER TABLE "column" DROP CONSTRAINT "column_pkey",
ADD CONSTRAINT "column_pkey" PRIMARY KEY ("id", "matrixId");

-- AlterTable
ALTER TABLE "row" DROP CONSTRAINT "row_pkey",
ADD CONSTRAINT "row_pkey" PRIMARY KEY ("id", "matrixId");

-- AlterTable
ALTER TABLE "value" DROP CONSTRAINT "value_pkey",
ADD CONSTRAINT "value_pkey" PRIMARY KEY ("id", "matrixId");

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_rowId_matrixId_fkey" FOREIGN KEY ("rowId", "matrixId") REFERENCES "row"("id", "matrixId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_columnId_matrixId_fkey" FOREIGN KEY ("columnId", "matrixId") REFERENCES "column"("id", "matrixId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_valueId_matrixId_fkey" FOREIGN KEY ("valueId", "matrixId") REFERENCES "value"("id", "matrixId") ON DELETE RESTRICT ON UPDATE CASCADE;
