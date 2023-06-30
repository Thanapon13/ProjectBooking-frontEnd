import axios from "../config/axios";

export const CreateProductRoom = formData =>
  axios.patch("/createRoom", formData);

export const GetCreateRoomController = () =>
  axios.get("/createRoom/getCreateRoomController");
