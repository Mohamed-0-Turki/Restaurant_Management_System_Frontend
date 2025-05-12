import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCustomerSidebar } from "../../store/slices/reservationSlice"; // Import delete action
import { format } from "date-fns"; // To format the date (optional)
import { Button, StatusBadge } from "../../components/ui";
import { DeleteReservationPopup, RescheduleReservationPopup } from "../customer/ManageReservations";
import { RefreshCw, X } from "lucide-react"; // Import Lucide icons
import { useGetCustomerReservations } from "../../hooks/customer/useReservationHook";

const CustomerSidebar = () => {
  const dispatch = useDispatch();
  const { reservations, loading } = useGetCustomerReservations(); // Access reservations from Redux state
  const [selectedReservation, setSelectedReservation] = useState(null); // State for selected reservation
  const [isReschedulePopupOpen, setIsReschedulePopupOpen] = useState(false); // State to control the reschedule popup
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // State to control the delete popup visibility

  const openReschedulePopup = (reservation) => {
    setSelectedReservation(reservation);
    setIsReschedulePopupOpen(true);
  };

  const openDeletePopup = (reservation) => {
    setSelectedReservation(reservation);
    setIsDeletePopupOpen(true);
  };

  const closePopup = () => {
    setSelectedReservation(null);
    setIsReschedulePopupOpen(false);
    setIsDeletePopupOpen(false);
  };

  const handleCloseSidebar = () => {
    dispatch(toggleCustomerSidebar()); // Dispatch the toggle action when CookingPot is clicked
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full text-xl font-semibold text-gray-500">
        Loading your reservations...
      </div>
    );
  }

  return (
    <div className="z-50 fixed top-0 ltr:left-0 rtl:right-0 h-full w-96 bg-white border-r border-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0 opacity-100 overflow-y-auto">
      <div className="p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">My Reservations</h2>

          <div className="flex space-x-3">
            {/* Close Button using Lucide X icon */}
            <Button
              onClick={handleCloseSidebar} // Close the sidebar
              icon={<X size={20} className="w-full h-full" />}
              size="sm"
            />
          </div>
        </div>

        {reservations.length === 0 ? (
          <div className="text-center text-lg text-gray-400">No reservations found.</div>
        ) : (
          <ul className="space-y-6">
            {reservations.map((reservation) => (
              <li
                key={reservation.id}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{reservation.restaurantName}</h3>
                  <StatusBadge
                    variant={reservation.status === "Pending" ? "neutral" : reservation.status === "Accepted" ? "success" : "error"}
                    size="small"
                    shape="rounded"
                  >
                    {reservation.status}
                  </StatusBadge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong className="font-medium">Reservation Date:</strong>{" "}
                    {format(new Date(reservation.reservationDate), 'MMMM dd, yyyy')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="font-medium">Time:</strong> {reservation.startTime} - {reservation.endTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="font-medium">Guests:</strong> {reservation.numberOfGuests || "N/A"}
                  </p>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => openReschedulePopup(reservation)} // Open reschedule popup
                    >
                      Reschedule
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openDeletePopup(reservation)} // Open delete popup
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Reschedule Reservation Popup */}
      {isReschedulePopupOpen && selectedReservation && (
        <RescheduleReservationPopup
          isOpen={isReschedulePopupOpen}
          handleClose={closePopup}
          defaultValues={selectedReservation}
        />
      )}

      {/* Delete Reservation Popup */}
      {isDeletePopupOpen && selectedReservation && (
        <DeleteReservationPopup
          isOpen={isDeletePopupOpen}
          handleClose={closePopup}
          reservationId={selectedReservation.id}
        />
      )}
    </div>
  );
};

export default CustomerSidebar;
