var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
	name:	String
});

module.exports = mongoose.model('School', schoolSchema);