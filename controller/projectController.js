
var ProjectController=function(Model){
	return {
		//[Must] getSummary: 프로젝트 Object를 가져옵니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		get:function(id, callback){
			(new Model.Project()).findOne({_id:id},function(err,data){
		        if(err){
		            console.error(err);
		            callback({result: 1});
		            return;
		        }
		        callback(data);
		    });
		},
		//[Must] getSummary: 프로젝트 요약을 보여줍니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		getSummary:function(id, callback){
			get(id,function(result){
				callback(result.projectSummary);			
			});
		},
		//[Must] getDetail: 프로젝트 상세를 보여줍니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		getDetail:function(id, callback){
			get(id,function(result){
				callback(result.projectSummary);			
			});
		},
		//[Must] getMembers: 프로젝트 요약을 보여줍니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		getMembers:function(id, callback){
			(new Model.Project()).findOne({_id:id},function(err,data){
		        if(err){
		            console.error(err);
		            callback({result: 1});
		            return;
		        }
		        callback(data);
		    });
		},
		//[Must] getSummary: 프로젝트 요약을 보여줍니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		getSummary:function(id, callback){
			(new Model.Project()).findOne({_id:id},function(err,data){
		        if(err){
		            console.error(err);
		            callback({result: 1});
		            return;
		        }
		        callback(data);
		    });
		},
		//[Could] newProject: 새로운 프로젝트를 추가합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		newProject:function(callback){
			(new Model.Project()).save(function(err){
		        if(err){
		            console.error(err);
		            callback({result: 1});
		            return;
		        }
		        callback({result: 0});
		    });
		},
		//[Could] updateProject: 프로젝트의 정보를 변경합니다. project는 결과를 인자로 받는 콜백 함수를 부릅니다.
		updateProject:function(project,callback){
			project.save(function(err){
		        if(err){
		            console.error(err);
		            callback({result: 1});
		            return;
		        }
		        callback({result: 0});
		    });
		}
	};
};

module.exports=ProjectController;