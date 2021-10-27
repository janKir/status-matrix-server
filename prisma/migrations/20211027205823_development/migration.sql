-- DropForeignKey
ALTER TABLE "cellEntry" DROP CONSTRAINT "cellEntry_columnId_matrixId_fkey";

-- DropForeignKey
ALTER TABLE "cellEntry" DROP CONSTRAINT "cellEntry_matrixId_fkey";

-- DropForeignKey
ALTER TABLE "cellEntry" DROP CONSTRAINT "cellEntry_rowId_matrixId_fkey";

-- DropForeignKey
ALTER TABLE "cellEntry" DROP CONSTRAINT "cellEntry_valueId_matrixId_fkey";

-- DropForeignKey
ALTER TABLE "column" DROP CONSTRAINT "column_matrixId_fkey";

-- DropForeignKey
ALTER TABLE "row" DROP CONSTRAINT "row_matrixId_fkey";

-- DropForeignKey
ALTER TABLE "value" DROP CONSTRAINT "value_matrixId_fkey";

-- AddForeignKey
ALTER TABLE "row" ADD CONSTRAINT "row_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "column" ADD CONSTRAINT "column_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "value" ADD CONSTRAINT "value_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_rowId_matrixId_fkey" FOREIGN KEY ("rowId", "matrixId") REFERENCES "row"("id", "matrixId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_columnId_matrixId_fkey" FOREIGN KEY ("columnId", "matrixId") REFERENCES "column"("id", "matrixId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_valueId_matrixId_fkey" FOREIGN KEY ("valueId", "matrixId") REFERENCES "value"("id", "matrixId") ON DELETE CASCADE ON UPDATE CASCADE;
