import mongoose from "mongoose";

async function startDatabase() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost/todolist");
    console.log("Database ok");
    return;
  } catch (error) {
    console.log(`Datbase error: ${error}`);
    return;
  }
}

export default startDatabase();
