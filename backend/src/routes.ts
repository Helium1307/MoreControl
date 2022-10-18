import { Router } from "express";
import ProductController from "./Controllers/ProductController";

const routes = Router();

// Rotas de Produtos
routes.post("/product", ProductController.create);

routes.get("/products", ProductController.index);

export default routes;
