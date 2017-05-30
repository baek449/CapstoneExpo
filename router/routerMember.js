module.exports = function(app,Model)
{
	const Member=Model.Member;
	const MemberController=require('../controller/memberController')(Model);
	// 멤버에 관한 라우터
	
	/* 이번에 구현 안 함
	app.get('/member/new',function(req,res){
		// TODO 회원 가입 
	});
	app.get('/member/delete',function(req,res){
		// TODO 탈퇴
	});
	app.get('/member/summary/:id',function(req,res){
		// TODO 멤버의 요약 정보를 가져옵니다.
	});
	app.get('/member/modify/:id',function(req,res){
		// TODO 멤버의 정보를 변경합니다.
	});
	*/
	app.get('/member/get/:id',function(req,res){
		// TODO 멤버의 상세 정보를 가져옵니다.
		MemberController.get(req.params.id,function(x){
			console.log(x);
			// x.result에는 하나의 멤버 정보가 있습니다. 이는 응답으로 넘어가기 전에 Mongoose 객체에서 일반 객체로 바뀌어야 합니다.
			if(x.result)
				x.result=x.result.toObject();
			res.send(x);
		});
	});
};