
exports.seed = function(knex, Promise) {
  return knex('ingredient_type').insert([
    { Ingredient: 'Tortilla' },
    { Ingredient: 'Hamburger Buns' },
    { Ingredient: 'Chedder Cheese' },
    { Ingredient: 'American Cheese' },
    { Ingredient: 'Ground beef' },
    { Ingredient: 'Guacamole' },
    { Ingredient: 'Salsa' }
  ]);
};
