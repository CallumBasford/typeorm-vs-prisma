import "reflect-metadata";
import { DataSource } from "typeorm";
import { Example } from "./entity/Example";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "typeormvsprisma",
  database: "typeormvsprisma",
  synchronize: true,
  logging: true,
  entities: [Example],
  migrations: [],
  subscribers: [],
});
