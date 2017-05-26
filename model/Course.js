var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
	name:	String
});

module.exports = mongoose.model('Course', courseSchema);