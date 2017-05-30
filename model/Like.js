var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var likeSchema = new Schema({
	_id:			String,
	giveNtake_post:		{ type: Schema.Types.ObjectId, ref: 'Post' },{ type: Schema.Types.ObjectId, ref: 'Member' },
	giveNtake_project:  { type: Schema.Types.ObjectId, ref: 'Project' },{ type: Schema.Types.ObjectId, ref: 'Member' }
});

module.exports = mongoose.model('Like', likeSchema);
