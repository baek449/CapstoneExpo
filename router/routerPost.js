const Post=require('../model/Model').Post;
const PostController=require('../controller/postController')(require('../model/Model'));
module.exports = function(app,Model)
{
	// 게시글에 관한 라우터
	app.get('/post/:id',function(req,res){
		// 해당 id의 게시글을 가져옵니다.
		PostController.read(req.param.id,function(x){
			// x.result에는 하나의 게시글이 있습니다. 이는 응답으로 넘어가기 전에 Mongoose 객체에서 일반 객체로 바뀌어야 합니다.
			if(x.result)
				x.result=x.result.toObject();
			res.send(x);
		});
	});
	app.post('/post/new',function(req,res){
		// 작성한 새로운 게시글을 올립니다.
		// TODO 여기서 req.query에 대한 변수 체크를 해야 합니다. 이 부분은 실제 시스템으로 가동하기 전에 반드시 작업해야 합니다.
		delete req.query['_id']; // 받아온 req.query에 _id가 있으면 제거합니다.
		
		PostController.create(req.query,function(x){
			// x.result에는 새로운 게시글의 id값이 들어 있습니다.
			res.send(x);
		});
	});
	app.post('/post/update/:id',function(req,res){
		// 변경한 게시글을 올립니다.
		// TODO 여기서 req.query에 대한 변수 체크를 해야 합니다. 이 부분은 실제 시스템으로 가동하기 전에 반드시 작업해야 합니다.
		delete req.query['_id']; // 받아온 req.query에 _id가 있으면 제거합니다.
		
		PostController.update(req.param.id,req.query,function(x){
			// x.result 값은 존재하지 않습니다. 오류가 있을 때에만 오류코드가 넘어갑니다.
			res.send(x);
		});
	});
	app.get('/timeline/:projectId',function(req,res){
		// 해당 프로젝트에서 작성된, 타임라인에 표시할 모든 게시글을 가져옵니다.
		PostController.readAll(req.param.projectId,function(x){
			// x.result에는 여러 게시글이 있습니다. 이는 응답으로 넘어가기 전에 Mongoose 객체에서 일반 객체로 바뀌어야 합니다.
			if(x.result)
				for(i in x.result)
					x.result[i]=x.result[i].toObject();
			res.send(x);
		});
	});
	app.post('/post/reply/:id',function(req,res){
		// TODO 해당 글에 대해 댓글을 올립니다.
	});
	app.post('post/eval/:id',function(req,res){
		// TODO 해당 글에 대해 평가를 올립니다.
	});
};