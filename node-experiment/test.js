var filesYo = require('fs');
var https = require('https');

// Write out a file and place content in the file
filesYo.writeFile(__dirname + "/index.html", "<h1>you rock!</h1>");

var dogURL = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg" ;

var dogFile = filesYo.createWriteStream(__dirname + "/node-dog.jpg");

var request = https.get(dogURL, function(response){
	response.pipe(dogFile);
});

