import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/students');
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log("Failed to connect",error);
        process.exit(1)
    }
}

export default connectToDb;