import { Route } from "react-router";
import { ProtectedRoute } from "../components/auth";
import { RootLayout } from "../pages/layouts";
import { ManageFoodCategoriesPage } from "../pages/admin";

export const adminRoutes = (isLoggedIn, userRole) => (
  <>
    <Route 
      path="/"
      element={
        <ProtectedRoute isAllowed={isLoggedIn && userRole == "admin"} redirectPath="/">
          <RootLayout />
        </ProtectedRoute>
      } 
  >
    <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
    <Route path="/admin/restaurant-managers" element={<h1>Restaurant Managers</h1>} />
    <Route path="/admin/customers" element={<h1>Customers</h1>} />
    <Route path="/admin/food-categories" element={<ManageFoodCategoriesPage />} />
    <Route path="/admin/orders" element={<h1>Orders</h1>} />
    <Route path="/admin/reservations" element={<h1>Reservations</h1>} />
    <Route path="/admin/support" element={<h1>Support</h1>} />
  </Route>
  </>
);