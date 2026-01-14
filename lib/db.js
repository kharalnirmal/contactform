import mongoose from "mongoose";
const MONGODB_URI = await process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");
let isConnected = false;
async function connectDb() {
  if (isConnected) {
    console.log("Database is Already connected ");
    return;
  }

  try {
    const connect = await mongoose.connect(MONGODB_URI);
    isConnected = connect.connection.readyState === 1;
    console.log(`DB connected success ${connect.connection.host}`);
  } catch (error) {
    console.log("DB connection FAILED");
    throw error;
  }
}
export default connectDb;
