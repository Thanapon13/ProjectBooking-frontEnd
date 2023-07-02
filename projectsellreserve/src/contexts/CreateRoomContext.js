import { createContext, useEffect, useState } from "react";
import { GetCreateRoomController } from "../apis/createroom-api";

export const CreateRoomContext = createContext();

export default function CreateRoomContextProvider({ children }) {
  const [createRoomData, setCreateRoomData] = useState([]);
  // console.log("createRoomData:", createRoomData);

  useEffect(() => {
    const fetchCreateRoom = async () => {
      const res = await GetCreateRoomController();
      setCreateRoomData(res.data.pureCreateRoomControllerData);
      console.log(
        "res.data.pureCreateRoomControllerData",
        res.data.pureCreateRoomControllerData
      );
    };
    fetchCreateRoom();
  }, []);

  return (
    <CreateRoomContext.Provider value={{ createRoomData }}>
      {children}
    </CreateRoomContext.Provider>
  );
}
