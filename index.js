import express from "express";
import reciperRouter from "./routes/recipes.js";

// Create Express App
const app = express();

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