const LambRecipe = require("../models/lambRecipe");

const getAllRecipes = async (req, res) => {
    try {
        const {id} = req.params;
        const allCountrysRecipes = await LambRecipe.find({country_id: id})
        return res.status(200).send(allCountrysRecipes)

    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

const createRecipe = async (req, res) => {
    try {
        const {id} = req.params
        const countryId = await LambRecipe.find({country_id: id})
        if(countryId) {
            const recipe = await new LambRecipe(req.body);
            await recipe.save();
            return res.status(201).send(recipe)
        }
        
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

const getRecipeById = async (req, res) => {
    try {
        const {id} = req.params
        const recipeId = await LambRecipe(id)
        if(recipeId) {
            return res.status(200).send(recipeId)
        }
        return res.status(404).send(`Recipe with id ${id} does not exist`)
        
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

const updateRecipe = async (req, res) => {
    try {
        const {id} = req.params
        await LambRecipe.findByIdAndUpdate(
            id, req.body, {new: true},
            (err, recipe) => {
                if(err) {
                    res.status(500).send(err)
                }
                if(!recipe) {
                    res.status(404).send(`Recipe with id ${id} not found`)
                }
                return res.status(200).json(recipe)
            }
            )
            
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
    
const deleteRecipe = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await LambRecipe.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send(`Recipe with id ${id} has been deleted`)
        }
        throw new Error(`Recipe with id ${id} not found`)
            
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

module.export = {
    getAllRecipes,
    createRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}