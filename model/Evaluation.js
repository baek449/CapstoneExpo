var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evaluationSchema = new Schema({
	  
	  postID:		Schema.Types.ObjectId,
	  fromMember:	{ type: Schema.Types.ObjectId, ref: 'Member' },
	  toMember:		{ type: Schema.Types.ObjectId, ref: 'Member' },
	  eval:			String,
	  message:		String,
	  writeTime:	Date

});

module.exports = mongoose.model('Evaluation', evaluationSchema);
