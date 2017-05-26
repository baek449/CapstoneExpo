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
	  prevProject:	ObjectID,
	  image:		String,
	  like:			Number,
	  view:			Number
  },
  affiliation:{
	  school:		ObjectID,
	  course:		ObjectID,
	  semester:		String
  },
  members:{
	  professor:	[mongoose.model('Member').schema],
	  assistant:	[mongoose.model('Member').schema],
	  student:		[mongoose.model('Member').schema],
	  company:		[mongoose.model('Member').schema],
	  leader:		mongoose.model('Member').schema
  }
});

module.exports = mongoose.model('Project', projectSchema);