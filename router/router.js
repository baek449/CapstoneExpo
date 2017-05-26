module.exports = function(app)
{
	require('./routerAccount')(app);
	
	// Basic page render
     app.get('/',function(req,res){
        res.render('index.html');
     });
     
     app.get('/error',function(req,res){
    	 res.render('error.html');
     });
     
     app.get('/team_details',function(req,res){
    	 res.render('team_details.html');
     });
     
     app.get('/team_members',function(req,res){
    	 res.render('team_members.html');
     });
};