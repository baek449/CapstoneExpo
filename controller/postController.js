
var PostController=function(Model){
	return {
		//[Must] create: 새로운 게시글을 추가합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		create:function(callback){
			(new Model.Post()).save(function(err){
		        if(err){
		            console.error(err);
		            callback({result: 0});
		            return;
		        }
		        callback({result: 1});
		    });
		},
		//[Must] read: 게시글 ID에 대한 게시글을 불러옵니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		read:function(id,callback){
			Model.Post.findOne({_id:id}, function(err){
		        if(err){
		            console.error(err);
		            callback({result: 0});
		            return;
		        }
		        callback({result: 1});
		    });
		},
		//[Must] readAll: 프로젝트 ID에 대한 모든 게시글을 불러옵니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		readAll:function(projectId,callback){
			Model.Post.find({projectId:projectId},function(err){
		        if(err){
		            console.error(err);
		            callback({result: 0});
		            return;
		        }
		        callback({result: 1});
		    });
		},
		//[Should] update: 게시글의 정보를 변경합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		update:function(project,callback){
			project.save(function(err){
		        if(err){
		            console.error(err);
		            callback({result: 0});
		            return;
		        }
		        callback({result: 1});
		    });
		}
	};
};

module.exports=PostController;