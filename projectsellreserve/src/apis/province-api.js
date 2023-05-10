import axios from "../config/axios";

export const getProvince = () => axios.get("/province/getprovince");
