import { CookingPot } from "lucide-react";
import Button from "./Button";
import { truncateText } from "../../utils";

const MenuItemCard = ({ image, title, description, price }) => {
  return (
    <div className="group max-w-sm w-full bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden border border-gray-100">
      <div className="w-full h-48 bg-gray-50 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-3 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {truncateText(description, 80)}
        </p>
        <p className="text-lg font-bold text-green-600">${price}</p>
        <Button icon={<CookingPot />} fullWidth size="md">
          Add to My Order
        </Button>
      </div>
    </div>
  );
};

export default MenuItemCard;
