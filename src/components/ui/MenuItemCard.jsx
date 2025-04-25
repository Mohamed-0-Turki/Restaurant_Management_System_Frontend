import { CookingPot } from "lucide-react";
import Button from "./Button";
import { truncateText } from "../../utils/index.utils";

const MenuItemCard = ({ image, title, description, price }) => {
  return (
    <div className="text-center max-w-xs mx-auto space-y-3">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-full border border-gray-200 p-2"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm"> {truncateText(description, 40)} </p>
      <p className="mt-2 text-xl font-bold text-red-600">${price}</p>
      <Button icon={<CookingPot />} shape="pill" fullWidth size="md">Add to My Order</Button>
    </div>
  );
};

export default MenuItemCard;
