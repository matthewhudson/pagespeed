'use strict';

var Hapi = require('hapi');
var arbitraryImageSize = require('./arbitraryImageSize');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: process.env.PORT || 8000
});

server.register(require('inert'), function () {
  // Add the route
  server.route({
    method: 'GET',
    path:'/image',
    handler: function (request, reply) {
      var image = arbitraryImageSize(request.query.bytes);
      console.log(image);
      return reply.file(image);//.type('image/png');
    }
  });

  // Start the server
  server.start((er) => {
    if (er) {
      throw er;
    }
    console.log('Server running at:', server.info.uri);
  });
});
