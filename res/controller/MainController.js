const fs = require('fs');
exports.HomePage = (req, res) => {

    fs.readFile('./res/view/index.html', 'utf8', function(err, data) {

        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });

}


exports.getFiles = (req, res) => {

    fs.readdir('./res/upload/', function(err, files) {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
            const imageList = files.filter(files => /\.(jpg|jpeg|png|gif)$/i.test(files));
            res.json(imageList);
        }
      });

}