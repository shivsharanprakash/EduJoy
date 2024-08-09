import mongoose from "mongoose";
const MongoUrl = 'mongodb://localhost:27017/EduJoy';

export const connectToMongoDb = async () => {
    try {
        await mongoose.connect(MongoUrl, {
          
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.log('Failed to coonect to Mongodb ');
    }
};