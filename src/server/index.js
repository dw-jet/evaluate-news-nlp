const path = require('path')
const express = require('express')
const aylien = require('aylien_textapi')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

dotenv.config()

let sentimentData = {};
let currentURL = {};

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
})

const sentimentAnalysis = (url) => {

}

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
    console.log('Example app listening on port 3030!')
})

app.get('/sentiment', function (req, res) {
  textapi.sentiment({url: currentURL, mode: "document"}, function(error, response) {
    if (error === null) {
      res.send(response);
    }
    else {
      console.log(error)
    }
  })
})

app.post('/sentiment', function (req, res) {
  currentURL = req.body.url;
})
