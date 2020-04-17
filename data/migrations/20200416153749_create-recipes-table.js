
exports.up = function(knex) {
  return (
      knex.schema
      .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('Recipe', 255).notNullable();
            tbl.string('Instructions', 255).notNullable();
      })
      .createTable('ingredient_type', tbl => {
            tbl.increments();
            tbl.string('Ingredient', 255).notNullable().unique();
      })
      .createTable('quantity_type', tbl => {
            tbl.increments();
            tbl.string('Qty_Type', 255).notNullable().unique();
      })
      .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('Recipe_Name')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('Ingredient')
            .unsigned()
            .notNullable()
            .references('ingredient_type.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.float('Quantity').notNullable()
        tbl.integer('Qty_Type')
            .unsigned()
            .notNullable()
            .references('quantity_type.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
      })
  )
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('quantity_type')
    .dropTableIfExists('ingredient_type')
    .dropTableIfExists('recipes')
};
