const server = require('./src/app')

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
