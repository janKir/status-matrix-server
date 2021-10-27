/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `column` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `row` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `value` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "column_id_key" ON "column"("id");

-- CreateIndex
CREATE UNIQUE INDEX "row_id_key" ON "row"("id");

-- CreateIndex
CREATE UNIQUE INDEX "value_id_key" ON "value"("id");
