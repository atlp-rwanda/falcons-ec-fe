import axios from "axios";
import { toast } from "react-toastify";


const { VITE_SERVER_URL } = process.env;
const instance = axios.create({
    baseURL: `${VITE_SERVER_URL}`
});

instance.defaults.headers.common.Authorization =
 `Bearer ${window.localStorage.getItem("token") ? window.localStorage.getItem("token").replace(/"/g, ""): ""} `;

 const errorHandler = (error) =>{
    const err =error.response.data;
    toast.error(`Failed! ${ err.error}`);
    return Promise.reject({ ...error})
 }
  
 const successHandler = (response) => {
    toast.success(response.data.message);
    return response
 }
 instance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
 )
export default instance;