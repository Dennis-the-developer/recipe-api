import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe_controller.js";
import {localUpload, remoteUpdload} from "../middlewares/uploads.js";

// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', remoteUpdload.single('image'), postRecipes);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe)

recipeRouter.get('/recipes/:id', getRecipe)
// Export router
export default recipeRouter;