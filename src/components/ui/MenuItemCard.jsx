const MenuItemCard = ({ image, title, description, price }) => {
  return (
    <div className="text-center max-w-xs mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-full border border-gray-200 p-2"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm"> {description} </p>
      <p className="mt-2 text-lg font-bold text-red-600">${price}</p>
    </div>
  );
};

export default MenuItemCard;
