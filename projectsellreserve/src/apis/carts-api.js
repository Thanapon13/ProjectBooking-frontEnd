import axios from "axios";

export const createCart = (body, roomId) => axios.post(`/carts/${roomId}`);
export const getCart = () => axios.get("/carts/getCart");
export const deleteRoom = roomId => axios.delete(`/carts/${roomId}`);
