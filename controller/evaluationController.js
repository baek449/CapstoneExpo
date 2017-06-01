
var EvaluationController=function(Model){
	return {
		//[Must] save: 새로운 평가를 추가하거나 이미 있으면 갱신합니다.
		// data는 postID, fromMember, toMember를 가지고 있어야 합니다.
		save:function(data,newEval,callback){
			Model.Evaluation.findOneAndUpdate(data, {$set:{eval:newEval}}, {upsert:true}, function(err, data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({});
		    });
		},
		//[Must] get: 작성자와 게시글 ID에 대한 평가의 목록을 불러옵니다.
		get:function(postID,fromMember,callback){
			Model.Post.find({postID:postID,fromMember:fromMember}, function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data});
		    });
		},
		evalList:function(toMember,callback){
			Model.Evaluation.aggregate([{$match:{toMember:Model.id(toMember)}},{
	            $group: {
	                _id: '$eval',  //$region is the column name in collection
	                count: {$sum: 1}
	            }
	        }],function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data});
			});
		},
		evalCount:function(fromMember,callback){
			Model.Evaluation.find({fromMember:fromMember},function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data.length});
			});
		},
		attendance:function(memberId,callback){
			Model.Post.find({type:{$ne:"reply"}}) // 댓글이 아닌 모든 글에 대해서
			.populate("projectId")
			.exec(function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        var attended=0;
		        var total=0;
		        for(p in data){
		        	if(!data[p].projectId.members.student.includes(memberId)) continue;
		        	total++;
		        	if(data[p].attend_member.includes(memberId)) attended++;
		        }
		        callback({result: attended/total});
			});
		},
		replyCount:function(memberId,callback){
			Model.Post.find({writer:memberId,type:"reply"},function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data.length});
			});
		},
		postCount:function(memberId,callback){
			Model.Post.find({writer:memberId,type:{$ne:"reply"}},function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data.length});
			});
		}
	};
};

module.exports=EvaluationController;