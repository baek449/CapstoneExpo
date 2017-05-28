var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
	_id:		String,
	name:		String,
	extension:	String,
	writeTime:	{ type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
