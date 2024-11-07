/*
  Warnings:

  - You are about to drop the `media` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_uploaded_by_fkey";

-- DropTable
DROP TABLE "media";

-- CreateTable
CREATE TABLE "medias" (
    "id" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "file_type" TEXT NOT NULL,
    "entity_type" "EntityType" NOT NULL,
    "entity_id" TEXT NOT NULL,
    "uploaded_by" TEXT NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "media_entity_id_idx" ON "medias"("entity_id");

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "medias_uploaded_by_fkey" FOREIGN KEY ("uploaded_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
