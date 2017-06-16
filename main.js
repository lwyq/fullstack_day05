//Class Exercise Solution: loading through the text/html; this is 

//Load express
var express = require("express");


//Create an instance of the application
var app = express();

var generateImg = function () {
    var imgIdx = Math.round(Math.random() * 2);
    return "<img src= '/images/number" + imgIdx + ".jpg'>";
}


//Create a route for randoming
app.get("/randomimg", function (req, res) {
    res.status(200);
    res.type("text/html");
    res.send(generateImg());
});




//Mount public as a static resource directory
app.use(express.static(__dirname + "/public"));


//Create server; note that this code allows us to change the port number simply by typing "node index.js <number>"
//if port is provided, use port; otherwise default to 3000

var port = parseInt(process.argv[2]) || 3000

//Bind server to port
app.listen(port, function () {
    console.log("Application started on port %d", port);
});





