var express    = require('express');        // call express
var router     = express.Router();          // router

//Contest model
var Contest       = require('../models/contest');

router.route('/')
	.get(function (req, res) {

		Contest.find(function(err, docs) {
			if (err) {
				res.json({
					status: 403,
					body: ''
				});
			} else {
				res.json({
					status: 200,
					body: docs
				});
			}
		});


		console.log('get contest')
	})
	.post(function (req, res) {

		var contest = new Contest();      // create a new instance of the Contest model

		contest.title = req.body.title;
		contest.dateFrom = req.body.date_from;
		contest.dateDue = req.body.date_due;
		contest.user = 'test_user';
		contest.hash = 'some_hash';


		console.log('contest', contest)

		contest.save(function(err) {
			if (err) {
				res.send(err);
			} else {
				res.json({
					status: 200,
					body: ''
				});
			}
		});

		console.log('create contest')
		res.json({ contest: 'post' });
	});

router.route('/:user')
	.get(function (req, res) {
		var reqUser = req.params.user;

		Contest.find({ 'user': reqUser }, function (err, docs) {
			if (err) {
				res.json({
					status: 403,
					body: 'user'
				})
			} else {
				res.json({
					status: 200,
					body: docs
				});
			}
		});
		console.log('find by user')
	});

module.exports = router;