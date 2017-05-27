var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evaluationSchema = new Schema({
	  
	  postID:		{ type: Schema.Types.ObjectId, ref: 'Post' },
	  fromMember:	{ type: Schema.Types.ObjectId, ref: 'Member' },
	  toMember:		{ type: Schema.Types.ObjectId, ref: 'Member' },
	  eval:			String,
	  message:		String,
	  writeTime:	{ type: Date, default: Date.now }
});

module.exports = mongoose.model('Evaluation', evaluationSchema);
