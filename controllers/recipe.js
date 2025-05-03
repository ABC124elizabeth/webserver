const express = require('evpress');
const Recipe = require('../models/recipe');

recipesRouter.get('/'(request, response) =>{
    Recipe.find({}).then(recipes =>{
        response.json(recipes)
    })
})
recipesRouter.post('/', request, response) =>{
    recipe.save()
    .then(result =>{
        response.status(201).json(result)
    })
})
module.exports =recipesRouter;