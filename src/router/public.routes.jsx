import { Route } from "react-router";
import { RootLayout } from "../pages/layouts";

export const publicRoutes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<h1>home</h1>} />
  </Route>
);