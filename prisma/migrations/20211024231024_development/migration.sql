-- CreateTable
CREATE TABLE "matrix" (
    "id" UUID NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(500),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matrix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "row" (
    "id" UUID NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "matrixId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "row_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "matrix_name_key" ON "matrix"("name");

-- CreateIndex
CREATE UNIQUE INDEX "row_name_matrixId_key" ON "row"("name", "matrixId");

-- AddForeignKey
ALTER TABLE "row" ADD CONSTRAINT "row_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "matrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
