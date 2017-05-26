var ImageController={
	//[Must] getImage: ID를 이용하여 이미지를 가져옵니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
	getImage:function(callback){
		(new Model.Project()).save(function(err){
	        if(err){
	            console.error(err);
	            callback({result: 0});
	            return;
	        }
	        callback({result: 1});
	    });
	},
	//[Must] uploadImage: 이미지를 업로드합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
	uploadImage:function(project,callback){
		project.save(function(err){
	        if(err){
	            console.error(err);
	            callback({result: 0});
	            return;
	        }
	        callback({result: 1});
	    });
	}
};

module.exports=ImageController;