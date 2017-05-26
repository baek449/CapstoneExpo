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
	  prevProject:	{ type: Schema.Types.ObjectId, ref: 'Project' },
	  image:		{ type: Schema.Types.ObjectId, ref: 'Image' },
	  like:			Number,
	  view:			Number
  },
  affiliation:{
	  school:		{ type: Schema.Types.ObjectId, ref: 'School' },
	  course:		{ type: Schema.Types.ObjectId, ref: 'Course' },
	  semester:		String
  },
  members:{
	  professor:	[{ type: Schema.Types.ObjectId, ref: 'Member' }],
	  assistant:	[{ type: Schema.Types.ObjectId, ref: 'Member' }],
	  student:		[{ type: Schema.Types.ObjectId, ref: 'Member' }],
	  company:		[{ type: Schema.Types.ObjectId, ref: 'Member' }],
	  leader:		{ type: Schema.Types.ObjectId, ref: 'Member' }
  }
});

module.exports = mongoose.model('Project', projectSchema);