const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.write('Página en blanco')
})

app.get('/menu', (req, res) => {
  res.sendFile(__dirname + '/menu.html')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html')
  })

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/services.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})

app.listen(port, () => {
  console.log('Server is running')
})