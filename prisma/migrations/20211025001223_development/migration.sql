-- CreateTable
CREATE TABLE "column" (
    "id" UUID NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "matrixId" UUID NOT NULL,
    "position" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "column_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "column_name_matrixId_key" ON "column"("name", "matrixId");

-- CreateIndex
CREATE UNIQUE INDEX "column_position_matrixId_key" ON "column"("position", "matrixId");

-- AddForeignKey
ALTER TABLE "column" ADD CONSTRAINT "column_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
