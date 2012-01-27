http = require 'http'
url = require 'url'
start = (route, handle) ->
  http
    .createServer (req, resp) ->
      pathName = url.parse(req.url).pathname
      console.log "Request for #{pathName} received."
      route(handle, pathName, resp)
#      resp.writeHead 200, {'Content-Type': 'text/plain'}
#      resp.write '你好！ node！'
#      resp.end()
    .listen 888
  console.log 'Server has started.'
exports.start = start