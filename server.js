(function() {
  var http, start, url;

  http = require('http');

  url = require('url');

  start = function(route, handle) {
    http.createServer(function(req, resp) {
      var pathName;
      pathName = url.parse(req.url).pathname;
      console.log("Request for " + pathName + " received.");
      return route(handle, pathName, resp);
    }).listen(888);
    return console.log('Server has started.');
  };

  exports.start = start;

}).call(this);
