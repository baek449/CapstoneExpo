
var projectController=function(Model){
	return {
		//newProject: 새로운 프로젝트를 추가합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		newProject:function(callback){
			(new Model.Project()).save(function(err){
		        if(err){
		            console.error(err);
		            callback({result: 0});
		            return;
		        }
		        callback({result: 1});
		    });
		},
		//updateProject: 프로젝트의 정보를 변경합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
		updateProject:function(project,callback){
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

module.exports=projectController;