var express = require('express');
var router = express.Router();
var fs = require("fs-extra");

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
			title: 'video',
			content: {
				folders: function getFolders() {
					try {
					  fs.copySync('/meida/', '/tmp/mynewfile')
					  	console.log('success!')
					} 
					catch (err) {
					  console.error(err)
					}
				}
			}
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
