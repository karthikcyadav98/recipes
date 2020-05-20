const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Scehma
const RecipeSchema = new Schema({
	frecipename: {
		type: String,
		required: true
	},
	frecipecode: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	fingredients: {
		type: String,
		required: true
	},
	fpreparation: {
		type: String,
		required: true
	}
});

module.exports = Recipe = mongoose.model('recipes', RecipeSchema);
