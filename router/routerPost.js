module.exports = function(app,Model)
{
	// 게시글에 관한 라우터
	app.get('/post/:id',function(req,res){
		// TODO 해당 id의 게시글을 가져옵니다.
	});
	app.post('/post/new',function(req,res){
		// TODO 작성한 새로운 게시글을 올립니다.
	});
	app.post('/post/update/:id',function(req,res){
		// TODO 변경한 게시글을 올립니다.
	});
	app.get('/timeline/:projectId',function(req,res){
		// TODO 해당 프로젝트에서 작성된, 타임라인에 표시할 모든 게시글을 가져옵니다.
	});
	app.post('/post/reply/:id',function(req,res){
		// TODO 해당 글에 대해 댓글을 올립니다.
	});
	app.post('post/eval/:id',function(req,res){
		// TODO 해당 글에 대해 평가를 올립니다.
	});
};