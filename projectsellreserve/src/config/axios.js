import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
// axios.defaults.baseURL = "http://localhost:8000";

export default axios;
