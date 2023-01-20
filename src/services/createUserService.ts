import bcrypt from "bcryptjs";

import UserSchema, { IUserData } from "database/models/UserSchema";

class CreateUserService {
  async execute({ name, email, password }: IUserData) {
    if (!name || !email || !password) {
      return { error: true, message: "Please fill in all fields" };
    }

    const existsUser = await UserSchema.findOne({ email });

    if (existsUser) {
      return { error: true, message: "User already exists" };
    }

    const hashPassword = await bcrypt.hash(String(password), 8);

    const user = await UserSchema.create({
      name,
      email,
      password: hashPassword,
    });

    user.password = undefined;

    return { user };
  }
}

export default new CreateUserService();
