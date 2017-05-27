var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  
	  project:		Schema.Types.ObjectId,
	  title:		String,
	  contents:		String,
	  image:		Schema.Types.ObjectId,
	  writer:		Schema.Types.ObjectId,
	  writeTime:	{ type: Date, default: Date.now },
	  editTime: 	{ type: Date, default: Date.now },
	  type:			String,
	  attend_member:[Schema.Types.ObjectId]
});

module.exports = mongoose.model('Post', postSchema);
