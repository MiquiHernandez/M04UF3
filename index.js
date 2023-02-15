const http = require("http");
const fs = require("fs");
const files_static = require("node-static");

let files = new files_static.Server("./public");
/*
function send_index (response)
{
	fs.readFile("index.html", function(err, data){
		if (err){
			console.error(err);
			return;
		}

		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(data);

		response.end();
	});
}

function send_player (response)
{
	fs.readFile("player.png", function(err, data){
		if (err){
			console.error(err);
			return;
		}

		response.writeHead(200, {"Content-Type":"image/png"});
		response.write(data);

		response.end();
	});
}

*/
http.createServer(function(request, response){
	console.log(request.url);

	let url = request.url.split("/");

	request.addListener('end',function () {
		files.serve(request, response);

	}).resume();

}).listen(6969);
