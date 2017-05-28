
var PostController=function(Model){
	return {
		//[Must] create: 새로운 게시글을 추가합니다.
		create:function(data,callback){
			(new Model.Post(data)).save(function(err,data){
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

module.exports=PostController;