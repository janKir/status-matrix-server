-- CreateTable
CREATE TABLE "value" (
    "id" UUID NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "color" VARCHAR(32) NOT NULL,
    "matrixId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cellEntry" (
    "id" UUID NOT NULL,
    "matrixId" UUID NOT NULL,
    "rowId" UUID NOT NULL,
    "columnId" UUID NOT NULL,
    "valueId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cellEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "value_name_matrixId_key" ON "value"("name", "matrixId");

-- CreateIndex
CREATE UNIQUE INDEX "cellEntry_rowId_columnId_matrixId_key" ON "cellEntry"("rowId", "columnId", "matrixId");

-- AddForeignKey
ALTER TABLE "value" ADD CONSTRAINT "value_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_rowId_fkey" FOREIGN KEY ("rowId") REFERENCES "row"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "column"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cellEntry" ADD CONSTRAINT "cellEntry_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "value"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
