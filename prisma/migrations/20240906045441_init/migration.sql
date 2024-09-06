-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "week" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "sequenceOrder" INTEGER NOT NULL,
    "seriesId" INTEGER NOT NULL,

    CONSTRAINT "Posture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "week" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Series_week_key" ON "Series"("week");

-- AddForeignKey
ALTER TABLE "Posture" ADD CONSTRAINT "Posture_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
