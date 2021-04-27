const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  const email = req.body.email
  const pass = req.body.password
  res.send({
    message: `User Created! Email: ${email}, Password: ${pass}`
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
