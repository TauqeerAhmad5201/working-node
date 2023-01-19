const express = require('express')
const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/reactor', (req, res) => {
    res.sendFile(__dirname+'/public/html/main.html')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})