var FileController=function(Model){return{
	//[Must] uploadFile: 파일명을 받아 파일의 존재를 기록하고, ID값을 돌려줍니다.
	uploadFile:function(fileId,originalName,callback){
		var f=new Model.File({_id:fileId,name:originalName});
		f.save(function(err){
	        if(err){
	            console.error(err);
	            callback({error: 1});
	            return;
	        }
	        callback({result: fileId});
	    });
	},
	//[Must] getFile: ID를 이용하여 파일을 가져옵니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
	getFileName:function(fileId, callback){
		Model.File.findOne({_id:fileId}, function(err, data){
	        if(err){
	            console.error(err);
	            callback({error: 1});
	            return;
	        }
	        callback({result: data.name});
	    });
	},
	//[Could] deleteFile: 파일을 삭제합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
	deleteFile:function(project,callback){
		// TODO 파일을 삭제하고, DB에서도 삭제합니다.
	}
};
};

module.exports=FileController;