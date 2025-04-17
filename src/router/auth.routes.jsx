import { Route } from "react-router";
import { ProtectedRoute } from "../components/auth";
import { RootLayout } from "../pages/layouts";

export const authRoutes = (isLoggedIn) => (
  <>
    <Route 
      path="/"
      element={
        <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/">
          <RootLayout />
        </ProtectedRoute>
      } 
  >
    <Route path="/login" element={<h1>login</h1>} />
    <Route path="/signup" element={<h1>signup</h1>} />
  </Route>
  </>
);