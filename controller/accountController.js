var accountController={};
accountController.level={visitor:0,nonmember:1,member:2,admin:3};

// Receive customer account, h(password), create session.
accountController.login=
	function(req,memberID,memberPW){
	// TODO Check login here
	
	// TODO failure treatment here
	
	// Session Making
	req.session.memberID=memberID;
	req.session.type=accountController.level.member;
};

// Check the user
accountController.check=
	function(req,type){
	if(typeof req.session != 'undefined')
		return req.session.type==type;
	else
		return false;
};

// Logout
accountController.logout=
	function(req){
	req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
    });
};

module.exports=accountController;