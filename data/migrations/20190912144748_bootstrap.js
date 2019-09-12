
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable()
    })
    .createTable('indredients', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique()
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id').unsigned().references('id').inTable('recipes') // foreign id
      tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredients') // foreign id
      tbl.string('ingredient_quantity')
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable()
      tbl.integer('recipe_id').unsigned().references('id').inTable('recipes') // foreign id
      tbl.integer('step_id', 99).notNullable()
      tbl.string('prep_time', 255)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
