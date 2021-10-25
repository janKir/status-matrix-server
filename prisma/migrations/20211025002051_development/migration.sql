-- AlterTable
CREATE SEQUENCE "column_position_seq";
ALTER TABLE "column" ALTER COLUMN "position" SET DEFAULT nextval('column_position_seq');
ALTER SEQUENCE "column_position_seq" OWNED BY "column"."position";
