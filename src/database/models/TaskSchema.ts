import { Schema, model } from "mongoose";

export interface ITaksData {
  title: string;
  completed: boolean;
  author: Schema.Types.ObjectId;
}

const TaskSchema = new Schema<ITaksData>({
  title: String,
  completed: Boolean,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model<ITaksData>("User", TaskSchema);
