import { Authenticate } from "../utils/verif-authentication";
import { useRoutes } from "react-router-dom";
import { protectedRoute } from "./protected";
import { publicRoute } from "./public";
import { ErrorRoutes } from "./notFound";

export function AppRoutes() {
  const verifRoutes = Authenticate() ?  publicRoute : protectedRoute;
  return useRoutes([...verifRoutes, ...ErrorRoutes]);
}
