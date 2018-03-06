const mongoose = require('mongoose');

// expositores Schema
const expositoresSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	extra:{
		type: String
	},
});

const Expositor = module.exports = mongoose.model('Expositores', expositoresSchema);

// Get expositores
module.exports.getExpositores = (callback, limit) => {
	Expositor.find(callback).limit(limit);

}

// Get Expositor
module.exports.getExpositorById = (id, callback) => {
	Expositor.findById(id, callback);
}

// Add Expositor
module.exports.addExpositor = (expositor, callback) => {
	Expositor.create(expositor, callback);
}

// Update Expositor
module.exports.updateExpositor = (id, expositor, options, callback) => {
	var query = {_id: id};
	var update = {
		title: expositor.title,
		genre: expositor.genre,
		description: expositor.description,
		author: expositor.author,
		publisher: expositor.publisher,
		pages: expositor.pages,
		image_url: expositor.image_url,
		buy_url: expositor.buy_url
	}
	Expositor.findOneAndUpdate(query, update, options, callback);
}

// Delete Expositor
module.exports.removeExpositor = (id, callback) => {
	var query = {_id: id};
	Expositor.remove(query, callback);
}
