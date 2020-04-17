
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { Recipe_Name: 1, Ingredient: 1, Quantity: 1, Qty_Type: 4 },
    { Recipe_Name: 1, Ingredient: 3, Quantity: 0.5, Qty_Type: 3 },
    { Recipe_Name: 1, Ingredient: 6, Quantity: 0.125, Qty_Type: 3 },
    { Recipe_Name: 1, Ingredient: 7, Quantity: 0.125, Qty_Type: 3 },
    { Recipe_Name: 2, Ingredient: 2, Quantity: 1, Qty_Type: 4 },
    { Recipe_Name: 2, Ingredient: 4, Quantity: 1, Qty_Type: 5 },
    { Recipe_Name: 2, Ingredient: 5, Quantity: 0.25, Qty_Type: 1 },
  ]);
};
