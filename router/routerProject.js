module.exports = function(app,Model)
{
	const ProjectController=require('../controller/projectController')(Model);
	// 프로젝트에 관한 라우터
	app.post('/project/new',function(req,res){
		// TODO 새로운 프로젝트를 생성합니다.
		// TODO 여기서 req.query에 대한 변수 체크를 해야 합니다. 이 부분은 실제 시스템으로 가동하기 전에 반드시 작업해야 합니다.
		ProjectController.create(req.body,function(x){
			// x.result에는 새로운 게시글의 id값이 들어 있습니다.
			res.send(x);
		});
	});
	app.get('/project/all/new',function(req,res){
		// 모든 프로젝트의 요약 정보를 최신순으로 가져옵니다.
		ProjectController.getAll("new",function(x){
			// x.result에는 populate되지 않은 프로젝트 목록이 있습니다. 이는 응답으로 넘어가기 전에 요약 정보만을 추출해야 합니다.
			if(x.result){
				for(i in x.result){
					x.result[i]=x.result[i].toObject();
					x.result[i].projectSummary._id=x.result[i]._id;
					x.result[i]=x.result[i].projectSummary;
				}
			}
			res.send(x);
		});
	});
	app.get('/project/all/view',function(req,res){
		console.log('view');
		// 모든 프로젝트의 요약 정보를 view순으로 가져옵니다.
		ProjectController.getAll("view",function(x){
			// x.result에는 populate되지 않은 프로젝트 목록이 있습니다. 이는 응답으로 넘어가기 전에 요약 정보만을 추출해야 합니다.
			console.log(x);
			if(x.result){
				for(i in x.result){
					x.result[i]=x.result[i].toObject();
					x.result[i].projectSummary._id=x.result[i]._id;
					x.result[i]=x.result[i].projectSummary;
				}
			}
			res.send(x);
		});
	});
	app.get('/project/summary/:id',function(req,res){
		// 프로젝트의 요약 정보를 가져옵니다.
		ProjectController.get(req.params.id,false,function(x){
			// x.result에는 populate되지 않은 하나의 프로젝트가 있습니다. 이는 응답으로 넘어가기 전에 요약 정보만을 추출해야 합니다.
			if(x.result)
				x.result=x.result.toObject().projectSummary;
			res.send(x);
		});
	});
	app.get('/project/get/:id',function(req,res){
		// 프로젝트의 상세 정보를 가져옵니다.
		ProjectController.get(req.params.id,true,function(x){
			// x.result에는 populate된 하나의 프로젝트가 있습니다. 이는 응답으로 넘어가기 전에 일반 객체로 바뀌어야 합니다.
			if(x.result)
				x.result=x.result.toObject();
			res.send(x);
		});
	});
	app.get('/project/member/:id',function(req,res){
		// 프로젝트의 학생 멤버 정보를 가져옵니다.
		ProjectController.get(req.params.id,true,function(x){
			// x.result에는 populate된 하나의 프로젝트가 있습니다. 이는 응답으로 넘어가기 전에 일반 객체로 바뀌어야 합니다.
			if(x.result)
				x.result=x.result.toObject().members.student;
			res.send(x);
		});
	});
};