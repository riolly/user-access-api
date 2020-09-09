import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => res.send("Hello there!"))
app.listen(3000, () => console.log("App is running at localhost:3000"))