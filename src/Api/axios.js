import axios from "axios";  


const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-ef248/us-central1/api",
  baseURL: "https://api-wojinmq43q-uc.a.run.app",
});

export {axiosInstance}