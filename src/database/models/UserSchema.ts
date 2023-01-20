import { Schema, model } from "mongoose";

export interface IUserData {
  name: string;
  email: string;
  password?: string;
  tasks?: [];
}

const UserSchema = new Schema<IUserData>({
  name: String,
  email: String,
  password: String,
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
      select: false,
    },
  ],
});

export default model<IUserData>("User", UserSchema);
