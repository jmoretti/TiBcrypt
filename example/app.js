// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var bcrypt = require('com.emunworks.bcrypt');
Ti.API.info("module is => " + bcrypt);

var salt = bcrypt.generateSaltWithNumberOfRounds(10);
var hash = bcrypt.hashPassword('BadPassword', salt);
label.text = 'You're salted hash of "BadPassword" is ' + hash + '.';

/* You can verify a new password by comparing the new password's hash against the stored hash, like so:
verifyPassword = function(password, storedHash){
	var bcrypt = require('com.emunworks.bcrypt');
	var newHash = bcrypt.hashPassword(password, storedHash);
	var result = (newHash == storedHash);
	return result;
}

*/
