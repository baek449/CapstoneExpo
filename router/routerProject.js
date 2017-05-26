module.exports = function(app)
{
	// 프로젝트에 관한 라우터
	app.get('/project/new',function(req,res){
		// TODO 새로운 프로젝트를 생성합니다.
	});
	app.get('/project/summary/:id',function(req,res){
		// TODO 프로젝트의 요약 정보를 가져옵니다.
	});
	app.get('/project/get/:id',function(req,res){
		// TODO 프로젝트의 상세 정보를 가져옵니다.
	});
};