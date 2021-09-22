import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV
    : process.env.REACT_APP_API;

console.log(URL);
export const api = axios.create({
  baseURL: URL,
});
