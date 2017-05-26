var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
	name:		Stinrg,
	extension:	String
});

module.exports = mongoose.model('Image', imageSchema);
