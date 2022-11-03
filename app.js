const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Get Methode auf localhost:3000/ oder 127.0.0.1:3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Startet den Server und hört auf Port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`) //Magic Number
})