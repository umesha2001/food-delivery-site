import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        });
        console.log("✅ DB Connected Successfully");
    } catch (error) {
        console.log("❌ DB Connection Failed:", error.message);
    }
}