import axios from "axios";
import {
  ICreateTelevision,
  ITelevision,
  IUpdateTelevision,
} from "../models/ITelevision";
const API = axios.create({ baseURL: "http://localhost:1337/api" });

export const getAllTelevisions = async (): Promise<ITelevision[]> => {
  let response = await API.get("/televisions");
  return response.data;
};

export const getTelevisionById = async (
  id: number
): Promise<ITelevision | null> => {
  const response = await API.get(`/televisions/${id}`);
  return response.data;
};

export const createNewTelevision = async (television: ICreateTelevision) => {
  return await API.post("/televisions", television);
};

export const updateTelevision = async (
  id: number,
  television: IUpdateTelevision
) => {
  return await API.put(`/televisions/${id}`, television);
};

export const deleteTelevision = async (id: number) => {
  return await API.delete(`/televisions/${id}`);
};
