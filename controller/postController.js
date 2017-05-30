
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
		readAll:function(projectId,callback){
			Model.Post.find({projectId:Model.id(projectId)},function(err,data){
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
		//[Should] like: 게시글의 좋아요를 증가시킵니다.
		like:function(id,callback){
			Model.Post.findByIdAndUpdate(id, {$inc:{like:1}}, {upsert:false}, function(err, data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({});
		    });
		}
		//[Should] unlike: 게시글의 좋아요를 감소시킵니다.
		unlike:function(id,callback){
			Model.Post.findByIdAndUpdate(id, {$inc:{like:-1}}, {upsert:false}, function(err, data){
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