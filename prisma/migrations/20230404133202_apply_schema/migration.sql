-- CreateTable
CREATE TABLE "Example" (
    "id" SERIAL NOT NULL,
    "exampleDateTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);
