import express from "express";
import mongoose from "mongoose";
import reciperRouter from "./routes/recipe.js";

// Connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App
const app = express();

// Apply middleware
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.json('Welcome home');
})
app.post('/login', (req, res) => {
    res.json('Login successful');
})

app.patch('/profile', (req, res) => {
    res.json('Profile picture updated successfully');
})

app.delete('/delete', (req, res) => {
    res.json('Account deleted successfully');
})

// Use routes
app.use(reciperRouter);

// Listen for incomming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});

// KBeiWAP2tWEXFsKt