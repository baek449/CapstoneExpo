module.exports = function(app,Model)
{
	const Post=Model.Post;
	const PostController=require('../controller/postController')(Model);
	const EvaluationController=require('../controller/evaluationController')(Model);
	const LikeController=require('../controller/likeController')(Model);
	
	// 게시글에 관한 라우터
	app.get('/post/:id',function(req,res){
		// 해당 id의 게시글을 가져옵니다.
		PostController.read(req.params.id,function(x){
			// x.result에는 하나의 게시글이 있습니다. 이는 응답으로 넘어가기 전에 Mongoose 객체에서 일반 객체로 바뀌어야 합니다.
			if(x.result)
				x.result=x.result.toObject();
			res.send(x);
		});
	});
	app.post('/post/new',function(req,res){
		// 작성한 새로운 게시글을 올립니다.
		// TODO 여기서 req.query에 대한 변수 체크를 해야 합니다. 이 부분은 실제 시스템으로 가동하기 전에 반드시 작업해야 합니다.
		
		PostController.create(req.body,function(x){
			// x.result에는 새로운 게시글의 id값이 들어 있습니다.
			res.send(x);
		});
	});
	app.post('/post/update/:id',function(req,res){
		// 변경한 게시글을 올립니다.
		// TODO 여기서 req.query에 대한 변수 체크를 해야 합니다. 이 부분은 실제 시스템으로 가동하기 전에 반드시 작업해야 합니다.
		PostController.update(req.params.id,req.body,function(x){
			// x.result 값은 존재하지 않습니다. 오류가 있을 때에만 오류코드가 넘어갑니다.
			res.send(x);
		});
	});
	app.get('/timeline/:projectId',function(req,res){
		console.log(req.params.projectId);
		// 해당 프로젝트에서 작성된, 타임라인에 표시할 모든 게시글을 가져옵니다.
		PostController.readAll(req.params.projectId,function(x){
			// x.result에는 여러 게시글이 있습니다. 이는 응답으로 넘어가기 전에 Mongoose 객체에서 일반 객체로 바뀌어야 합니다.
			console.log(x);
			if(x.result)
				for(i in x.result)
					x.result[i]=x.result[i].toObject();
			res.send(x);
		});
	});
	app.post('/post/like/:id',function(req,res){
		// 해당 글에 대해 좋아요 설정을 토글합니다.
		// TODO 여기서 req.query에 대한 변수 체크를 해야 합니다. 이 부분은 실제 시스템으로 가동하기 전에 반드시 작업해야 합니다.
		console.log(123123);
		console.log(req.body.userId);
		console.log(req.params.id);
		// TODO 미완료
		LikeController.find(req.body.userId,req.params.id,true,function(x){
			if(x.result==1) // already liked
				LikeController.unlike(req.body.userId,req.params.id,true,function(){
					PostController.unlike(req.params.id,function(x){res.send({result:-1});});
				});
			else LikeController.like(req.body.userId,req.params.id,true,function(){
				PostController.like(req.params.id,function(x){res.send({result:1});});
			});
		});
	});
	app.post('/post/reply/:id',function(req,res){
		// 해당 글에 대해 새로 댓글을 올립니다.
		// TODO 여기서 req.query에 대한 변수 체크를 해야 합니다. 이 부분은 실제 시스템으로 가동하기 전에 반드시 작업해야 합니다.
		
		// TODO 미완료
		PostController.create(req.body,function(x){
			// x.result에는 새로운 댓글의 id값이 들어 있습니다.
			res.send(x);
		});
	});
	app.post('eval/upload',function(req,res){
		// 평가를 올리거나 갱신합니다.
		// postID, fromMember, toMember는 필수입니다.
		var key={postID:	req.body.postID,
				fromMember:	req.body.fromMember,
				toMember:	req.body.toMember};
		var val={eval:	req.body.eval,
				message: req.body.message};
		
		EvaluationController.save(key,val,function(x){
			// x.result에는 새로운 댓글의 id값이 들어 있습니다.
			res.send(x);
		});
	});
	app.post('eval/download',function(req,res){
		// 평가 목록을 가져옵니다.
		// postID, fromMember는 필수입니다.
		var key={postID:	req.body.postID,
				fromMember:	req.body.fromMember};
		
		EvaluationController.get(key,function(x){
			// x.result에는 여러 댓글이 있습니다. 이는 응답으로 넘어가기 전에 Mongoose 객체에서 일반 객체로 바뀌어야 합니다.
			if(x.result)
				for(i in x.result)
					x.result[i]=x.result[i].toObject();
			res.send(x);
		});
	});
};