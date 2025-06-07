require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8888

app.listen(port, () => {
  console.log(`\n Server on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Endpoint */
app.get('/welcome', (req, res) => {
  result = {
    "Message" : `Welcome To this API ${process.env.NAME}`,
    "Status Code" : 200,
  }
  res.json(result)
})

app.get('/home', (req, res) => {
    result = {
        "Message" : `hello world`,
        "Status_code" : 200,
    }
    res.json(result)
})

module.exports = app