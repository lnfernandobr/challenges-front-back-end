import axios from "axios";

const url = "http://localhost:5000/api/get/";
export const get = newState => axios.get(`${url}${newState}`);
