import { PrismaClient } from "@prisma/client";

import { AppDataSource } from "./data-source";
import { Example } from "./entity/Example";

const prisma = new PrismaClient();

const testPrisma = async () => {
  const prismaExample = await prisma.example.findFirst();

  console.log(prismaExample);
};

const testTypeOrm = async () => {
  AppDataSource.initialize()
    .then(async () => {
      const examples = await AppDataSource.manager.find(Example);
      console.log(examples);
    })
    .catch((error) => console.log(error));
};

testPrisma();
testTypeOrm();
