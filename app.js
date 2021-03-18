var http = require('http');
var server = http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = `
<!DOCTYPE html>
<html>
<style>
body, html {
  height: 100%;
  margin: 0;
}

.bgimg {
  background-image: url('img.jpg');
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 35px;
}

.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

hr {
  margin: auto;
  width: 40%;
  background-color:'#fffff';
}
</style>
<body>

<div class="bgimg">
  <div class="topleft">
   
  </div>
  <div class="middle">
    <h1>Ghbusinesses.com</h1>
    <hr>
    <p>coming soon</p>
  </div>
  <div class="bottomleft">
  </div>
</div>

</body>
</html>
        `;
    res.end(response);
});
server.listen();
