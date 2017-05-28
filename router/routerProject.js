module.exports = function(app,Model)
{
	const ProjectController=require('../controller/projectController');
	// 프로젝트에 관한 라우터
	app.get('/project/new',function(req,res){
		// TODO 새로운 프로젝트를 생성합니다.
	});
	app.get('/project/all',function(req,res){
		// 모든 프로젝트의 요약 정보를 가져옵니다.
		ProjectController.getAll(function(x){
			// x.result에는 populate되지 않은 프로젝트 목록이 있습니다. 이는 응답으로 넘어가기 전에 요약 정보만을 추출해야 합니다.
			if(x.result)
				for(i in x.result)
					x.result[i]=x.result[i].toObject().projectSummary;
			res.send(x);
		});
	});
	app.get('/project/summary/:id',function(req,res){
		// 프로젝트의 요약 정보를 가져옵니다.
		ProjectController.get(req.param.id,false,function(x){
			// x.result에는 populate되지 않은 하나의 프로젝트가 있습니다. 이는 응답으로 넘어가기 전에 요약 정보만을 추출해야 합니다.
			if(x.result)
				x.result=x.result.toObject().projectSummary;
			res.send(x);
		});
	});
	app.get('/project/get/:id',function(req,res){
		// 프로젝트의 상세 정보를 가져옵니다.
		ProjectController.get(req.param.id,true,function(x){
			// x.result에는 populate된 하나의 프로젝트가 있습니다. 이는 응답으로 넘어가기 전에 일반 객체로 바뀌어야 합니다.
			if(x.result)
				x.result=x.result.toObject();
			res.send(x);
		});
	});
	app.get('/project/member/:id',function(req,res){
		// 프로젝트의 학생 멤버 정보를 가져옵니다.
		ProjectController.get(req.param.id,true,function(x){
			// x.result에는 populate된 하나의 프로젝트가 있습니다. 이는 응답으로 넘어가기 전에 일반 객체로 바뀌어야 합니다.
			if(x.result)
				x.result=x.result.toObject().members.student;
			res.send(x);
		});
	});
};