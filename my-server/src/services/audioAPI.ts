import axios from "axios";
import { IAudio, ICreateAudio, IUpdateAudio } from "../models/IAudio";
const API = axios.create({ baseURL: "http://localhost:1337/api" });

export const getAllAudios = async (): Promise<IAudio[]> => {
  let response = await API.get("/audios");
  return response.data;
};

export const getAudioById = async (id: number): Promise<IAudio | null> => {
  const response = await API.get(`/audios/${id}`);
  return response.data;
};

export const createNewAudio = async (audio: ICreateAudio) => {
  return await API.post("/audios", audio);
};

export const updateAudio = async (id: number, audio: IUpdateAudio) => {
  return await API.put(`/audios/${id}`, audio);
};

export const deleteAudio = async (id: number) => {
  return await API.delete(`/audios/${id}`);
};
