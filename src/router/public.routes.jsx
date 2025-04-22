import { Route } from "react-router";
import { RootLayout } from "../pages/layouts";
import { HomePage, RestaurantsPage } from "../pages/public";

export const publicRoutes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/restaurants" element={<RestaurantsPage />} />
  </Route>
);