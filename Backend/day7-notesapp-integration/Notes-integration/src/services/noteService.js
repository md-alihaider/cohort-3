import { axiosInstance } from "../config/axiosInstance";

export const getAllNotes = async () => {
  const res = await axiosInstance.get("/notes/allnotes");
  return res.data;
};

export const createNote = async (note) => {
  const res = await axiosInstance.post("/notes/create", note);
  return res.data;
};

export const updateNote = async (id, note) => {
  const res = await axiosInstance.put(`/notes/${id}`, note);
  return res.data;
};

export const deleteNote = async (id) => {
  const res = await axiosInstance.delete(`/notes/${id}`);
  return res.data;
};
