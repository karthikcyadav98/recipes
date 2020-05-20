const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRecipesInput(data) {
	let errors = {};

	data.frecipename = !isEmpty(data.frecipename) ? data.frecipename : '';
	data.frecipecode = !isEmpty(data.frecipecode) ? data.frecipecode : '';
	data.imageUrl = !isEmpty(data.imageUrl) ? data.imageUrl : '';
	data.category = !isEmpty(data.category) ? data.category : '';
	data.fingredients = !isEmpty(data.fingredients) ? data.fingredients : '';
	data.fpreparation = !isEmpty(data.fpreparation) ? data.fpreparation : '';

	if (Validator.isEmpty(data.frecipename)) {
		errors.frecipename = 'This field is required';
	}

	if (Validator.isEmpty(data.frecipecode)) {
		errors.frecipecode = 'This field is required';
	}

	if (Validator.isEmpty(data.imageUrl)) {
		errors.imageUrl = 'This field is required';
	}

	if (Validator.isEmpty(data.category)) {
		errors.category = 'This field is required';
	}

	if (Validator.isEmpty(data.fingredients)) {
		errors.fingredients = 'This field is required';
	}

	if (Validator.isEmpty(data.fpreparation)) {
		errors.fpreparation = 'This field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
