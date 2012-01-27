(function() {
  var handle, rhs, router, server;

  server = require('./server');

  router = require('./router');

  rhs = require('./requestHandlers');

  handle = {
    '/': rhs.start,
    '/start': rhs.start,
    '/upload': rhs.upload
  };

  server.start(router.route, handle);

}).call(this);
