
var LikeController=function(Model){
	var queryMaker=function(memberId,pId,isPost){
		var query={memberId:memberId, type:'Post'};
		if(isPost) query.postId=pId;
		else{
			query.projectId=pId;
			query.type='Project';
		}
		return query;
	};
	return {
		//[Must] find: 좋아요가 되어 있는지 확인합니다. 1이면 좋아요가 되어 있는 것입니다.
		find:function(memberId,pId,isPost,callback){
			var query=queryMaker(memberId,pId,isPost);
			Model.Like.findOne(query, function(err, data){
		        if(err){
		            console.error(err);
		            callback({result:0});
		            return;
		        }
		        else if(!data){
		        	callback({result:0});
		        	return;
		        }
		        callback({result:1});
		    });
		},
		//[Must] get: 작성자와 게시글 ID에 대한 평가의 목록을 불러옵니다.
		like:function(memberId,pId,isPost,callback){
			var query=queryMaker(memberId,pId,isPost);
			Model.Like.findOneAndUpdate(query,query,{upsert: true}, function(err, data){
			    callback();
			});
		},
		//[Must] get: 작성자와 게시글 ID에 대한 평가의 목록을 불러옵니다.
		unlike:function(memberId,pId,isPost,callback){
			var query=queryMaker(memberId,pId,isPost);
			Model.Like.findOneAndRemove(query,function(err, data){
			    console.log(err, numberAffected, raw)
			    callback();
			});
		}
	};
};

module.exports=LikeController;