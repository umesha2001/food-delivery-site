import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

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