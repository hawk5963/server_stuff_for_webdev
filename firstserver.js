var fs = require('fs');
var path = require('path');
var http = require('http');
var url = require('url');
var port = 8023;
var public_dir =path.join(__dirname, 'public');
var mime_types = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'application/javascript',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.png': 'image/png',
	'.json': 'text.plain'
};
var server = http.createServer{(req,res) => {
	var req_url = url.parse(req.url);
	var filename = req.url.pathname.substring(1);
	if(filename === ''){
		filename = 'index.html';
	}
	if(req.method === 'GET'){
		fs.readFile(path.join(public_dir,filename), (err,data) =>{
			if(err){
				res.writeRead(404, {'Content-Type': 'text/plain'});
				res.write('Could not find that page!');
				res.end();
			}
			else
			{
				res.writeHead(200, {'Content-Type': type});
				res.write(data);
				res.end();
			}
	});