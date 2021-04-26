const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    message: 'hello from api'
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
