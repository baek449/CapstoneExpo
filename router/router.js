module.exports = function(app)
{
	// 여기에서 라우터를 불러옵니다
	require('./routerMember')(app);
	require('./routerProject')(app);
	require('./routerPost')(app);
	require('./routerImage')(app);
	
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