var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var likeSchema = new Schema({
	type:			String, // Post / Project
	memberId:		{ type: Schema.Types.ObjectId, ref: 'Member' },
	postId:			{ type: Schema.Types.ObjectId, ref: 'Post' },
	projectId:		{ type: Schema.Types.ObjectId, ref: 'Project' }
});

module.exports = mongoose.model('Like', likeSchema);
