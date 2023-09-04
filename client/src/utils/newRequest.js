import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://liberr2.vercel.app/",
  withCredentials: true,
});

export default newRequest;
