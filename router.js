(function() {
  var route;

  route = function(handle, pathName, resp) {
    console.log("About to route a request for " + pathName);
    if (typeof handle[pathName] === 'function') {
      return handle[pathName](resp);
    } else {
      console.log("No request handler found for " + pathName);
      resp.writeHead(404, {
        'Content-Type': "text/plain"
      });
      resp.write("404 Page not found!");
      return resp.end();
    }
  };

  exports.route = route;

}).call(this);
