import mongoose from "mongoose";
const { MONGO_URI } = process.env;

const connectMongoDB = async () => {
    console.log("Connecting to MongoDB");
    console.log(MONGO_URI);
    try {
        console.log("MongoDB Connected");
        await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
    }
    }

export default connectMongoDB;