const Post=require('../model/Model').Post;
const PostController=require('../controller/postController')(require('../model/Model'));
module.exports = function(app,Model)
{
	// 게시글에 관한 라우터
	app.get('/post/:id',function(req,res){
		// TODO 해당 id의 게시글을 가져옵니다.
	});
	app.post('/post/new',function(req,res){
		// TODO 작성한 새로운 게시글을 올립니다.
		var x=new Post(req.data);
		x.save(function(err){
	        if(err){
	            console.error(err);
	            res.send({result: 1});
	            return;
	        }
	        res.send({result: 0});
		});
	});
	app.post('/post/update/:id',function(req,res){
		// TODO 변경한 게시글을 올립니다.
	});
	app.get('/timeline',function(req,res){ //:projectId
		// TODO 해당 프로젝트에서 작성된, 타임라인에 표시할 모든 게시글을 가져옵니다.
		PostController.readAll(1,function(data){
			var v=data.result;
			if(v==1) res.send({result:1});
			for(k in v) v[k]=v[k].toObject();
			res.send({result:v});
		});
	});
	app.post('/post/reply/:id',function(req,res){
		// TODO 해당 글에 대해 댓글을 올립니다.
	});
	app.post('post/eval/:id',function(req,res){
		// TODO 해당 글에 대해 평가를 올립니다.
	});
};