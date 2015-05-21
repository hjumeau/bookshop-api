var express = require('express'),
	api = require('./api/routes'),
	app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname ));

app.get('/',function(req, res) {
  res.render('index.html');
});

app.use('/api', api);

// spin up server
app.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
