import express, { Application } from "express";
import { computerRoute } from "./src/routes/computerRoute";
import { audioRoute } from "./src/routes/audioRoute";
import { televisionRoute } from "./src/routes/televisionRoute";
import { mobileRoute } from "./src/routes/mobileRoute";

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/computers", computerRoute);
app.use("/audios", audioRoute);
app.use("/televisions", televisionRoute);
app.use("/mobiles", mobileRoute);

// app.use("/", computerRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
