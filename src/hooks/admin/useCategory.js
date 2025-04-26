import { useSelector } from "react-redux";
import { createCategoryService, fetchAllCategoriesService } from "../../services/admin/categories.services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../../utils/index.utils";

const CATEGORIES_QUERY_KEY = "categories";


const useGetAllCategories = () => {
  const { token } = useSelector((state) => state.auth);  // Now inside a component

  const { data, isLoading } = useQuery({
    queryKey: [CATEGORIES_QUERY_KEY],
    queryFn: () => fetchAllCategoriesService(token),
    enabled: !!token
  });

  return { 
    categories: data?.data.categories || [], 
    isLoading
  };
};

const useManageCategories = () => {
  const { token } = useSelector((state) => state.auth); 
  const queryClient = useQueryClient();
  
  const addMutation = useMutation({
    mutationFn: ({ name }) => createCategoryService(token, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CATEGORIES_QUERY_KEY] });
      showToast("success", "Category created successfully");
    },
    onError: (error) => {
      const message = error?.message || "Something went wrong";
      showToast("error", message);
    },
  });

  return {
    addCategory: addMutation.mutate,
    isAdding: addMutation.isPending,
  };
};

export {
  useGetAllCategories,
  useManageCategories
}