const path = require('path')
const express = require('express')
const aylien = require('aylien_textapi')
const dotenv = require('dotenv')
const app = express()

let sentimentData = {};

dotenv.config()

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
})

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/sentiment', function (req, res) {
    res.send(sentimentData)
})

app.post('/sentiment', (req, res) => {
  if (!req.body) { return; }
  const url = req.body;
  sentitmentData = textapi.sentiment({
    'url': url
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });
})
