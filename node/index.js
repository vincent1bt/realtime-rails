var redis = require('redis')
var socketio = require('socket.io')
var http = require('http')

var client = redis.createClient()
var server = http.createServer()
var port = 4000

var io = socketio(server)
client.subscribe('chanel-posts')

io.on("connection", function(socket) {
	client.on('message', function(channel, msg) {
		console.log(channel)
		socket.emit('new-post', JSON.parse(msg))
	})
})

server.listen(port, function() {
  console.log('server listening in port: ' + port)
})