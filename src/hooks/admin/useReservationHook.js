import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchReservationByIdService } from "../../services/admin/reservation.services";

const RESERVATIONS_QUERY_KEY = "reservations";

export const useGetReservationById = (id) => {
  const { token } = useSelector((state) => state.auth);

  const { data, isLoading } = useQuery({
    queryKey: [RESERVATIONS_QUERY_KEY, id],
    queryFn: () => fetchReservationByIdService(id, token),
    enabled: !!token && !!id,
  });

  return {
    reservations: data?.data?.reservations || [],
    isLoading,
  };
};
