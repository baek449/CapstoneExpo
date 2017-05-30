var ImageController=function(Model){return{
	//[Must] uploadImage: 파일명을 받아 이미지의 존재를 기록하고, ID값을 돌려줍니다.
	uploadImage:function(imageId,originalName,callback){
		var img=new Model.Image({_id:imageId,name:originalName});
		img.save(function(err){
	        if(err){
	            console.error(err);
	            callback({error: 1});
	            return;
	        }
	        callback({result: imageId});
	    });
	},
	//[Could] deleteImage: 이미지를 삭제합니다. 결과를 인자로 받는 콜백 함수를 부릅니다.
	deleteImage:function(project,callback){
		// TODO 이미지를 삭제하고, DB에서도 삭제합니다.
	}
};
};

module.exports=ImageController;