import { Router } from "express";

import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { ordersRoutes } from "./orders-routes";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";

const routes = Router();

routes.use("/tables-sessions", tablesSessionsRoutes);
routes.use("/orders", ordersRoutes);
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);

export { routes };