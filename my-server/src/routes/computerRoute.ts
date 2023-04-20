import { Router } from "express";
import * as controll from "../controllers/computerController";

// export const computerRoute = express.Router();

// computerRoute.get("/", controll.getAll);
// computerRoute.post("/", controll.createComputer);
// computerRoute.put("/computers/:id", controll.updateComputer);

export const computerRoute = Router()
  .get("/", controll.getAll)
  .get("/:id", controll.getComputerById)
  .post("/", controll.createComputer)
  .put("/:id", controll.updateComputer)
  .delete("/:id", controll.deleteComputer);
