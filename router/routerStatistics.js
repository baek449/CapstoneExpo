module.exports = function(app,Model)
{
	const EvaluationController=require('../controller/evaluationController')(Model);
	// 통계에 관한 라우터
	app.get('/stat/evallist/:id',function(req,res){
		// TODO 멤버가 받은 평가 토큰별 개수를 가져옵니다.
		console.log("ID");
		console.log(req.params.id);
		EvaluationController.evalList(req.params.id,function(x){
			console.log(x);
			res.send(x);
		});
	});
	app.get('/stat/evalcount/:id',function(req,res){
		// TODO 멤버가 수행한 평가 개수를 가져옵니다.
		EvaluationController.evalCount(req.params.id,function(x){
			res.send(x);
		});
	});
	app.get('/stat/attendance/:id',function(req,res){
		// TODO 멤버의 출석률을 가져옵니다.
		EvaluationController.attendance(req.params.id,function(x){
			res.send(x);
		});
	});
	app.get('/stat/replycount/:id',function(req,res){
		// TODO 멤버의 댓글 개수를 가져옵니다.
		EvaluationController.replyCount(req.params.id,function(x){
			res.send(x);
		});
	});
	app.get('/stat/postcount/:id',function(req,res){
		// TODO 멤버의 게시글 개수를 가져옵니다.
		EvaluationController.postCount(req.params.id,function(x){
			res.send(x);
		});
	});
};