module.exports = function(app)
{
	// 멤버에 관한 라우터
	
	/* 이번에 구현 안 함
	app.get('/member/new',function(req,res){
		// TODO 회원 가입
	});
	app.get('/member/delete',function(req,res){
		// TODO 탈퇴
	});
	*/
	app.get('/member/summary/:id',function(req,res){
		// TODO 멤버의 요약 정보를 가져옵니다.
	});
	app.get('/member/get/:id',function(req,res){
		// TODO 멤버의 상세 정보를 가져옵니다.
	});
	app.get('/member/modify/:id',function(req,res){
		// TODO 멤버의 정보를 변경합니다.
	});
};