const express = require('express')
const app = express()
const port = 3000

app.get('/homepage', (req, res) => {
  res.write('<h1 style="color:green">Welcome to homepage</h1>')
})

app.listen(port, () => {
  console.log('Server is running')
})