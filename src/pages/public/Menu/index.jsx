import { useLocation, useParams } from "react-router";
import { Header, MenuItemCard, MenuTabs } from "../../../components/ui";
import { useState } from "react";
import { useGetRestaurantByIdForCustomer } from "../../../hooks/customer/useRestaurantHook";

const Menu = () => {
  const { restaurantID } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const { categories, isLoading } = useGetRestaurantByIdForCustomer(restaurantID);

  const [activeTab, setActiveTab] = useState("");

  if (isLoading) {
    return <div className="p-10 text-center text-lg">Loading menu...</div>;
  }
  
  const tabNames = categories?.map((cat) => cat.name) || [];

  // Set default active tab
  if (!activeTab && tabNames.length > 0) {
    setActiveTab(tabNames[0]);
  }
  
  const activeCategory = category == "all" || category == null ? categories?.flatMap((cat) => cat.menuItems || []) : categories?.find((cat) => cat.name === category)?.menuItems

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 space-y-8">
      {/* Header */}
      <Header
        heading="Check Our Yummy Menu"
        subtitle="Choose everything you want — your selection will be registered at your restaurant table."
      />

      {/* Menu Tabs */}
      <MenuTabs tabs={tabNames} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {activeCategory?.map((item) => (
          <MenuItemCard
            key={item.id}
            image={item.imageUrl || "/default-image.webp"}
            title={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
