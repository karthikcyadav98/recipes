const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const validateRecipesInput = require('../validation/recipeVal');

const Recipe = require('../models/Recipes');

//get all recipes
router.get('/', (req, res) => {
	Recipe.find()
		.sort({ date: -1 })
		.then((recipes) => res.json(recipes))
		.catch((err) => res.status(404).json({ norecipes: 'no recipes found' }));
});
// router.get('/all', (req, res) => {
// 	const errors = [];

// 	Recipe.find()
// 		.then((recipes) => {
// 			if (!recipes) {
// 				errors.norecipes = 'There are no recipes';
// 				res.stats(400).json(errors);
// 			}
// 			console.log('njhcskjhf', recipes);
// 			// res.json(recipes);
// 		})
// 		.catch((err) => console.log('lkjlkj', err));
// 	// .catch((err) => res.status(404).json(err));
// });

//add a recipe
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

	// Recipe.findOne({ recipe: req.recipe.frecipecode }).then((recipe) => {
	// 	if (recipe) {
	// 		return res.status(400).json({ recipe: 'Recipe already exists' });
	// 	} else {
	// 		const newRecipe = new Recipe({
	// 			frecipename: req.body.frecipename,
	// 			frecipecode: req.body.frecipecode,
	// 			imageUrl: req.body.imageUrl,
	// 			category: req.body.category,
	// 			fingredients: req.body.fingredients,
	// 			fpreparation: req.body.fpreparation
	// 		});

	// 		newRecipe.save().then((recipe) => res.json(recipe)).catch((err) => console.log(err));
	// 	}
	// });
});

module.exports = router;
