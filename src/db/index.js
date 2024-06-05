import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
    try {
        const databaseconetion = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connection Done !!! DB HOST: ${databaseconetion.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection faild !!!",error.message);
        process.exit(1)
    }
}

export default connectDB;