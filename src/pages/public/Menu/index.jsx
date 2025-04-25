import { foodDishImage } from "../../../assets";
import { Header, MenuItemCard, MenuTabs } from "../../../components/ui";

const Menu = () => {
  const tabs = ["Starters", "Breakfast", "Lunch", "Dinner"];


  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 space-y-8">
      {/* Header */}
      <Header
        heading="Check Our Yummy Menu"
        subtitle="Choose everything you want — your selection will be registered at your restaurant table."
      />
      <MenuTabs tabs={tabs} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <MenuItemCard
          image={foodDishImage} // Replace with real image URL
          title="Magnam Tiste"
          description="Lorem, deren, trataro, filede, nerada"
          price="5.95"
        />
        <MenuItemCard
          image={foodDishImage} // Replace with real image URL
          title="Magnam Tiste"
          description="Lorem, deren, trataro, filede, nerada"
          price="5.95"
        />
        <MenuItemCard
          image={foodDishImage} // Replace with real image URL
          title="Magnam Tiste"
          description="Lorem, deren, trataro, filede, nerada"
          price="5.95"
        />
        <MenuItemCard
          image={foodDishImage} // Replace with real image URL
          title="Magnam Tiste"
          description="Lorem, deren, trataro, filede, nerada"
          price="5.95"
        />
        <MenuItemCard
          image={foodDishImage} // Replace with real image URL
          title="Magnam Tiste"
          description="Lorem, deren, trataro, filede, nerada"
          price="5.95"
        />
        <MenuItemCard
          image={foodDishImage} // Replace with real image URL
          title="Magnam Tiste"
          description="Lorem, deren, trataro, filede, nerada"
          price="5.95"
        />
      </div>

    </div>
  );
};

export default Menu;
