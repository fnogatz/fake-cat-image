var http = require('http');
var fs = require('fs');
var path = require('path');

var PORT = process.env.npm_package_config_port || require(path.resolve(__dirname, 'package.json')).config.port;
var BASE = process.env.npm_package_config_base || require(path.resolve(__dirname, 'package.json')).config.base;

http.createServer(function(req, res) {
  if (req.url === BASE+'cat.jpg' && (req.method === 'HEAD' || req.method === 'GET')) {
    // static HTML
    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': 334 });
    if (req.method === 'HEAD') { 
      res.end();
      return;
    }
    fs.createReadStream(path.resolve(__dirname, 'cat.html')).pipe(res);
  }
  else if (req.url === BASE+'cat.html' && (req.method === 'HEAD' || req.method === 'GET')) {
    // real image
    res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Content-Length': 94344 });
    if (req.method === 'HEAD') { 
      res.end();
      return;
    }    
    fs.createReadStream(path.resolve(__dirname, 'cat.jpg')).pipe(res);
  }
  else {
    res.writeHead(404);
    res.end();
  }
}).listen(PORT);

console.log('Server running at port '+PORT);