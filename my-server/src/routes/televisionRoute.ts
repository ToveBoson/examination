import { Router } from "express";
import * as controll from "../controllers/televisionController";

export const televisionRoute = Router()
  .get("/", controll.getAll)
  .get("/:id", controll.getTelevisionById)
  .post("/", controll.createTelevision)
  .put("/:id", controll.updateTelevision)
  .delete("/:id", controll.deleteTelevision);
