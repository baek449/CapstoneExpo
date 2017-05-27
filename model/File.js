var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
	name:		String,
	extension:	String
});

module.exports = mongoose.model('File', fileSchema);