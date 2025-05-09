import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Popup from "../Popup";
import { Field, Input, InputErrorMessage, Label, Textarea } from "../Form";
import Button from "../Button";
import { useManageRestaurantReviews } from "../../../hooks/customer/useRestaurantHook";
import { reviewSchema } from "../../../validation/reviewSchema";

const AddReviewPopup = ({ isOpen, handleClose, restaurantId }) => {
  const {
    register,
    handleSubmit: formSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reviewSchema),
    mode: "onChange",
  });

  const { addReview, isAdding } = useManageRestaurantReviews();

  const onSubmit = (data) => {
    
    addReview(
      {
        restaurantId,
        review: {
          rating: Number(data.rating),
          comment: data.comment,
          reviewDate: new Date().toISOString(),
        },
      },
      {
        onSuccess: () => {
          reset();
          handleClose();
        },
      }
    );
  };

  return (
    <Popup
      isOpen={isOpen}
      closeModal={handleClose}
      title="Add Review"
      description="Leave your rating and comment for this restaurant."
    >
      <form className="flex flex-col space-y-3 mt-4" onSubmit={formSubmit(onSubmit)}>
        <Field>
          <Label>Rating (1 to 5)</Label>
          <Input
            {...register("rating")}
            type="number"
            min={1}
            max={5}
            placeholder="Rating"
            isError={!!errors.rating}
          />
          {errors.rating && <InputErrorMessage>{errors.rating.message}</InputErrorMessage>}
        </Field>

        <Field>
          <Label>Comment</Label>
          <Textarea
            {...register("comment")}
            placeholder="Write your review here..."
            isError={!!errors.comment}
          />
          {errors.comment && <InputErrorMessage>{errors.comment.message}</InputErrorMessage>}
        </Field>

        <div className="flex items-center space-x-3 mt-4">
          <Button variant="cancel" type="button" fullWidth onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" fullWidth isLoading={isAdding}>
            Submit Review
          </Button>
        </div>
      </form>
    </Popup>
  );
};

export default AddReviewPopup;
