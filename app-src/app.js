const express = require('express');
const bp = require('body-parser')

const path = require('path');
const app = express();

const hostname = '0.0.0.0';
const port = process.env.PORT || 8080;

const process_url = process.env.PROCESS_API_URL;
const model_url = process.env.MODEL_API_URL;

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/predict', function(req, res) {
  console.log("Recieving data ", req.body.data);
  res.send({'result': 'true', 'data': -1});
});

app.listen(port);
console.log('Server started at http://localhost:' + port);