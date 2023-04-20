import { Router } from "express";
import * as controll from "../controllers/mobileController";

export const mobileRoute = Router()
  .get("/", controll.getAll)
  .get("/:id", controll.getMobileById)
  .post("/", controll.createMobile)
  .put("/:id", controll.updateMobile)
  .delete("/:id", controll.deleteMobile);
