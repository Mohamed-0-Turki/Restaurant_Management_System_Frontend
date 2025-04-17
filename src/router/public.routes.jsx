import { Route } from "react-router";
import { RootLayout } from "../pages/layouts";
import { HomePage } from "../pages/public";

export const publicRoutes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
  </Route>
);