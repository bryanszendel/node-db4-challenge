const express = require('express');
const helmet = require('helmet');

const Recipes = require('./recipes/recipes-model')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/recipes', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the recipes.' })
    })
})

server.get('/recipes/:id/shopping', (req, res) => {
  const { id } = req.params
  Recipes.getShoppingList(id)
    .then(shopping => {
      res.status(200).json(shopping)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the shopping list.' })
    })
})

server.get('/recipes/:id/instructions', (req, res) => {
  const { id } = req.params
  Recipes.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the shopping list.' })
    })
})

module.exports = server;