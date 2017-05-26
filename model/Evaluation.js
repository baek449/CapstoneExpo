var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evaluationSchema = new Schema({
	  
	  postID:		Schema.Types.ObjectId,
	  fromMember:	Schema.Types.ObjectId,
	  toMember:		Schema.Types.ObjectId,
	  eval:			String,
	  message:		String,
	  writeTime:	Timestamp

});

module.exports = mongoose.model('Project', projectSchema);