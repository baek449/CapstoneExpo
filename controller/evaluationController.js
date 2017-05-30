
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
		}
	};
};

module.exports=EvaluationController;