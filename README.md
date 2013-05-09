TiBcrypt
========
# bcrypt Module

## Description

This is a Titanium Module Wrapper of Jay Fuerstenberg's JFBCrypt which is an Objective C port of Damien Miller's jBCrypt.

## Accessing the bcrypt Module

To access this module from JavaScript, you would do the following:

	var bcrypt = require("com.emunworks.bcrypt");

The bcrypt variable is a reference to the Module object.	

## Reference

The module has two functions:
bcrypt.generateSaltWithNumberOfRounds(rounds) which returns a salt using the number of rounds as an Int passed to it.

bcrypt.hashPassword(password, salt) which returns a bcrypt hash of the string type password and using the string type salt.


## Usage

Some examples:

	generateSalt = function(rounds){
		var rounds = rounds || 10;
		var bcrypt = require('com.emunworks.bcrypt');
		var salt = bcrypt.generateSaltWithNumberOfRounds(rounds);
		return salt;
	}
	hashPassword = function(password){
		var bcrypt = require('com.emunworks.bcrypt');
		var hash = bcrypt.hashPassword(password, generateSalt(10));
		return hash;
	}
	verifyPassword = function(password, hash){
		var bcrypt = require('com.emunworks.bcrypt');
		var newHash = bcrypt.hashPassword(password, hash);
		var result = (newHash == hash);
		return result;
	}



## Author
Joe Moretti
https://github.com/jmoretti

## License
Apache License, Version 2.0

