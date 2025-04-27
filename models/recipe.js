const mongoose =require('mongoose');
const recipeSchema =new mongoose.Schema({
    name:String,
    chef:String,
    ingredients:string,
    prepTime:Number
    rating:Number,
});
module.export =mongoose.model('Recipe,' recipeSchema);