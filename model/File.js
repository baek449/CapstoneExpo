var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
	_id:		String,
	name:		String,
	extension:	String,
	writeTime:	{ type: Date, default: Date.now }
});

module.exports = mongoose.model('File', fileSchema);