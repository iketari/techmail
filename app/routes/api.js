module.exports = function (app, express) {
	'use strict';
	var router = express.Router();

	router.get('/', function(req, res) {
		res.render('index');
	});

	router.get('/partials/:name', function (req, res) {
		var name = req.params.name;
		res.render('partials/' + name);
	});

	//apply router
	app.use('/', router);
}