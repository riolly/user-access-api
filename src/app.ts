import express from "express";
import router from "./router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(3000, () => console.log("App is running at localhost:3000"))