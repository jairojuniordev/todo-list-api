import { Request, Response } from "express";

import createUserService from "services/createUserService";

import { IUserData } from "database/models/UserSchema";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const userData = request.body as IUserData;

    const result = await createUserService.execute(userData);

    if (result.error) {
      response.status(400).json({ message: result.message });
      return;
    }

    return response.json({ user: result.user });
  }
}

export default new CreateUserController();
