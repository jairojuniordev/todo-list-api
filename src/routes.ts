import { Router } from "express";

import createUserController from "controllers/createUserController";

const routes = Router();

routes.post("/user/create", createUserController.handle);

export { routes };
