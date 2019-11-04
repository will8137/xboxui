var express = require('express');
var router = express.Router();
var page = {
	nav: [
		{
			title: 'Google'
		},
		{
			title: 'jdms'
		},
		{
			title: 'music'
		},
		{
			title: 'video'
		},
		{
			title: 'sign in'
		}
	]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', page);
});

module.exports = router;
