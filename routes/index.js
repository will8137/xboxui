var express = require('express');
var router = express.Router();
var page = {
	index: {
		title: 'JDMS'
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', page);
});

module.exports = router;
