import { useSearchParams } from "react-router";
import { capitalizeFirstLetter } from "../../utils/index.utils";

const MenuTabs = ({ tabs = [] }) => {
  const newTabs = ["all", ...tabs];
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const handleTabClick = (tab) => {
    setSearchParams({ category: tab });
  };

  return (
    <div className="w-75 sm:w-full text-center mt-10">
      {/* Tabs */}
      <div className="flex justify-center max-sm:overflow-x-scroll space-x-5 mb-4">
        {newTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-1 border-b-2 transition-colors duration-300 ${
              category === tab
                ? "border-red-600 text-black"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {capitalizeFirstLetter(tab)}
          </button>
        ))}
      </div>

      {/* Menu Title */}
      <div className="text-sm text-gray-600 mb-1">MENU</div>
      <div className="text-3xl text-red-600 font-menu tracking-widest">
        {category.toUpperCase()}
      </div>
    </div>
  );
};

export default MenuTabs;
