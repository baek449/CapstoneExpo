
var ProjectController=function(Model){
	return {
		//[Must] getAll: 모든 프로젝트 Object를 가져옵니다.
		getAll:function(option,callback){
			var sortCondition={};
			if(option==="new") sortCondition={"projectSummary.startDate":-1};
			else if(option==="view") sortCondition={"projectSummary.view":-1};
			
			Model.Project.find({}).sort(sortCondition).exec(function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result:data});
		    });
		},
		//[Must] get: 프로젝트 Object를 가져옵니다.
		get:function(id, isMemberPopulated, callback){
			if(isMemberPopulated){
				Model.Project.findOne({_id:id})
				.populate('members.professor members.assistant members.student members.company members.leader')
				.exec(function(err,data){
			        if(err){
			            console.error(err);
			            callback({error: 1});
			            return;
			        }
			        callback({result:data});
			    });
			}else{
				Model.Project.findOne({_id:id},function(err,data){
			        if(err){
			            console.error(err);
			            callback({error: 1});
			            return;
			        }
			        callback({result:data});
			    });
			}
		},
		//[Could] create: 새로운 프로젝트를 추가합니다.
		create:function(data,callback){
			(new Model.Project(data)).save(function(err,data){
		        if(err){
		            console.error(err);
		            callback({error: 1});
		            return;
		        }
		        callback({result:data});
		    });
		},
		//[Could] update: 프로젝트의 정보를 변경합니다.
		update:function(id,newProject,callback){
			Model.Project.findOneAndUpdate({_id:id}, newProject, {upsert:false}, function(err, data){
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

module.exports=ProjectController;