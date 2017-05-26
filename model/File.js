var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
	name:		Stinrg,
	extension:	String
});

module.exports = mongoose.model('File', fileSchema);