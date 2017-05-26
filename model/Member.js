var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
	type:		Number,
	email:		String,
	name:		String,
	school:		mongoose.model('School').schema,
	field:		[String],
	image:		String,
	major:		String,
	evaluation:{
		badges:				[{name:String,count:Number}],
		attend_rate:		Number,
		eval_article_middle:[String],
		eval_article_final:	[String]
	}
});

module.exports = mongoose.model('Member', memberSchema);