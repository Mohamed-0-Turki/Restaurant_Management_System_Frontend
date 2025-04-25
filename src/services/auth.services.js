import axiosInstance from "../config/axios.config";

export const loginService = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

