import axios from "axios";
import {
  IComputer,
  ICreateComputer,
  IUpdateComputer,
} from "../models/IComputer";
const API = axios.create({ baseURL: "http://localhost:1337/api" });

export const getAllComputers = async (): Promise<IComputer[]> => {
  let response = await API.get("/computers");
  return response.data;
};

export const getById = async (id: number): Promise<IComputer | null> => {
  const response = await API.get(`/computers/${id}`);
  return response.data;
};

export const createNewComputer = async (computer: ICreateComputer) => {
  return await API.post("/computers", computer);
};

export const updateComputer = async (id: number, computer: IUpdateComputer) => {
  return await API.put(`/computers/${id}`, computer);
};

export const deleteComputer = async (id: number) => {
  return await API.delete(`/computers/${id}`);
};
