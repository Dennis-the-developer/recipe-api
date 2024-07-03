import { RecipeModel } from "../models/recipe.js";


//  Get all recipes
export const getRecipes = async (req, res, next) => {
    try {
        // Get query params
        const { limit, skip, filter } = req.query;
        // Get all recipes from database
        const allRecipes = await RecipeModel
            .find(JSON.parse(filter))
            .limit(JSON.parse(limit))
            .skip(skip);
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
}


// Post Recipe
export const postRecipes = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        });
        // return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
}

// Patch Recipe
export const patchRecipe = async (req, res, next) => {
    try {
        // Update recipe by id
        const updateRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body)
        //    Return response
        res.json(updateRecipe);
    }catch (error) {
        next(error)
    }
}

    // Delete Recipe
    export const deleteRecipe = async (req, res, next) => {
        try {
            // Delete recipe by id
            const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
            // Return response
            res.json(deletedRecipe);
        } catch (error) {
            next(error);
        }
    }

    // Get Recipe
    export const getRecipe = (req, res) => {
        res.json(`Recipe with id ${req.params.id} displayed successfully`);
    }
