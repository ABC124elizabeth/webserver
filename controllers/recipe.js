const express = require('evpress');
const Recipe = require('../models/recipe');

const router = express.Router();

//Get all recipes
router.get('/' async (req, res)=>{
    const recipes=await Recipe.find({});
    res.json(recipes);
});

//Add new recipe
router.post('/' async (req, res)=>{
    const body = req.body;

    const recipe = new Recipe({
        name: body.name,
        chef: body.chef,
        ingredients:body.ingredients,
        rating: body.rating,
    });
const savedRecipe =await recipe.save();
res.status(201).json(savedRecipe);
});
module.exports = router;