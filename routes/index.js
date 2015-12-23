var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/pantilt/:panAngle/:tiltAngle', function(req, res, next) {
	var exec = require('child_process').exec;
	var cmd = 'echo ' + req.params.panAngle + ' | sudo ./routes/servo.py';

	exec(cmd, 
			 {
		timeout:1000
	},
			 function(error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});
});

module.exports = router;
