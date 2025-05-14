import { Route } from "react-router";
import { RootLayout } from "../pages/layouts";
import { HomePage, MenuPage, RestaurantsPage, RestaurantTablesPage } from "../pages/public";

export const publicRoutes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/restaurants">
      <Route index element={<RestaurantsPage />} />
      <Route path=":restaurantID/menu" element={<MenuPage />} />
      <Route path=":restaurantID/tables" element={<RestaurantTablesPage />} />
    </Route>
  </Route>
);
