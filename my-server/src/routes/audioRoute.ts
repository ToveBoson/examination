import { Router } from "express";
import * as controll from "../controllers/audioController";

export const audioRoute = Router()
  .get("/", controll.getAll)
  .get("/:id", controll.getAudioById)
  .post("/", controll.createAudio)
  .put("/:id", controll.updateAudio)
  .delete("/:id", controll.deleteAudio);
