import express from "express";
import mongoose from "mongoose";
import reciperRouter from "./routes/recipe.js";

// Connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App
const app = express();

// Apply middleware
app.use(express.json());

// Use routes
app.use(reciperRouter);

// Listen for incomming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});

// KBeiWAP2tWEXFsKt