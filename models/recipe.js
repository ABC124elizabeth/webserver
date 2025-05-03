const mongoose =require('mongoose');
const recipeSchema = mongoose.Schema({
    name:String,
    chef:String,
    ingredients:string,
    prepTime:Number
    rating:Number,
});
recipeSchema.set('toJSON',{
    transform:(document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v}
})
module.exports =mongoose.model('Recipe,' recipeSchema);