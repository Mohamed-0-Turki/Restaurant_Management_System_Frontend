import axiosInstance from "../../config/axios.config";

export const fetchAllCategoriesService = async (token) => {
  try {
    const response = await axiosInstance.get("/admin/categories/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};


export const createCategoryService = async (categoryName, token) => {
  try {
    const response = await axiosInstance.post(
      "/admin/categories",
      { name: categoryName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    
    throw error.response?.data || error;
  }
};