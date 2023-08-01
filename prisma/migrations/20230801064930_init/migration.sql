-- CreateTable
CREATE TABLE "AttackItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "atk" INTEGER NOT NULL,
    "effect" TEXT,
    "img" TEXT,
    "wield" INTEGER NOT NULL,
    "property" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DefenseItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "def" INTEGER NOT NULL,
    "effect" TEXT,
    "img" TEXT,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AttackItem_name_key" ON "AttackItem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DefenseItem_name_key" ON "DefenseItem"("name");
