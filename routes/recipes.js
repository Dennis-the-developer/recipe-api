import { Router } from "express";

// Create router
const reciperRouter = Router();

// Define routes
reciperRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

reciperRouter.post('/recipes', (req, res) => {
    res.json('Recipe added successfully');
});

reciperRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with ${req.params.id} updated`);
});

reciperRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} deleted`);
})

// Export router
export default reciperRouter;