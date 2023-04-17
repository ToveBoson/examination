import express, { Application } from "express";
import bodyParser, { urlencoded } from "body-parser";

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
