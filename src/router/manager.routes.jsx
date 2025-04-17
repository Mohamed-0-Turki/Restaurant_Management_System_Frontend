import { Route } from "react-router";
import { ProtectedRoute } from "../components/auth";
import { RootLayout } from "../pages/layouts";

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
    <Route path="/manager" element={<h1>manager</h1>} />
  </Route>
  </>
);