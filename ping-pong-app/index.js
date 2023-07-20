const app = require('express')()
let count = 0

app.get('/pingpong', (req, res) => {
  res.send(`pong ${count++}`)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
