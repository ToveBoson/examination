import { Response, Request } from "express";
import * as data from "../services/mobileAPI";
import { IMobile } from "../models/IMobile";

export const getAll = async (req: Request, res: Response) => {
  try {
    let response = await data.getAllMobiles();
    res.json(response);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const getMobileById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const mobile = await data.getMobileById(id);
    if (mobile) {
      res.status(200).json(mobile);
    } else {
      res.status(404).json({ message: "Computer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed founding computer" });
  }
};

export const createMobile = async (req: Request, res: Response) => {
  const newMobile: IMobile = req.body;

  try {
    const response = await data.createNewMobile({ data: newMobile });
    if (!response.data) {
      res.status(400).json({ message: "Something is missing from the body." });
    } else {
      res.status(201).json(response.data);
    }
  } catch (error) {
    res.status(500).send("Failed to create computer");
  }
};

export const updateMobile = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const updated: IMobile = req.body;
  const found = await data.getMobileById(id);

  try {
    if (!found) {
      res.status(404).json({ message: `Cannot find computer with id ${id}` });
    } else {
      const updateObject = await data.updateMobile(id, {
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

export const deleteMobile = async (req: Request, res: Response) => {
  const id = +req.params.id;

  try {
    const foundMobile = await data.getMobileById(id);

    if (!foundMobile) {
      return res
        .status(404)
        .json({ message: ` Can't find computer with id ${id}` });
    } else {
      await data.deleteMobile(id);
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
