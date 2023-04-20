import { Response, Request } from "express";
import * as data from "../services/televisionAPI";
import { ITelevision } from "../models/ITelevision";

export const getAll = async (req: Request, res: Response) => {
  try {
    let response = await data.getAllTelevisions();
    res.json(response);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const getTelevisionById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const tv = await data.getTelevisionById(id);
    if (tv) {
      res.status(200).json(tv);
    } else {
      res.status(404).json({ message: "Computer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed founding computer" });
  }
};

export const createTelevision = async (req: Request, res: Response) => {
  const newTelevision: ITelevision = req.body;

  try {
    const response = await data.createNewTelevision({ data: newTelevision });
    if (!response.data) {
      res.status(400).json({ message: "Something is missing from the body." });
    } else {
      res.status(201).json(response.data);
    }
  } catch (error) {
    res.status(500).send("Failed to create computer");
  }
};

export const updateTelevision = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const updated: ITelevision = req.body;
  const found = await data.getTelevisionById(id);

  try {
    if (!found) {
      res.status(404).json({ message: `Cannot find computer with id ${id}` });
    } else {
      const updateObject = await data.updateTelevision(id, {
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

export const deleteTelevision = async (req: Request, res: Response) => {
  const id = +req.params.id;

  try {
    const foundTelevision = await data.getTelevisionById(id);

    if (!foundTelevision) {
      return res
        .status(404)
        .json({ message: ` Can't find computer with id ${id}` });
    } else {
      await data.deleteTelevision(id);
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
