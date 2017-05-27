
var EvaluationController=function(Model){
	return {
		//[Must] save: 새로운 평가를 추가하거나 이미 있으면 갱신합니다.
		// data는 postID, fromMember, toMember를 가지고 있어야 합니다.
		save:function(data,newEval,callback){
			Model.Evaluation.findOneAndUpdate(data, newEval, {upsert:true}, function(err, data){
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
		//[Must] readAll: 프로젝트 ID에 대한 모든 게시글을 불러옵니다.
		readAll:function(projectId,callback){
			Model.Post.find({projectId:projectId},function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data});
		    });
		},
		//[Should] update: 게시글의 정보를 변경합니다.
		update:function(id,newPost,callback){
			Model.Post.findOneAndUpdate({_id:id}, newPost, {upsert:false}, function(err, data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({});
		    });
		}
	};
};

module.exports=EvaluationController;