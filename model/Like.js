var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var likeSchema = new Schema({
	type:			String, // Post / Project
	memberId:		{ type: Schema.Types.ObjectId, ref: 'Member' },
	post:			{ type: Schema.Types.ObjectId, ref: 'Post' },
	project:		{ type: Schema.Types.ObjectId, ref: 'Project' }
});

module.exports = mongoose.model('Like', likeSchema);
