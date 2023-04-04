import { PrismaClient } from "@prisma/client";

import { AppDataSource } from "./data-source";
import { Example } from "./entity/Example";

const prisma = new PrismaClient();

const testPrisma = async () => {
  const prismaExample = await prisma.example.findFirst();

  console.log(prismaExample);

  //   This is a native JS Date
  prismaExample?.exampleDateTime;
};

const testTypeOrm = async () => {
  AppDataSource.initialize()
    .then(async () => {
      const examples = await AppDataSource.manager.find(Example);
      console.log(examples);

      //   This is already a JS Joda Instant
      examples[0].exampleDateTime;
    })
    .catch((error) => console.log(error));
};

testPrisma();
testTypeOrm();
