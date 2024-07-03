import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator"
import reciperRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

// Connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply middleware
app.use(express.json());
app.use(express.static('uploads'));
app.use(cors());


// Use routes
app.use(reciperRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

// Listen for incomming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
