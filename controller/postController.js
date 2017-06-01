
var PostController=function(Model){
	return {
		//[Must] create: 새로운 게시글을 추가합니다.
		create:function(data,callback){
			data.projectId=Model.id(data.projectId);
			console.log(data);
			var v=new Model.Post(data);
			console.log(v);
			v.save(function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result:data});
		    });
		},
		//[Must] read: 게시글 ID에 대한 게시글을 불러옵니다.
		read:function(id,callback){
			Model.Post.findOne({_id:id}, function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data});
		    });
		},
		//[Must] readAll: 프로젝트 ID에 대한 모든 게시글을 불러옵니다.
		readAll:function(projectId,mid,callback){
			Model.Post.find({projectId:Model.id(projectId), type:{$ne:"reply"}})
			.populate({
			    path: 'like',
			    match: { _id: mid }
			})
			.populate("reply")
			.exec(function(err,data){
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
			Model.Post.findByIdAndUpdate(id, {$set:newPost}, {upsert:false}, function(err, data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({});
		    });
		},
		//[Should] postLike: 게시글의 좋아요 목록에 자신을 추가합니다.
		postLike:function(id,mid,callback){
			Model.Post.findByIdAndUpdate(id, {$addToSet:{like:mid}}, {upsert:false}, function(err, data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({});
		    });
		},
		//[Should] postUnlike: 게시글의 좋아요 목록에서 자신을 제거합니다.
		postUnlike:function(id,mid,callback){
			Model.Post.findByIdAndUpdate(id, {$pull:{like:mid}}, {upsert:false}, function(err, data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({});
		    });
		},
		reply:function(childPost,parentPost,callback){
			Model.Post.findByIdAndUpdate(parentPost, {$pull:{reply:childPost}}, {upsert:false}, function(err, data){
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

module.exports=PostController;