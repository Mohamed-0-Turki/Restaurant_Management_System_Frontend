import { Route } from "react-router";
import { RootLayout } from "../pages/layouts";
import { HomePage, MenuPage, RestaurantsPage, RestaurantTablesPage } from "../pages/public";
import ChatPage from "../pages/ChatPage";

export const publicRoutes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/chat" element={<ChatPage />} />
    <Route path="/restaurants">
      <Route index element={<RestaurantsPage />} />
      <Route path=":restaurantID/menu" element={<MenuPage />} />
      <Route path=":restaurantID/tables" element={<RestaurantTablesPage />} />
    </Route>
  </Route>
);
