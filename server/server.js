var express = require('express');


var app = express();


var port = 3003;

app.listen(port, () => {
  console.log('server listening on', port);
});
