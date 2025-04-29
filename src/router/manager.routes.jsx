import { Route } from "react-router";
import { ProtectedRoute } from "../components/auth";
import { RootLayout } from "../pages/layouts";
import { ManageMenuItemsPage } from "../pages/manager";

export const managerRoutes = (isLoggedIn, userRole) => (
  <>
    <Route 
      path="/"
      element={
        <ProtectedRoute isAllowed={isLoggedIn && userRole == "manager"} redirectPath="/">
          <RootLayout />
        </ProtectedRoute>
      } 
  >
    <Route path="/manager/dashboard" element={<h1>dashboard</h1>} />

    <Route path="/manager/menu-items" element={<ManageMenuItemsPage />} />
  </Route>
  </>
);