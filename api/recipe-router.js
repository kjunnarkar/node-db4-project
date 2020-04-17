const express = require('express');
const Recipes = require('../data/recipes-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const results = await Recipes.getRecipes();
        res.status(200).json(results);
    }
    catch (error) {
        next(error);
    }
});

router.get('/shoppingList/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const results = await Recipes.getShoppingList(id);
        res.status(200).json(results);
    }
    catch (error) {
        next (error);
    }
})

router.get('/instructions/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const results = await Recipes.getInstructions(id);
        res.status(200).json(results);
    }
    catch (error) {
        next (error)
    }
});

module.exports = router;
