const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};


function getRecipes () {
    return db('recipes');
}


function getShoppingList(Recipe_Name) {
    return db('recipe_ingredients as r')
    .select('r.Ingredient', 'r.Quantity', 'r.Qty_Type')
    .where({ Recipe_Name } )
}


function getInstructions(id) {
    return db('recipes')
    .select('recipes.Instructions')
    .where({ id })
}
