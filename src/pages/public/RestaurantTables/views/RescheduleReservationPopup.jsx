import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field, Input, InputErrorMessage, Label, Popup } from "../../../../components/ui";
import { useEffect } from "react";
import { useManageReservations } from "../../../../hooks/customer/useReservationHook";
import { rescheduleReservationSchema } from "../../../../validation/rescheduleReservationSchema";

const RescheduleReservationPopup = ({ isOpen, handleClose, defaultValues }) => {
  const {
    register,
    handleSubmit: formSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(rescheduleReservationSchema),
    defaultValues: {
      newReservationDate: defaultValues?.newReservationDate || "",
      newStartTime: defaultValues?.newStartTime || "",
    },
    mode: "onChange",
  });

  const { rescheduleReservation, isRescheduling } = useManageReservations(defaultValues?.id);

  const onSubmit = (data) => {
    rescheduleReservation(
      {
        newReservationDate: data.newReservationDate,
        newStartTime: data.newStartTime,
      },
      {
        onSuccess: () => {
          reset();
          handleClose();
        },
      }
    );
  };

  useEffect(() => {
    if (defaultValues) {
      setValue("newReservationDate", defaultValues.newReservationDate || "");
      setValue("newStartTime", defaultValues.newStartTime || "");
    }
  }, [defaultValues, setValue]);

  return (
    <Popup
      isOpen={isOpen}
      closeModal={handleClose}
      title="Reschedule Reservation"
      description="Update the reservation date and time."
    >
      <form className="flex flex-col space-y-3 mt-4" onSubmit={formSubmit(onSubmit)}>
        <Field>
          <Label>New Reservation Date</Label>
          <Input
            {...register("newReservationDate")}
            type="datetime-local"
            isError={!!errors["newReservationDate"]}
            placeholder="New Reservation Date"
          />
          {errors.newReservationDate && (
            <InputErrorMessage>{errors.newReservationDate.message}</InputErrorMessage>
          )}
        </Field>

        <Field>
          <Label>New Start Time</Label>
          <Input
            {...register("newStartTime")}
            type="time"
            isError={!!errors["newStartTime"]}
            placeholder="New Start Time"
          />
          {errors.newStartTime && (
            <InputErrorMessage>{errors.newStartTime.message}</InputErrorMessage>
          )}
        </Field>

        <div className="flex items-center space-x-3 mt-4">
          <Button variant="cancel" type="button" fullWidth={true} onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" fullWidth={true} isLoading={isRescheduling}>
            Save
          </Button>
        </div>
      </form>
    </Popup>
  );
};

export default RescheduleReservationPopup;
