import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { showToast } from "../../utils";
import { 
  fetchAllRestaurantsForCustomerService,
  fetchRestaurantByIdForCustomerService,
  addReviewToRestaurantService
} from "../../services/customer/restaurant.services";

const RESTAURANTS_QUERY_KEY = "restaurants";

// Fetch all restaurants for the customer
const useGetAllRestaurantsForCustomer = () => {

  const { data, isLoading } = useQuery({
    queryKey: [RESTAURANTS_QUERY_KEY],
    queryFn: () => fetchAllRestaurantsForCustomerService(),
  });

  return {
    restaurants: data?.data.restaurants || [],
    isLoading,
  };
};

// Fetch single restaurant by ID for the customer
const useGetRestaurantByIdForCustomer = (id) => {

  const { data, isLoading } = useQuery({
    queryKey: [RESTAURANTS_QUERY_KEY, id],
    queryFn: () => fetchRestaurantByIdForCustomerService(id),
  });

  return {
    categories: data?.data?.categories || null,
    isLoading,
  };
};

// Manage review actions
const useManageRestaurantReviews = () => {
  const { token } = useSelector((state) => state.auth);

  const addReviewMutation = useMutation({
    mutationFn: (reviewData) => addReviewToRestaurantService(reviewData.restaurantId, reviewData, token),
    onSuccess: () => {
      showToast("success", "Review added successfully");
    },
    onError: (error) => {
      if (error.errors && Array.isArray(error.errors)) {
        error.errors.forEach((err) => {
          showToast("error", err);
        });
      } else {
        showToast("error", "Something went wrong. Please try again.");
      }
    },
  });

  return {
    addReview: addReviewMutation.mutate,
    isAddingReview: addReviewMutation.isPending,
  };
};

export {
  useGetAllRestaurantsForCustomer,
  useGetRestaurantByIdForCustomer,
  useManageRestaurantReviews,
};
