import mongoose from "mongoose";

export const connectDB =() => {
mongoose.connect(process.env.MONGO_URI, {
    dbName:"MERN-AUTH",    
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.log("MongoDB connection failed", error.message);
    process.exit(1); // Exit process with failure
})}