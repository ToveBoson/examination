import { Response, Request } from "express";
import * as data from "../services/audioAPI";
import { IAudio } from "../models/IAudio";

export const getAll = async (req: Request, res: Response) => {
  try {
    let response = await data.getAllAudios();
    res.json(response);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const getAudioById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const audio = await data.getAudioById(id);
    if (audio) {
      res.status(200).json(audio);
    } else {
      res.status(404).json({ message: "Computer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed founding computer" });
  }
};

export const createAudio = async (req: Request, res: Response) => {
  const newAudio: IAudio = req.body;

  try {
    const response = await data.createNewAudio({ data: newAudio });
    if (!response.data) {
      res.status(400).json({ message: "Something is missing from the body." });
    } else {
      res.status(201).json(response.data);
    }
  } catch (error) {
    res.status(500).send("Failed to create computer");
  }
};

export const updateAudio = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const updated: IAudio = req.body;
  const found = await data.getAudioById(id);

  try {
    if (!found) {
      res.status(404).json({ message: `Cannot find computer with id ${id}` });
    } else {
      const updateObject = await data.updateAudio(id, {
        data: updated,
      });
      return res.status(200).json({
        data: updateObject.data.data,
        message: `Updated computer successfully with id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update computer" });
  }
};

export const deleteAudio = async (req: Request, res: Response) => {
  const id = +req.params.id;

  try {
    const foundAudio = await data.getAudioById(id);

    if (!foundAudio) {
      return res
        .status(404)
        .json({ message: ` Can't find computer with id ${id}` });
    } else {
      await data.deleteAudio(id);
      return res
        .status(200)
        .json({ message: ` Successfully deleted computer with id ${id}` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to delete computer with id ${id}` });
  }
};
