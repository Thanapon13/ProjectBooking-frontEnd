import { useContext } from "react";
import { CreateRoomContext } from "../contexts/CreateRoomContext";

export default function useCreateRoom() {
  return useContext(CreateRoomContext);
}
