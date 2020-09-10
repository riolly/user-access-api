import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

import router from "./router";
import { ormConfig } from '../config'
import { User } from "./entity/User";

const main = async () => {
  await createConnection({ 
    ...ormConfig,
    entities: [User],
    synchronize: true,
    logging: false,
  })

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(router);

  app.listen(4000, () => console.log("App is running at localhost:4000"))
}

main().catch(err => console.error(err));