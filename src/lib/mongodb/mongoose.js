import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MonoDB already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next auth app",
      userNewUrlParser: true,
      userUnifieldTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
