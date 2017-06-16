//Load express
var express = require("express");


//Create an instance of the application
var app = express();



/*
//Define routes
app.use("index.html", function (req, res) {
    res.status(200);
    res.type("text/html");
    res.send("<h1>hello</h1>");
});
*/

app.use("/randomimg", express.static(__dirname + "/pics"));

app.get("/randomimg",
    function (req, resp) {
        console.log(">>> header: %s", req.get("User-Agent"));
        console.log(">>> method: %s", req.method);
        console.log(">>> url: %s", req.url);

        var imgArray = ["a", "b", "c", "d"];

        imgArray[0] = 'good.png';
        imgArray[1] = 'harry_quote.jpg';
        imgArray[2] = 'support2.png';
        imgArray[3] = 'trust.png';

        var randomImg = imgArray[Math.floor(Math.random() * imgArray.length)];

        //document.body.innerHTML = randomImg;

        resp.status(200);
        resp.type( "png", "jpg");  //MIME
        resp.sendFile(__dirname + "/pics/" + randomImg); //you can only output the data ONCE; note this is just a fast example; should do on separate html file
    }
);    



app.use(express.static(__dirname + "/public"));


//when in doubt, use console.log to understand what the code line is 
//var e = express.static(__dirname + "public")
//console.log("e =" + e)
//console.log("typeof(e) =" + typeof(e));





//Create server; note that this code allows us to change the port number simply by typing "node index.js <number>"
//if port is provided, use port; otherwise default to 3000

var port = parseInt(process.argv[2]) || 3000   // note that sequence here is very important, because it is a boolean function, from left to right

/*
var a = ""
var b = "3"
a || b  //OR argument <-- 3
c || b    <-- x
a && b   //AND argument
*/

/*
var port = 3000;
if (process.argv[2])  // note that this is a boolean argument, so when it is not undefined, it is true
    port = parseInt(process.argv[2]);
*/

//Bind server to port
app.listen(port, function () {
    console.log("Application started on port %d", port);
});
