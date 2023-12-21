import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8900",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  return axiosSecure;
};

export default useAxiosSecure;
