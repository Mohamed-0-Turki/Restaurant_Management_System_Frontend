import React from "react";
import { Home, Users, Settings, FileText } from "lucide-react"; // Import icons
import { Sidebar, SidebarDropdown, SidebarItem } from "../../components/ui";

const AdminSidebar = () => {
  return (
    <Sidebar title="Admin Dashboard" subtitle="Manage your system">
      {/* Sidebar Items */}
      <SidebarItem name="Home" icon={<Home size={20} />} to="/admin/home" />
      <SidebarItem name="Users" icon={<Users size={20} />} to="/admin/users" />

      {/* Sidebar Dropdown */}
      <SidebarDropdown name="Settings" icon={<Settings size={20} />} open={false}>
        <SidebarItem name="General" to="/admin/settings/general" />
        <SidebarItem name="Security" to="/admin/settings/security" />
        <SidebarItem name="Notifications" to="/admin/settings/notifications" />
      </SidebarDropdown>

      {/* Additional Sidebar Item */}
      <SidebarItem name="Reports" icon={<FileText size={20} />} to="/admin/reports" />
    </Sidebar>
  );
};

export default AdminSidebar;
