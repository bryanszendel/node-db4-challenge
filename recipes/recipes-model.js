const db = require('../data/db-config')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
    .then(recipes => {
      return recipes;
    })
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients')
    .join('recipes', 'recipe_ingredients.recipe_id', '=', 'recipes.id')
    .join('ingredients', 'recipe_ingredients.ingredient_id', '=', 'ingredients.id')
    .select(
      'recipe_ingredients.ingredient_id', 
      'recipes.name as recipe_name', 
      'ingredients.name as ingredient_name')
    .where({recipe_id: recipe_id})
    .then(shopping => {
      return shopping
    })
}

function getInstructions(recipe_id) {

}