exec = require('child_process').exec
start = (resp) ->
  console.log "Request handler 'start' was called."
  resp.writeHead 200, {'Content-Type': "text/plain"}
  resp.write "<html></html>"
  resp.end()

upload = (resp) ->
  console.log "Request handler 'upload' was called."
  resp.writeHead 200, {'Content-Type': "text/plain"}
  resp.write "Hello Upload!"
  resp.end()
exports.start = start
exports.upload = upload
































