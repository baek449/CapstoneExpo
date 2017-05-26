module.exports = function(app)
{
	// 이미지에 관한 라우터
	app.get('/image/:id',function(req,res){
		// TODO 해당 id의 이미지를 가져옵니다.
	});
	app.post('/image/upload',function(req,res){
		// TODO 이미지를 올립니다. 이미지의 파일명을 응답합니다.
	});
};