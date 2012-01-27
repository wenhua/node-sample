(function() {
  var exec, start, upload;

  exec = require('child_process').exec;

  start = function(resp) {
    console.log("Request handler 'start' was called.");
    resp.writeHead(200, {
      'Content-Type': "text/plain"
    });
    resp.write("<html></html>");
    return resp.end();
  };

  upload = function(resp) {
    console.log("Request handler 'upload' was called.");
    resp.writeHead(200, {
      'Content-Type': "text/plain"
    });
    resp.write("Hello Upload!");
    return resp.end();
  };

  exports.start = start;

  exports.upload = upload;

}).call(this);
