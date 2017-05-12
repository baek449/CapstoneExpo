module.exports = function(app,dao)
{
	// Main Page - http://localhost:23400/
	// Login Page - http://localhost:23400/login
	// Member Page - http://localhost:23400/memberPage
	// Error Page - http://localhost:23400/error
	
	require('./routerAccount')(app,dao);
	
	// Basic page render
     app.get('/',function(req,res){
        res.render('index.html');
     });
     
     app.get('/error',function(req,res){
    	 res.render('error.html');
     });
};