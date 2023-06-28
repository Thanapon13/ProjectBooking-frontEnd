import axios from "../config/axios";

export const getRoomProduct = () => axios.get("/room/getRoomProduct");
export const createRoom = formData => axios.patch("/room", formData);
