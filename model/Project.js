var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  projectSummary:{
	  name:			String,
	  shortIntro:	String,
	  status:		String,
	  startDate:	Date,
	  endDate:		Date,
	  field:		[String],
	  keyword:		[String],
	  prevProject:	Schema.Types.ObjectID,
	  image:		Schema.Types.ObjectId,
	  like:			Number,
	  view:			Number
  },
  affiliation:{
	  school:		Schema.Types.ObjectID,
	  course:		Schema.Types.ObjectID,
	  semester:		String
  },
  members:{
	  assistant:	[Schema.Types.ObjectId],
	  student:		[Schema.Types.ObjectId],
	  company:		[Schema.Types.ObjectId],
	  leader:		Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('Project', projectSchema);