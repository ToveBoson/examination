import { Response, Request } from "express";
import * as data from "../services/computerAPI";
import { IComputer } from "../models/IComputer";
import { createNewComputer } from "../services/computerAPI";

export const getAll = async (req: Request, res: Response) => {
  try {
    let response = await data.getAllComputers();
    res.json(response);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const getComputerById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const computer = await data.getById(id);
    if (computer) {
      res.status(200).json(computer);
    } else {
      res.status(404).json({ message: "Computer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed founding computer" });
  }
};

export const createComputer = async (req: Request, res: Response) => {
  const newComputer: IComputer = req.body;

  try {
    const response = await createNewComputer({ data: newComputer });
    if (!response.data) {
      res.status(400).json({ message: "Something is missing from the body." });
    } else {
      res.status(201).json(response.data);
    }
  } catch (error) {
    res.status(500).send("Failed to create computer");
  }
};

export const updateComputer = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const updated: IComputer = req.body;
  const found = await data.getById(id);

  try {
    if (!found) {
      res.status(404).json({ message: `Cannot find computer with id ${id}` });
    } else {
      const updateObject = await data.updateComputer(id, {
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

export const deleteComputer = async (req: Request, res: Response) => {
  const id = +req.params.id;

  try {
    const foundComputer = await data.getById(id);

    if (!foundComputer) {
      return res
        .status(404)
        .json({ message: ` Can't find computer with id ${id}` });
    } else {
      await data.deleteComputer(id);
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
