
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { Recipe: 'Cheese Quesadilla', Instructions: '1) Warm tortillas 2) Put shredded cheese on tortilla and fold 3) Heat until cheese melts 4) Serve with guacamole and salsa' },
    { Recipe: 'Cheese Burger', Instructions: '1) Take 1/4 lb ground beef and flatten 2) Heat on stove or grill for at least 8 minutes high heat 3) Put hamburger on bun and add cheese 4) Serve with desired condiments' }
  ]);
};
