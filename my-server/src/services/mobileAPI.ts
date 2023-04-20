import axios from "axios";
import { ICreateMobile, IMobile, IUpdateMobile } from "../models/IMobile";
const API = axios.create({ baseURL: "http://localhost:1337/api" });

export const getAllMobiles = async (): Promise<IMobile[]> => {
  let response = await API.get("/mobiles");
  return response.data;
};

export const getMobileById = async (id: number): Promise<IMobile | null> => {
  const response = await API.get(`/mobiles/${id}`);
  return response.data;
};

export const createNewMobile = async (mobile: ICreateMobile) => {
  return await API.post("/mobiles", mobile);
};

export const updateMobile = async (id: number, mobile: IUpdateMobile) => {
  return await API.put(`/mobiles/${id}`, mobile);
};

export const deleteMobile = async (id: number) => {
  return await API.delete(`/moboiles/${id}`);
};
