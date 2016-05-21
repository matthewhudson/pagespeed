var crypto = require('crypto');
var fs = require('fs');
var path = require('path');

module.exports = function (bytes) {
  bytes = parseInt(bytes) || 100;
  var file = {
    name: '/tmp-file',
    extension: 'png',
    path: '/tmp'//path.join(__dirname, '/tmp')
  };

  var writeFile = [
    file.path,
    file.name,
    '.',
    file.extension
  ].join('');

  console.info("Writing to: ", writeFile);

  var writeStream = fs.createWriteStream(writeFile);
  var buffer = crypto.randomBytes(bytes);

  writeStream.write(buffer);
  writeStream.end();

  return writeFile;
};
