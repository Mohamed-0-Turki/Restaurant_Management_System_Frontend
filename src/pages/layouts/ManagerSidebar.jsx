import React from "react";
import { Home, Users, CookingPot, ChefHat, HandHelping, Salad, Utensils, ChartLine, Pizza } from "lucide-react"; // Import icons
import { Sidebar, SidebarDropdown, SidebarItem } from "../../components/ui";

const ManagerSidebar = () => {
  return (
    <Sidebar title="Manager Dashboard" subtitle="Manage your resaurant">
      {/* Sidebar Items */}
      <SidebarItem name="Home" icon={<Home size={20} />} to="/" />

      <SidebarItem name="Dahsboard" icon={<ChartLine size={20} />} to="/manager/dashboard" />

      <SidebarItem name="Menu Items" icon={<Pizza size={20} />} to="/manager/menu-items" />
    </Sidebar>
  );
};

export default ManagerSidebar;
