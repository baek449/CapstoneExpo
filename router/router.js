module.exports = function(app,Model)
{
	// 여기에서 라우터를 불러옵니다
	require('./routerMember')(app,Model);
	require('./routerProject')(app,Model);
	require('./routerPost')(app,Model);
	require('./routerImage')(app,Model);
	
	/*
	// TODO Additional page render
     app.get('/',function(req,res){
        res.render('index.html');
     });
     
     app.get('/error',function(req,res){
    	 res.render('error.html');
     });
     */
};