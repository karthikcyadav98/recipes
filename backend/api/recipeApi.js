const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const validateRecipesInput = require('../validation/recipeVal');

const Recipe = require('../models/Recipes');

// @route   GET api/recipes
// @desc   	get all recipes
// @access  public
router.get('/', (req, res) => {
	Recipe.find()
		.sort({ date: -1 })
		.then((recipes) => res.json(recipes))
		.catch((err) => res.status(404).json({ norecipes: 'no recipes found' }));
});

// @route   POST api/recipes/add
// @desc    add a new recipe
// @access  public
router.post('/add', (req, res) => {
	const { errors, isValid } = validateRecipesInput(req.body);

	//Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const newRecipe = new Recipe({
		frecipename: req.body.frecipename,
		frecipecode: req.body.frecipecode,
		imageUrl: req.body.imageUrl,
		category: req.body.category,
		fingredients: req.body.fingredients,
		fpreparation: req.body.fpreparation
	});

	newRecipe.save().then((recipe) => res.json(recipe)).catch((err) => console.log(err));
});

// @route   DELETE api/recipes/:id
// @desc    Delete a recipes
// @access  public
router.delete('/:id', (req, res) => {
	console.log('kjakad', req.params.id);
	Recipe.findOneAndDelete({ _id: req.params.id })
		.then(() => {
			res.json({ success: true });
		})
		.catch((err) => res.status(404).json({ recipenotfound: 'No recipe found' }));
});

module.exports = router;
