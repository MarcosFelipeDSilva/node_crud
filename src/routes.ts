import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { Router } from "express";
import { DeleteCategoryController } from './controllers/DeleteCategoryController';

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)

export {routes}