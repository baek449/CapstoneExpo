var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  
	  project:		{ type: Schema.Types.ObjectId, ref: 'Project' },
	  title:		String,
	  contents:		String,
	  image:		{ type: String, ref: 'Image' },
	  writer:		{ type: Schema.Types.ObjectId, ref: 'Member' },
	  writeTime:	{ type: Date, default: Date.now },
	  editTime: 	{ type: Date, default: Date.now },
	  type:			String,
	  attend_member:[{ type: Schema.Types.ObjectId, ref: 'Member' }],
	  parent:		{ type: Schema.Types.ObjectId, ref: 'Post' },
	  like:			{ type: Number, default: 0 }
});

module.exports = mongoose.model('Post', postSchema);
