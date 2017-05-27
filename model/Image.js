var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
	name:		String,
	extension:	String
});

module.exports = mongoose.model('Image', imageSchema);
