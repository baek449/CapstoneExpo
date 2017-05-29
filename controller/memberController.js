
var MemberController=function(Model){
	return {
		//[Must] create: 새로운 게시글을 추가합니다.
		create:function(data,callback){
			(new Model.Member(data)).save(function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result:data});
		    });
		},
		//[Must] get: 멤버 ID에 대한 게시글을 불러옵니다.
		get:function(id,callback){
			Model.Member.findOne({_id:id}, function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result: data});
		    });
		},
	};
};

module.exports=MemberController;