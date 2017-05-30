var fs=require('fs');
var imageAddress='image/';
var fileAddress='file/';

module.exports = function(app,Model)
{
	const ImageController=require('../controller/imageController')(Model);
	const FileController=require('../controller/fileController')(Model);
	var multer  = require('multer')({ dest: 'image/' })
	var multerFile  = require('multer')({ dest: 'file/' })
	// 이미지를 리턴하는 주소입니다. 이 주소만 유일하게 json 객체가 아닌 이미지를 리턴합니다.
	// 예시: http://localhost:3000/image/590c123412343921e8ffb39c
	app.get('/image/download/:id',function(req,res){
		// 해당 id의 이미지를 가져옵니다.
		res.sendFile(require('path').resolve(imageAddress + req.params.id));
	});
	app.post('/image/upload',multer.single('uploadFile'), function(req,res){
		// 폼에서 파일 input의 name은 uploadFile로 설정되어 있어야 합니다.
		// 이미지를 올립니다. 이미지의 파일명을 응답합니다.
		console.log(req.file);
		ImageController.uploadImage(req.file.filename,req.file.originalname,function(data){
			res.send(data);
		});
	});
	app.get('/file/download/:id',function(req,res){
		// 해당 id의 파일을 가져옵니다.
		Filecontroller.getFileName(req.params.id,function(x){
			res.set({
			    "Content-Disposition": 'attachment; filename="'+x.result+'"'
			});
			res.sendFile(require('path').resolve(fileAddress + req.params.id));			
		});
	});
	app.post('/file/upload',multerFile.single('uploadFile'), function(req,res){
		// 폼에서 파일 input의 name은 uploadFile로 설정되어 있어야 합니다.
		// 이미지를 올립니다. 이미지의 파일명을 응답합니다.
		console.log(req.file);
		FileController.uploadFile(req.file.filename,req.file.originalname,function(data){
			res.send(data);
		});
	});
};