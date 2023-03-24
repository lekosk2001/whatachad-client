// import axios from "axios";

// axios.defaults.baseURL = "http://129.154.212.45:3000";
// axios.defaults.withCredentials = true;

// axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axios;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://129.154.212.45:3000/v1",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
